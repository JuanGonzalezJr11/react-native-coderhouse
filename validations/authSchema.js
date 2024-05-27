import { object, string, ref } from "yup"

export const signUpSchema = object().shape({
    email: string()
        .required("Debe ingresar un email")
        .email("El email ingresado no es válido"),
    password: string()
        .required("Debe ingresar una contraseña")
        .min(6, "La contraseña debe tener como mínimo 6 caracteres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "La contraseña debe ser la misma que ingresó anteriormente")
        .required("Debe reingresar su contraseña")
})