import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../features/userSlice'
import { usePostOrderMutation } from '../services/shopService'

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()
    const [triggerPostImage, result] = usePostOrderMutation()
    const { localId } = useSelector(state => state.auth.value)
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        return granted
    }
    const pickImage = async () => {
        try {
            const permissionsCamera = await verifyCameraPermissions()
            if (permissionsCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2
                })
                if (!result.canceled) {
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
        } catch (error) {

        }
    }
    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image))
            triggerPostImage({ image, localId })
            navigation.goBack()
        } catch (error) {

        }
    }
    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Pressable style={styles.button}>
                        <Text style={styles.textButton} onPress={pickImage}>Tomar otra foto</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={confirmImage}>
                        <Text style={styles.textButton}>Confirmar foto</Text>
                    </Pressable>
                </>
            ) : (<>
                <View style={styles.noPhotoContainer}>
                    <Text style={styles.textNoPhotoContainer}>Seleccione una imagen...</Text>
                </View>
                <Pressable style={styles.button} onPress={pickImage}>
                    <Text style={styles.textButton}>Tomar foto</Text>
                </Pressable>
            </>)}
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 125
    },
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        padding: 15,
        width: "90%"
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center'
    },
    noPhotoContainer: {
        height: 250,
        width: 250,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 125
    },
    textNoPhotoContainer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center'
    }
})