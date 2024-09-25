import React, { memo } from 'react';
import { Text, UserInfo, VStack } from '@/components';
import styles from './style';
import { Author } from './CardPost';

type PostInfoProps = {
  author: Author;
  caption: string;
};
const PostInfo = ({ author, caption }: PostInfoProps) => {
  return (
    <>
      <VStack spacing={12} style={[styles.postInfo]}>
        <UserInfo avatar={author.avatar} name={author.name} variant="dark" />
        <Text type="body2" weight="bold">
          {caption}
        </Text>
      </VStack>
    </>
  );
};

export default memo(PostInfo);
