import React from 'react';
import {NativeBaseProvider} from 'native-base';

import SignUp from './src/usecases/SignUp';
import theme from './src/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SignUp />
    </NativeBaseProvider>
  );
};

export default App;
