import colors from '@/styles/colors';
import Metrics from '@/utils/metrics';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {},
  imgPost: {
    width: Metrics.screenWidth,
  },
  divider: {
    height: 0.6,
    backgroundColor: colors.border + '80',
  },
  actionWrapper: {
    margin: 12,
  },
  actionFrame: {
    paddingVertical: 8,
    paddingHorizontal: 2,
    minWidth: 48,
    borderRadius: Metrics.radius,
    borderWidth: 0.6,
    borderColor: colors.border + '80',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  btnUpvote: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    borderWidth: 0.6,
    borderTopLeftRadius: Metrics.radius,
    borderBottomLeftRadius: Metrics.radius,
    borderColor: colors.border + '80',
  },
  btnDownvote: {
    paddingHorizontal: 8,
    borderTopRightRadius: Metrics.radius,
    borderBottomRightRadius: Metrics.radius,
    borderWidth: 0.6,
    borderLeftWidth: 0,
    borderColor: colors.border + '80',
  },
  btnAction: {
    paddingVertical: 8,
    paddingHorizontal: 2,
    minWidth: 48,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  btnActionActive: {
    backgroundColor: colors.primary_1,
    borderColor: colors.primary_1,
  },
  btnActionSingle: {
    justifyContent: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
    borderWidth: 0.6,
    borderColor: colors.border + '80',
    borderRadius: Metrics.radius,
  },

  commentsContainer: {
    flex: 1,
    paddingHorizontal: Metrics.marginHorizontal,
  },
  commentsHeader: {
    paddingVertical: 8,
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal - 8,
    borderBottomWidth: 0.6,
    borderColor: colors.border + '33',
    backgroundColor: colors.white,
  },
  btnClose: {
    padding: 8,
  },
  totalComments: {
    paddingVertical: 12,
    paddingHorizontal: Metrics.marginHorizontal,
    backgroundColor: colors.white,
  },

  postInfo: {
    padding: 12,
  },

  tags: {
    margin: 12,
    marginBottom: 0,
  },

  inputContainer: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal / 2,
    paddingVertical: 8,
    borderTopWidth: 0.6,
    borderColor: colors.border + '33',
    backgroundColor: colors.white,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: Metrics.radius,
    backgroundColor: colors.white,
    borderWidth: 0.6,
    borderColor: colors.border + '33',
    paddingHorizontal: 16,
  },
  input: {
    padding: 0,
    height: 44,
  },
  btnInputAction: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },

  shadow: {
    elevation: 1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.8,
  },
});
