import React, {useState} from 'react';
import {useToast} from 'native-base';

import SignUpScreen from '../../entities/SignUpScreen';
import {CONSTANTS} from '../../constants';
import authService from '../../apiCall/services/authService';

const SignUp = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //api implementation for signup
  const handleSignup = async (firstName: string, lastName: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await authService.signUp({firstName,lastName,email,password,});
      toast.show({
        description: res?.message,
        duration: 2000
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.show({
        description: CONSTANTS.SOMETHING_WRONG,
        duration: 2000
      });
    }
  };

 return (
    <SignUpScreen 
    handleSignup={handleSignup}
    isLoading={isLoading}
    />
  );
};

export default SignUp;
