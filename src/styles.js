import {StyleSheet} from 'react-native';
import colors from './theme/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    zIndex: 10,
    height: '100vh',
  },

  container: {
    flex: 1,
    zIndex: 10,
  },

  contentScrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scrollView: {
    flex: 1,
    flexGrow: 1,
  },

  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderWidth: 2,
    elevation: 24,
    borderColor: colors.primary,
  },

  buttonText: {
    color: colors.primary,
    paddingHorizontal: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 0,
    fontFamily: 'Roboto-Regular',
  },

  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },

  contentLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentNotFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textNotFound: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.gray,
    marginBottom: 40,
  },

  image: {
    height: 275,
  },

  contentButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },

  contentButton: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },

  textFont: {
    fontSize: 16,
  },

  contentSelect: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: `${colors.primary}22`,
  },

  contentIcon: {
    backgroundColor: `${colors.primary}22`,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  footer: {height: 200, backgroundColor: '#00DCCF', maxHeight: '30%'},

  contentTextFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    zIndex: 2,
    transform: [
      {
        translateY: 16,
      },
    ],
  },

  textFooter: {
    color: '#0A2854',
    fontSize: 42,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default styles;