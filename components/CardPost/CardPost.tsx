import React, {
  forwardRef,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style';
import Metrics from '@/utils/metrics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import PostInfo from './PostInfo';
import ActionsButton from './ActionsButton';
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal
} from '@gorhom/bottom-sheet';
import { HStack, PostComment, Text } from '@/components';
import { ICClose } from '@/assets/icons';

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

      <CommentsSheet ref={bottomSheetModalRef} caption={caption} />
    </>
  );
}

type CommentsSheetProps = {
  onDismiss?: () => void;
  caption: string;
};
const CommentsSheet = forwardRef<BottomSheetModal, CommentsSheetProps>(
  ({ caption }, ref) => {
    const [comments, setComments] = useState([
      {
        author: {
          name: 'John Doe',
          avatar: 'https://picsum.photos/id/181/300/300',
          username: 'john_d',
        },
        comment:
          'This is a comment for post 1. This is a comment for post 1. This is a comment for post 1. This is a comment for post 1. ',
        img: 'https://picsum.photos/id/32/900/1600',
        comments: [
          {
            author: {
              name: 'Jane Smith',
              avatar: 'https://picsum.photos/id/122/300/300',
              username: 'jane_s',
            },
            comment:
              'This is a comment for post 2. This is a comment for post 2. This is a comment for post 2. This is a comment for post 2. ',
          },
          {
            author: {
              name: 'Michael Johnson',
              avatar: 'https://picsum.photos/id/119/300/300',
              username: 'michael_j',
            },
            comment:
              'This is a comment for post 3. This is a comment for post 3. This is a comment for post 3. This is a comment for post 3. ',
            img: 'https://picsum.photos/id/39/900/1600',
          },
        ],
      },
      {
        author: {
          name: 'Jane Smith',
          avatar: 'https://picsum.photos/id/122/300/300',
          username: 'jane_s',
        },
        comment:
          'This is a comment for post 2. This is a comment for post 2. This is a comment for post 2. This is a comment for post 2. ',
        img: 'https://picsum.photos/id/58/900/1600',
      },
      {
        author: {
          name: 'Michael Johnson',
          avatar: 'https://picsum.photos/id/119/300/300',
          username: 'michael_j',
        },
        comment:
          'This is a comment for post 3. This is a comment for post 3. This is a comment for post 3. This is a comment for post 3. ',
        img: 'https://picsum.photos/id/39/900/1600',
      },
      {
        author: {
          name: 'Emily Davis',
          avatar: 'https://picsum.photos/id/109/300/300',
          username: 'emily_d',
        },
        comment:
          'This is a comment for post 4. This is a comment for post 4. This is a comment for post 4. This is a comment for post 4. ',
        img: 'https://picsum.photos/id/13/900/1600',
      },
      {
        author: {
          name: 'William Brown',
          avatar: 'https://picsum.photos/id/117/300/300',
          username: 'william_b',
        },
        comment:
          'This is a comment for post 5. This is a comment for post 5. This is a comment for post 5. This is a comment for post 5. ',
        img: 'https://picsum.photos/id/82/900/1600',
      },
    ]);

    const handleSheetChanges = useCallback((index: number) => {
      if (index === 0) {
        // @ts-ignore
        ref?.current?.dismiss();
      }
    }, []);
    const snapPoints = useMemo(() => ['100%'], []);

    const { top } = useSafeAreaInsets();

    // renders
    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={BottomSheetBackdrop}
        enableOverDrag={false}
        enableContentPanningGesture={false}
        maxDynamicContentSize={Metrics.screenHeight * 0.7}
      >
        <BottomSheetFlatList
          data={comments}
          keyExtractor={(_, index) => 'item-' + index}
          renderItem={({ item }) => (
            <PostComment
              author={item.author}
              comment={item.comment}
              img={item.img}
              comments={item.comments}
            />
          )}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <>
              <HStack
                spacing={12}
                style={[styles.commentsHeader, { paddingTop: top - 24 }]}
              >
                <Text type="subtitle2" weight="bold" flex numberOfLines={1}>
                  {caption}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnClose}
                  onPress={() =>
                    // @ts-ignore
                    ref?.current?.dismiss()
                  }
                >
                  <ICClose />
                </TouchableOpacity>
              </HStack>

              <View style={styles.totalComments}>
                <Text type="body2" weight='bold' color="plain" mt={0} align='right'>
                  {comments.length} Komentar
                </Text>
              </View>
            </>
          }
        />
      </BottomSheetModal>
    );
  },
);

export default memo(CardPost);
