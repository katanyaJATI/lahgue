import React, { memo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, VStack } from '@/components';
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

      <Item
        icon={<ICComment />}
        count={commentCount}
        onPress={onCommentPress}
      />
      <Item
        icon={<ICShare style={{ transform: [{ scaleX: -1 }] }} />}
        onPress={onSharePress}
      />
    </VStack>
  );
};

type ItemProps = {
  icon: React.ReactNode;
  count?: number;
  onPress?: () => void;
};
const Item = ({ icon, count, onPress }: ItemProps) => {
  return (
    <TouchableOpacity disabled={!onPress} activeOpacity={0.8} onPress={onPress}>
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

export default memo(ActionsButton);
