import { FlatList, StyleSheet, View } from 'react-native';

import { Text } from '../../components';
import CardPost from '@/components/CardPost';

const DATA = [
  {
    caption:
      'This is a caption for post 1. This is a caption for post 1. This is a caption for post 1. This is a caption for post 1. ',
    image: 'https://picsum.photos/id/32/900/1600',
    author: {
      name: 'John Doe',
      avatar: 'https://picsum.photos/id/181/300/300',
      username: 'john_d',
    },
    vote: undefined,
    upvoteCount: 312,
    commentCount: 59,
  },
  {
    caption:
      'This is a caption for post 2. This is a caption for post 2. This is a caption for post 2. This is a caption for post 2. ',
    image: 'https://picsum.photos/id/58/900/1600',
    author: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/id/122/300/300',
      username: 'jane_s',
    },
    vote: 'downvote' as const,
    upvoteCount: 327,
    commentCount: 32,
  },
  {
    caption:
      'This is a caption for post 3. This is a caption for post 3. This is a caption for post 3. This is a caption for post 3. ',
    image: 'https://picsum.photos/id/39/900/1600',
    author: {
      name: 'Michael Johnson',
      avatar: 'https://picsum.photos/id/119/300/300',
      username: 'michael_j',
    },
    vote: undefined,
    upvoteCount: 314,
    commentCount: 57,
  },
  {
    caption:
      'This is a caption for post 4. This is a caption for post 4. This is a caption for post 4. This is a caption for post 4. ',
    image: 'https://picsum.photos/id/13/900/1600',
    author: {
      name: 'Emily Davis',
      avatar: 'https://picsum.photos/id/109/300/300',
      username: 'emily_d',
    },
    vote: 'upvote' as const,
    upvoteCount: 386,
    commentCount: 99,
  },
  {
    caption:
      'This is a caption for post 5. This is a caption for post 5. This is a caption for post 5. This is a caption for post 5. ',
    image: 'https://picsum.photos/id/82/900/1600',
    author: {
      name: 'William Brown',
      avatar: 'https://picsum.photos/id/117/300/300',
      username: 'william_b',
    },
    vote: undefined,
    upvoteCount: 166,
    commentCount: 83,
  },
  {
    caption:
      'This is a caption for post 6. This is a caption for post 6. This is a caption for post 6. This is a caption for post 6. ',
    image: 'https://picsum.photos/id/59/900/1600',
    author: {
      name: 'Olivia Wilson',
      avatar: 'https://picsum.photos/id/173/300/300',
      username: 'olivia_w',
    },
    vote: 'upvote' as const,
    upvoteCount: 16,
    commentCount: 36,
  },
  {
    caption:
      'This is a caption for post 7. This is a caption for post 7. This is a caption for post 7. This is a caption for post 7. ',
    image: 'https://picsum.photos/id/42/900/1600',
    author: {
      name: 'James Taylor',
      avatar: 'https://picsum.photos/id/186/300/300',
      username: 'james_t',
    },
    vote: undefined,
    upvoteCount: 189,
    commentCount: 85,
  },
  {
    caption:
      'This is a caption for post 8. This is a caption for post 8. This is a caption for post 8. This is a caption for post 8. ',
    image: 'https://picsum.photos/id/96/900/1600',
    author: {
      name: 'Isabella Anderson',
      avatar: 'https://picsum.photos/id/103/300/300',
      username: 'isabella_a',
    },
    vote: 'upvote' as const,
    upvoteCount: 325,
    commentCount: 99,
  },
  {
    caption:
      'This is a caption for post 9. This is a caption for post 9. This is a caption for post 9. This is a caption for post 9. ',
    image: 'https://picsum.photos/id/25/900/1600',
    author: {
      name: 'Benjamin Martinez',
      avatar: 'https://picsum.photos/id/113/300/300',
      username: 'benjamin_m',
    },
    vote: 'downvote' as const,
    upvoteCount: 61,
    commentCount: 20,
  },
  {
    caption:
      'This is a caption for post 10. This is a caption for post 10. This is a caption for post 10. This is a caption for post 10. ',
    image: 'https://picsum.photos/id/54/900/1600',
    author: {
      name: 'Sophia Thompson',
      avatar: 'https://picsum.photos/id/123/300/300',
      username: 'sophia_t',
    },
    vote: 'downvote' as const,
    upvoteCount: 201,
    commentCount: 80,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.content}
        data={DATA}
        renderItem={({ item }) => (
          <CardPost
            author={item.author}
            caption={item.caption}
            image={item.image}
            vote={item.vote}
            upvoteCount={item.upvoteCount}
            commentCount={item.commentCount}
          />
        )}
        keyExtractor={(_, index) => 'item-' + index}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});
