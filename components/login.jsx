import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from './inputForm'
import SubmitButton from './submitButton'
import { useSignInMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'
import { colors } from '../constants/colors'
import { signInSchema } from '../validations/authSchema'

const Login = ({ navigation }) => {
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState("")
    const [errorMail, setErrorMail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
        else if(result.isError) {
            let message = result.error.data.error.message
            message = message.split(" ")[0]
            switch (message) {
                case "TOO_MANY_ATTEMPTS_TRY_LATER":
                    setErrorPassword("Ha ingresado la contraseña mal demasiadas veces")
                    break;
                case "INVALID_LOGIN_CREDENTIALS":
                    setErrorPassword("La contraseña ingresada es incorrecta")
                    break;
                default:
                    break;
            }
        }
    }, [result])
    const onSubmit = () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            const validation = signInSchema.validateSync({ email, password }, { abortEarly: false })
            triggerSignIn({ email, password })
        } catch (error) {
            error.inner.forEach(e => {
                switch (e.path) {
                    case "email":
                        setErrorMail(e.message)
                        break;
                    case "password":
                        setErrorPassword(e.message)
                        break;
                    default:
                        break;
                }
            })
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>¡Bienvenido!</Text>
                <View style={styles.inputContainer}>
                    <InputForm
                        label={"Email..."}
                        onChange={setEmail}
                        error={errorMail}
                    />
                    <InputForm
                        label={"Contraseña..."}
                        onChange={setPassword}
                        error={errorPassword}
                        isSecure={true}
                    />
                </View>
                <SubmitButton
                    onPress={onSubmit}
                    title="Iniciar sesión"
                />
                <View>
                    <Text style={styles.text}>¿Aún no tenes cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.subLink}>Registrarme</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.productBy}>Product by Juan Gonzalez | 2024</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    container: {
        alignItems: "center",
        gap: 10,
    },
    inputContainer: {
        width: "100%",
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: colors.secondary,
        fontWeight: "bold"
    },
    text: {
        textAlign: "center"
    },
    subLink: {
        textDecorationLine: 'underline',
        color: colors.secondary,
        textAlign: "center"
    },
    footer: {
        position: 'absolute',
        backgroundColor: colors.white,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    productBy: {
        fontSize: 10,
        color: colors.gray
    }
})