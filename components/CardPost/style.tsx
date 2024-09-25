import colors from '@/styles/colors';
import Metrics from '@/utils/metrics';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {},
  content: {
    flex: 1,
    width: 'auto',
    height: 'auto',
  },
  actionsWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 12,
    opacity: 0.9,
  },
  divider: {
    height: 0.6,
    backgroundColor: colors.border + '80',
  },
  actionFrame: {
    paddingVertical: 8,
    paddingHorizontal: 2,
    width: 48,
    borderRadius: Metrics.radius,
    borderWidth: 0.6,
    borderColor: colors.border + '80',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  btnUpvote: {
    borderWidth: 0.6,
    borderTopLeftRadius: Metrics.radius,
    borderTopRightRadius: Metrics.radius,
    borderColor: colors.border + '80',
  },
  btnDownvote: {
    borderBottomLeftRadius: Metrics.radius,
    borderBottomRightRadius: Metrics.radius,
    borderWidth: 0.6,
    borderTopWidth: 0,
    borderColor: colors.border + '80',
  },
  btnAction: {
    paddingVertical: 8,
    paddingHorizontal: 2,
    width: 48,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  btnActionActive: {
    backgroundColor: colors.primary_1,
    borderColor: colors.primary_1,
  },
  btnActionSingle: {
    shadowColor: colors.plain + '80',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
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
    padding: 8
  },
  totalComments: {
    paddingVertical: 12,
    paddingHorizontal: Metrics.marginHorizontal,
    backgroundColor: colors.white
  },

  postInfo: {
    position: 'absolute',
    left: Metrics.marginHorizontal,
    right: Metrics.marginHorizontal + 40 + 16,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 8,
    columnGap: 8,
  },

  inputContainer: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal / 2,
    paddingVertical: 8,
    borderTopWidth: 0.6,
    borderColor: colors.border + '33',
    backgroundColor: colors.white
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
