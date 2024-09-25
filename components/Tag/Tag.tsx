import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { HStack, Text } from '@/components';

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
    let borderColor: ColorKey = 'plain';
    switch (type) {
      case 'default':
        icon = '#';
        backgroundColor = 'white';
        textColor = 'plain';
        borderColor = 'fill_1';
        break;
      case 'monetize':
        icon = '$';
        backgroundColor = 'orange';
        textColor = 'white';
        borderColor = 'orange';
        break;

      default:
        break;
    }
    return {
      backgroundColor,
      textColor,
      borderColor,
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
            borderColor: colors[color.borderColor],
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
