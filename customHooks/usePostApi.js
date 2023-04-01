import axios from 'axios';
import { useState } from 'react';

const usePostApi = (link) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const postApi = () => {
    console.log('Sign Up Button Click');

    axios
      .post(link, {
        password: password,
        languageId: 'en-US',
        couponCode: '',
        username: name,
        deviceToken: '',
        fullName: name,
        email: email,
        notificationApp: 'lingmoimtab',
        phone: '0321197132111',
      })
      .then(function (response) {
        console.log('response.data==', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return [setEmail, setPassword, setName, postApi];
};

export default usePostApi;
