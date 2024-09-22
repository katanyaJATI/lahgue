import React, { memo, useMemo, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { HStack, Text, VStack } from '@/components';
import styles from './style';
import Metrics from '@/utils/metrics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import {
  IcBars3,
  ICComment,
  ICDownvote,
  ICShare,
  ICUpvote,
} from '@/assets/icons';
import colors from '@/styles/colors';

type Author = {
  name: string;
  avatar: string;
  username: string;
};

type CardPostProps = {
  caption: string;
  image: string;
  author: Author;
  vote: 'upvote' | 'downvote' | undefined;
  upvoteCount: number;
  commentCount: number;
};

function CardPost({
  author,
  caption,
  image,
  vote,
  upvoteCount,
  commentCount,
}: CardPostProps) {
  const { top, bottom } = useSafeAreaInsets();
  const height = Metrics.screenHeight - 48 - top;

  return (
    <View style={[styles.item, { height }]}>
      <Image
        style={styles.content}
        source={image}
        contentFit="cover"
        transition={1000}
      />

      <ActionsButton
        vote={vote}
        upvoteCount={upvoteCount}
        commentCount={commentCount}
      />

      <PostInfo author={author} caption={caption} />
    </View>
  );
}

type PostInfoProps = {
  author: Author;
  caption: string;
};
const PostInfo = ({ author, caption }: PostInfoProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <VStack
      spacing={12}
      style={[styles.postInfo, styles.shadow, { bottom: bottom || 24 }]}
    >
      <UserInfo avatar={author.avatar} name={author.name} />
      <Text type="caption" color="white">
        {caption}
      </Text>
    </VStack>
  );
};

type UserInfoProps = {
  avatar: Author['avatar'];
  name: Author['name'];
};
const UserInfo = ({ avatar, name }: UserInfoProps) => {
  return (
    <HStack spacing={8}>
      <Image source={avatar} style={styles.imgAvatar} contentFit="cover" />
      <VStack spacing={2}>
        <Text type="body2" weight="bold" color="white">
          {name}
        </Text>
        <Text type="smCaption" color="white">
          {new Date().toDateString()}
        </Text>
      </VStack>
    </HStack>
  );
};

type ActionsButtonProps = {
  vote?: 'upvote' | 'downvote';
  upvoteCount: number;
  commentCount: number;
};
const ActionsButton = ({
  vote: _vote,
  upvoteCount,
  commentCount,
}: ActionsButtonProps) => {
  const { bottom } = useSafeAreaInsets();
  const [vote, setVote] = useState<'upvote' | 'downvote' | undefined>(_vote);

  return (
    <VStack
      spacing={12}
      align="center"
      style={[styles.actionsWrapper, { bottom: bottom + 24 }]}
    >
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.btnAction,
            styles.btnUpvote,
            vote === 'upvote' && styles.btnActionActive,
          ]}
          onPress={() => setVote('upvote')}
        >
          <ICUpvote color={vote === 'upvote' ? colors.white : colors.dark} />
          <Text
            weight="medium"
            color={vote === 'upvote' ? 'white' : 'plain'}
            type="caption"
            mt={4}
          >
            {upvoteCount}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.btnAction,
            styles.btnDownvote,
            vote === 'downvote' && styles.btnActionActive,
          ]}
          onPress={() => setVote('downvote')}
        >
          <ICDownvote
            color={vote === 'downvote' ? colors.white : colors.dark}
          />
        </TouchableOpacity>
      </View>

      <Item icon={<ICComment />} count={commentCount} />
      <Item icon={<ICShare style={{ transform: [{ scaleX: -1 }] }} />} />
    </VStack>
  );
};

type ItemProps = {
  icon: React.ReactNode;
  count?: number;
};
const Item = ({ icon, count }: ItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <VStack spacing={2} align="center" style={styles.btnActionSingle}>
        <View style={styles.actionFrame}>{icon}</View>
        {count && (
          <Text weight="medium" color="white" type="caption" mt={4}>
            {count}
          </Text>
        )}
      </VStack>
    </TouchableOpacity>
  );
};

export default memo(CardPost);
