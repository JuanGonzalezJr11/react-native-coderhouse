import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { db } from "../data/realtimeDataBase"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: db }),
    tagTypes: ['profileImageGet'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        }),
        getProductById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                if (responseTransformed.length) return responseTransformed[0]
                return null
            }
        }),
        postOrder: builder.mutation({
            query: ({ ...order }) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        }),
        getOrderByUser: builder.query({
            query: (user) => `orders.json?orderBy="user"&equalTo="${user}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                const parseDate = (dateString) => {
                    const [datePart, timePart] = dateString.split(', ')
                    const [day, month, year] = datePart.split('/').map(Number)
                    const [hour, minute, second] = timePart.split(':').map(Number)
                    return new Date(year, month - 1, day, hour, minute, second)
                }
                responseTransformed.sort((a, b) => parseDate(b.createdAt) - parseDate(a.createdAt));
                return responseTransformed
            }
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                }
            }),
            invalidatesTags: ['profileImageGet']
        })
    })
})

export const { useGetCategoriesQuery,
    useGetProductByIdQuery,
    useGetProductsByCategoryQuery,
    usePostOrderMutation,
    useGetOrderByUserQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = shopApi