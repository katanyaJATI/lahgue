import colors, { ColorKey } from '@/styles/colors';
import Metrics from '@/utils/metrics';
import * as React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

export const PRIMARY_FONT_REGULAR = 'PoppinsRegular';
export const PRIMARY_FONT_MEDIUM = 'PoppinsMedium';
export const PRIMARY_FONT_BOLD = 'PoppinsBold';
export const PRIMARY_FONT_ITALIC = 'PoppinsItalic';

export type TextProps = RNTextProps & {
  testID?: string;
  type?:
    | 'title1'
    | 'title2'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'smCaption'
  align?: 'center' | 'left' | 'right' | 'auto' | 'justify';
  children: React.ReactNode;
  flex?: boolean;
  color?: ColorKey;
  weight?: 'regular' | 'medium' | 'bold' | 'italic';
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  strikethrough?: boolean;
  underline?: boolean;
};
export const RESPONSIVE = Metrics.isIphoneX ? 0 : -1;

function Text({
  testID,
  style,
  type = 'body1',
  align,
  flex,
  color = 'plain',
  weight = 'regular',
  mt,
  mb,
  ml,
  mr,
  strikethrough = false,
  underline = false,
  ...props
}: TextProps) {
  const margin = {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
  };
  const fontFamily = React.useMemo(() => {
    let _fontFamily = PRIMARY_FONT_REGULAR;
    switch (weight) {
      case 'regular':
        _fontFamily = PRIMARY_FONT_REGULAR;
        break;
      case 'medium':
        _fontFamily = PRIMARY_FONT_MEDIUM;
        break;
      case 'bold':
        _fontFamily = PRIMARY_FONT_BOLD;
        break;
      case 'italic':
        _fontFamily = PRIMARY_FONT_ITALIC;
        break;
      default:
        break;
    }

    return _fontFamily;
  }, [weight]);
  return (
    <RNText
      allowFontScaling={false}
      {...props}
      style={[
        styles[type],
        { textAlign: align, color: colors[color] },
        flex && styles.flex,
        margin,
        weight && { fontFamily },
        strikethrough && styles.strikethrough,
        underline && styles.underline,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  title1: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 36 + RESPONSIVE,
    lineHeight: 44,
  },
  title2: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 32 + RESPONSIVE,
    lineHeight: 40,
  },
  subtitle1: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 20 + RESPONSIVE,
    lineHeight: 28,
  },
  subtitle2: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 16 + RESPONSIVE,
    lineHeight: 24,
  },
  subtitle3: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 18 + RESPONSIVE,
    lineHeight: 26,
  },
  body1: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 16 + RESPONSIVE,
    lineHeight: 24,
  },
  body2: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 14 + RESPONSIVE,
    lineHeight: 20,
  },
  body3: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 12 + RESPONSIVE,
    lineHeight: 16,
  },
  caption: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 12 + RESPONSIVE,
    lineHeight: 16,
  },
  smCaption: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 10 + RESPONSIVE,
    lineHeight: 16,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export default Text;
