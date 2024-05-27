import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from './inputForm'
import SubmitButton from './submitButton'
import { useSignInMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'

const Login = ({ navigation }) => {
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        if(result.isSuccess) {
            console.log(result)
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])
    const onSubmit = () => {
        triggerSignIn({ email, password })
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <InputForm
                    label={"email"}
                    onChange={setEmail}
                    error={""}
                />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title="Iniciar sesión"
                />
                <Text style={styles.text}>¿Aún no tenes cuenta?</Text>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.subLink}>Registrarme</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

})