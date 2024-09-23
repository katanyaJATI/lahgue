import React from 'react';
import { Image } from 'expo-image';
import styles from './style';

import { HStack, Text, VStack } from '@/components';
import { Author } from '@/components/CardPost';

type UserInfoProps = {
  avatar: Author['avatar'];
  name: Author['name'];
};

function UserInfo({ avatar, name }: UserInfoProps) {
  return (
    <HStack spacing={8}>
      <Image
        source={{ uri: avatar }}
        style={styles.imgAvatar}
        contentFit="cover"
      />
      <VStack spacing={2}>
        <Text type="caption" weight="bold" color="white">
          {name}
        </Text>
        <Text type="smCaption" color="white">
          {new Date().toDateString()}
        </Text>
      </VStack>
    </HStack>
  );
}
export default UserInfo;
