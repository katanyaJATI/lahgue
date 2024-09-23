import colors from '@/styles/colors';
import Metrics from '@/utils/metrics';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    paddingVertical: Metrics.marginHorizontal,
    paddingHorizontal: Metrics.marginHorizontal,
    borderBottomWidth: 0.6,
    borderColor: colors.border + '33',
  },
  noBorder: {
    borderBottomWidth: 0,
    paddingVertical: 2,
  },
  img: {
    width: Metrics.screenWidth * 0.35,
    height: Metrics.screenWidth * 0.35,
    borderRadius: 4,
  },
  imgSmall: {
    width: (Metrics.screenWidth * 0.35) * 0.75,
    height: (Metrics.screenWidth * 0.35) * 0.75,
    borderRadius: 4,
  },
  btnExpand: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.primary_1,
    borderRadius: 100,
    alignSelf: 'flex-start'
  },
});
