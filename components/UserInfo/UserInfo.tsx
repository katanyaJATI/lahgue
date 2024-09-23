import React from 'react';
import { Image } from 'expo-image';
import styles from './style';

import { HStack, Text } from '@/components';
import { Author } from '@/components/CardPost';

type UserInfoProps = {
  avatar: Author['avatar'];
  name: Author['name'];
  variant?: 'light' | 'dark';
  small?: boolean;
};

function UserInfo({
  avatar,
  name,
  variant = 'light',
  small = false,
}: UserInfoProps) {
  return (
    <HStack spacing={8}>
      <Image
        source={{ uri: avatar }}
        style={!small ? styles.imgAvatar : styles.imgAvatarSmall}
        contentFit="cover"
      />
      <HStack spacing={8}>
        <Text
          type={!small ? 'caption' : 'smCaption'}
          weight="bold"
          color={variant === 'light' ? 'white' : 'plain'}
        >
          {name}
        </Text>

        <Text type="smCaption" color={variant === 'light' ? 'white' : 'fill_3'}>
          {
            new Date(new Date().toDateString()).toLocaleDateString('id-ID', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          }
        </Text>
      </HStack>
    </HStack>
  );
}
export default UserInfo;
