import React, { forwardRef, memo, useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import styles from './style';
import Metrics from '@/utils/metrics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import PostInfo from './PostInfo';
import ActionsButton from './ActionsButton';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Text } from '@/components';

export type Author = {
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
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { top, bottom } = useSafeAreaInsets();
  const height = Metrics.screenHeight - 48 - top;

  return (
    <>
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
          onCommentPress={() => bottomSheetModalRef.current?.present()}
        />

        <PostInfo author={author} caption={caption} />
      </View>

      <CommentsSheet ref={bottomSheetModalRef} />
    </>
  );
}

type CommentsSheetProps = {
  onDismiss?: () => void;
};
const CommentsSheet = forwardRef<BottomSheetModal, CommentsSheetProps>(
  ({}, ref) => {
    const snapPoints = useMemo(() => ['50%', '80%'], []);

    const handleSheetChanges = useCallback((index: number) => {
      if (index === 0) {
        // @ts-ignore
        ref?.current?.dismiss();
      }
    }, []);

    // renders
    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={BottomSheetBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default memo(CardPost);
