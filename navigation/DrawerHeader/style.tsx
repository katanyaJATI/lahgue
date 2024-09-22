import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 8,
    borderBottomWidth: 0.6,
    borderColor: colors.border + '33',
    height: 48,
  },
  btnDrawer: {
    padding: 8,
  },
  imgLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
