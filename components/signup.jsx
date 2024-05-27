import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from './inputForm'
import SubmitButton from './submitButton'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authService'
import { setUser } from '../features/userSlice'
import { signUpSchema } from '../validations/authSchema'

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [errorMail, setErrorMail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation()
    // useEffect(() => {
    //     if(result.isSuccess) {
    //         dispatch(
    //             setUser({
    //                 email: result.data.email,
    //                 idToken: result.data.idToken
    //             })
    //         )
    //     }
    // }, [result])
    const onSubmit = () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            const validation = signUpSchema.validateSync({email, password, confirmPassword})
            triggerSignUp({email, password, returnSecureToken: true})
        } catch (error) {
            switch (error) {
                case "email":
                    setErrorMail(error.message)
                    break;
                case "password":
                    setErrorPassword(error.message)
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(error.message)
                    break;
                default:
                    break;
            }
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Creación de cuenta</Text>
                <InputForm
                    label={"email"}
                    onChange={setEmail}
                    error={errorMail}
                />
                <InputForm
                    label={"contraseña"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirmar contraseña"}
                    onChange={setConfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title="Registrarme"
                />
                <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.subLink}>Logearme</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({

})