import React, { memo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { HStack, Text, VStack } from '@/components';
import styles from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ICComment, ICDownvote, ICShare, ICUpvote } from '@/assets/icons';
import colors from '@/styles/colors';

type ActionsButtonProps = {
  vote?: 'upvote' | 'downvote';
  upvoteCount: number;
  commentCount: number;
  onCommentPress: () => void;
  onSharePress: () => void;
};
const ActionsButton = ({
  vote: _vote,
  upvoteCount,
  commentCount,
  onCommentPress,
  onSharePress,
}: ActionsButtonProps) => {
  const { bottom } = useSafeAreaInsets();
  const [vote, setVote] = useState<'upvote' | 'downvote' | undefined>(_vote);

  return (
    <HStack spacing={12} align="center" style={styles.actionWrapper}>
      <HStack flex spacing={12}>
        <HStack spacing={0}>
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
              ml={4}
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
        </HStack>
        <Item
          icon={<ICComment />}
          count={commentCount}
          onPress={onCommentPress}
        />
      </HStack>
      <Item
        icon={<ICShare style={{ transform: [{ scaleX: -1 }] }} />}
        onPress={onSharePress}
      />
    </HStack>
  );
};

type ItemProps = {
  icon: React.ReactNode;
  count?: number;
  onPress?: () => void;
};
const Item = ({ icon, count, onPress }: ItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnAction, styles.btnActionSingle]}
      onPress={onPress}
    >
      {icon}
      {count && (
        <Text weight="medium" type="caption" ml={4}>
          {count}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(ActionsButton);
