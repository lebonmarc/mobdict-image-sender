import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import border from '../../theme/border';

export const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 10,
    minWidth: 150,
    alignItems: 'flex-end',
    height: 45,
    transform: [
      {
        translateX: 3,
      },
    ],
  },
  contentBackButton: {
    backgroundColor: colors.lightBlue,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'flex-end',
    height: 45,
    transform: [
      {
        translateX: 3,
      },
    ],
  },
  contentFullWidth: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.lightBlue,
    height: 45,
    borderColor: colors.gray,
    borderRadius: border.radius,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    elevation: 5,

    width: '100%',
    transform: [
      {
        translateX: -6,
      },
      {
        translateY: 6,
      },
    ],
  },

  small: {
    height: 40,
  },

  backButton: {
    backgroundColor: colors.white,
    height: 45,
    borderColor: colors.gray,
    borderRadius: border.radius,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    elevation: 5,

    width: '100%',
    transform: [
      {
        translateX: -6,
      },
      {
        translateY: 6,
      },
    ],
  },
  buttonText: {
    color: colors.darkBlue,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Archivo',
    fontStyle: 'italic',
  },

  backButtonText: {
    color: colors.darkBlue,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Archivo',
    fontStyle: 'italic',
  },
});

export default styles;