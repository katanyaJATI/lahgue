import React, { memo } from 'react';
import { View } from 'react-native';
import { Tag, Text, UserInfo, VStack } from '@/components';
import styles from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Author } from './CardPost';

type PostInfoProps = {
  author: Author;
  caption: string;
};
const PostInfo = ({ author, caption }: PostInfoProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <>
      <VStack
        spacing={12}
        style={[styles.postInfo, styles.shadow, { bottom: bottom || 24 }]}
      >
        <UserInfo avatar={author.avatar} name={author.name} />
        <Text type="caption" color="white">
          {caption}
        </Text>

        <View style={styles.tags}>
          <Tag
            type="monetize"
            label="Sawer"
            onPress={() => console.log('pressed Sawer')}
          />
          <Tag
            label="meme-dark-sejarah"
            onPress={() => console.log('pressed meme-dark-sejarah')}
          />
          <Tag label="anime" onPress={() => console.log('pressed anime')} />
          <Tag label="game" onPress={() => console.log('pressed game')} />
          <Tag
            label="original"
            onPress={() => console.log('pressed original')}
          />
        </View>
      </VStack>
    </>
  );
};

export default memo(PostInfo);
