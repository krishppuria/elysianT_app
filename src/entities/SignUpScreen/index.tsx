import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Button, Divider, Stack, Pressable} from 'native-base';

import {CONSTANTS} from '../../constants';
import {useForm} from '../../hooks/useForm';
import {signupValidation} from '../../helper/validation';
import {signUpData} from '../../constants/data';
import CustomInput from '../../customComponents/CustomInput';
import styles from './styles';

const SignUpScreen = (props) => {
  const {handleSignup, isLoading} = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  const onSubmitForm = () => {
    handleSignup(firstName?.value, lastName?.value, email?.value, password?.value);
  };

  const {state, handleChange, handleSubmit, disable} = useForm(
    signUpData,
    signupValidation,
    onSubmitForm,
  );
  const {firstName, lastName, email, password} = state;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.logo}
      />
      <Text fontFamily="body" color={'primary.100'} style={styles.title}>
        {CONSTANTS.SIGNUP}
      </Text>
      <Stack space={4} w="100%" alignItems="center" mt={10}>
        <CustomInput
          value={firstName.value}
          InputLeftElement={
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.iconStyle}
            />
          }
          onChangeText={text => handleChange('firstName', text)}
          placeholder={CONSTANTS.FIRST_NAME}
          errorMessage={firstName.error}
        />

        <CustomInput
          value={lastName.value}
          InputLeftElement={
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.iconStyle}
            />
          }
          onChangeText={text => handleChange('lastName', text)}
          placeholder={CONSTANTS.LAST_NAME}
          errorMessage={lastName.error}
        />

        <CustomInput
          value={email.value}
          InputLeftElement={
            <Image
              source={require('../../assets/images/email.png')}
              style={styles.iconStyle}
            />
          }
          onChangeText={text => handleChange('email', text)}
          placeholder={CONSTANTS.EMAIL}
          errorMessage={email.error}
        />

        <CustomInput
          value={password.value}
          type={showPassword ? 'text' : 'password'}
          InputLeftElement={
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.iconStyle}
            />
          }
          InputRightElement={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  !showPassword
                    ? require('../../assets/images/eye.png')
                    : require('../../assets/images/hide.png')
                }
                style={styles.eyeIconStyle}
              />
            </Pressable>
          }
          onChangeText={text => handleChange('password', text)}
          placeholder={CONSTANTS.PASSWORD}
          errorMessage={password.error}
        />
      </Stack>

      <View style={styles.forgotContainer}>
        <Text
          fontFamily="body"
          color={'primary.100'}
          style={styles.forgotPassword}>
          {CONSTANTS.FORGOT_PASSWORD}
        </Text>
      </View>
      <Button
        isDisabled={disable}
        onPress={handleSubmit}
        borderRadius={20}
        style={styles.forgotContainer}
        isLoading={isLoading}>
        {CONSTANTS.SIGNUP}
      </Button>

      <View style={styles.orContainer}>
        <Divider w="35%" />
        <Text fontFamily="body" style={styles.orText}>
          {CONSTANTS.OR_TEXT}
        </Text>
        <Divider w="35%" />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/google.png')}
            style={styles.socialImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/facebook.png')}
            style={styles.socialImg}
          />
        </TouchableOpacity>
      </View>
      <Text fontFamily="body" style={styles.alreadyAccountText}>
        {CONSTANTS.ALREADY_ACCOUNT}
      </Text>
      <Button
        color={'primary.100'}
        style={styles.forgotContainer}
        borderRadius={25}
        variant="outline"
        size="lg">
        {CONSTANTS.LOGIN}
      </Button>
    </View>
  );
};

export default SignUpScreen;
