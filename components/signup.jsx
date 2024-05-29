import { Pressable, StyleSheet, Text, ToastAndroid, View, Platform, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from './inputForm'
import SubmitButton from './submitButton'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authService'
import { signUpSchema } from '../validations/authSchema'
import { colors } from '../constants/colors'

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [errorMail, setErrorMail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation()
    useEffect(() => {
        if (result.isSuccess) {
            if(Platform.OS === 'android'){
                ToastAndroid.showWithGravity("¡El registro se ha realizado con éxito!", ToastAndroid.SHORT, ToastAndroid.TOP)
            }
            else {
                Alert.alert("¡El registro se ha realizado con éxito!")
            }
            navigation.navigate('Login')
        }
    }, [result])
    const onSubmit = () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            const validation = signUpSchema.validateSync({email, password, confirmPassword}, { abortEarly: false })
            triggerSignUp({email, password, returnSecureToken: true})
        } catch (error) {
            error.inner.forEach(e => {
                switch (e.path) {
                    case "email":
                        setErrorMail(e.message)
                        break;
                    case "password":
                        setErrorPassword(e.message)
                        break;
                    case "confirmPassword":
                        setErrorConfirmPassword(e.message)
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
                <Text style={styles.title}>Creación de cuenta</Text>
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
                    <InputForm
                        label={"Confirmar contraseña..."}
                        onChange={setConfirmPassword}
                        error={errorConfirmPassword}
                        isSecure={true}
                    />
                </View>
                {/* {signUpSuccess ? 
                    <Text style={styles.signUpSuccess}>¡Se ha registrado con éxito!</Text> 
                    : null
                } */}
                <SubmitButton
                    onPress={onSubmit}
                    title="Registrarme"
                />
                <View>
                    <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.subLink}>Logearme</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.productBy}>Product by Juan Gonzalez | 2024</Text>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
    },
    signUpSuccess: {
        fontSize: 16,
        color: colors.success,
        fontWeight: "bold"
    }
})