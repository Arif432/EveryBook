import { View, Text,ImageBackground, TouchableOpacity,StatusBar, FlatList, ScrollView} from 'react-native'
import React  from 'react'
import InputComponent from '../components/InputComponent'
import LoginImg from "../assets/firstImg.jpg"
import PrimaryButtonComponent from '../components/Buttons/PrimaryButtonComponent'
import SecondaryButtonComponent from '../components/Buttons/SecondaryButtonComponent'
const LoginScreen = ({navigation}) => {
  return (

    <ScrollView 
    showsVerticalScrollIndicator={false}>

      <View className="flex-1">
        <ImageBackground
        source={LoginImg} 
        className="w-full h-80"
        resizeMode='cover'>
        </ImageBackground>


        <View className="h-full rounded-t-lg mt-[-6] w-full bg-black">
            
            <Text className="text-5xl mt-10 text-center text-white font-extralight">Welcome</Text>
            <Text className="text-sm text-center font-light text-[#aeb0b2] mb-4">Login to your account</Text>


            <View className="pb-4 pt-4">
              <InputComponent placeholder={"E-mail"} icon={"mail"}/>
              <InputComponent placeholder={"Password"} icon={"lock"} password={true}/>
            </View>

            <View className="mb-11">
              <TouchableOpacity onPress={()=>navigation.navigate("ForgotPasswordScreen")}><Text className="text-white mr-6  text-right text-sm font-extralight">forgot Password</Text></TouchableOpacity>
              <PrimaryButtonComponent label={"LOGIN"} navigation={navigation} screen={"MainScreen"} />
              <SecondaryButtonComponent label={"Signup"} navigation={navigation} screen={"SignupScreen"}  border={false} extraText={"new on EveryBook?"}/>
            </View>

        </View>

          </View>

        </ScrollView>

  )
}

export default LoginScreen

