import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: COLORS.WHITE,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
  },
  iconStyle: {
    marginLeft: 5,
    width: 24,
    height: 24,
  },
  eyeIconStyle: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  forgotContainer: {
    width: '100%',
    marginTop: 20,
  },
  forgotPassword: {
    fontSize: 14,
    textAlign: 'right',
  },
  containContainer: {
    width: '100%',
  },
  socialContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  socialImg: {
    height: 40,
    resizeMode: 'contain',
  },
  alreadyAccountText: {
    marginTop: 15,
    fontSize: 14,
    color: COLORS.GRAY_COLOR,
  },
  orContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    marginHorizontal: 10,
    color: COLORS.GRAY_COLOR,
    fontSize: 14,
  },
});

export default styles;
