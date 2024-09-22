import React, { useMemo } from 'react';
import {
  StyleProp,
  Touchable,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { HStack, Text } from '..';

import styles from './style';
import colors, { ColorKey } from '@/styles/colors';

type TagType = 'default' | 'monetize';

type TagProps = {
  type?: TagType;
  label: string;
  onPress?: () => void;
};

function Tag({ type = 'default', label, onPress }: TagProps) {
  const color = useMemo(() => {
    let icon = '';
    let backgroundColor: ColorKey = 'white';
    let textColor: ColorKey = 'plain';
    switch (type) {
      case 'default':
        icon = '#';
        backgroundColor = 'white';
        textColor = 'plain';
        break;
      case 'monetize':
        icon = '$';
        backgroundColor = 'orange';
        textColor = 'white';
        break;

      default:
        break;
    }
    return {
      backgroundColor,
      textColor,
      icon,
    };
  }, [type]);
  return (
    <TouchableOpacity disabled={!onPress} activeOpacity={0.8} onPress={onPress}>
      <HStack
        spacing={4}
        style={[
          styles.label,
          {
            backgroundColor: colors[color.backgroundColor],
          },
        ]}
      >
        <Text
          type="caption"
          weight="bold"
          style={{ color: colors[color.textColor] }}
        >
          {color.icon}
        </Text>
        <Text type="caption" style={{ color: colors[color.textColor] }}>
          {label}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
}
export default Tag;
