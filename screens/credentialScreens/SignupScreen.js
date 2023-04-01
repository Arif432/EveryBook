import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import NavBarComponent from '../../components/NavBarComponent';
import InputComponent from '../../components/input/InputComponent';
import PrimaryButtonComponent from '../../components/Buttons/PrimaryButtonComponent';
import SecondaryButtonComponent from '../../components/Buttons/SecondaryButtonComponent';
// import usePostApi from '../CustomHooks/usePostApi';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignupScreen = ({ navigation }) => {
  // const [setEmail, setPassword,setName,postApi] = usePostApi(
  //   'http://talk2you-live.lingmo-api.com/api/user'
  // );
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [name,setName] = useState();
  const [loginSuccess, setloginSuccess] = useState(true)


  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  };

  return (
      <ScrollView>

      <NavBarComponent label={'Signup'} heading="New to EveryBook?" info={"get registered to become member"}/>

      <View className="flex-1">
        <Text className="text-lg font-medium ml-4">Email</Text>
        <InputComponent 
        onChangeText={setEmail} 
        placeholder={'E-mail'} 
        icon="mail" />

        <Text className="text-lg font-medium ml-4">Name</Text>
        <InputComponent 
        onChangeText={setName} 
        placeholder={'Name'} 
        icon="person" />

        <Text className="text-lg font-medium ml-4">Password</Text>
        <InputComponent
          onChangeText={setPassword}
          placeholder={'Password'}
          icon={'lock'}
          password={true}
        />

        <Text className="text-lg font-medium ml-4">Confirm Password</Text>

        <InputComponent placeholder={'Confirm Password'} icon={'lock'} password={true} />

        <PrimaryButtonComponent
          label={'Create Account'}
          screen={'LoginScreen'}
          navigation={navigation}
          loginSuccess={loginSuccess}
          onPress={handleSignUp}
        />

        <SecondaryButtonComponent
          label={'Signin'}
          navigation={navigation}
          screen={'LoginScreen'}
          border={false}
          extraText={'already on EveryBook?'}
        />
      </View>
    </ScrollView>

  );
};

export default SignupScreen;
