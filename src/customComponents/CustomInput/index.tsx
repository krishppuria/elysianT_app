import React from 'react';
import {Text, Input, FormControl} from 'native-base';

import styles from './styles';

const CustomInput = (props: any) => {
  const {errorMessage} = props;

  return (
    <FormControl isInvalid={!!errorMessage}>
      <Input style={styles.input} {...props} />
      {errorMessage ? (
        <FormControl.ErrorMessage>
          <Text color="red.500">{errorMessage}</Text>
        </FormControl.ErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default CustomInput;
