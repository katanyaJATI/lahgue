import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { CardPost, CardPostReel, VStack } from '@/components';
import colors from '@/styles/colors';
import { useState } from 'react';
import { generateRandomPosts } from '@/utils/posts';
import { PostType } from '@/services/post';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [data, setData] = useState<PostType[]>(generateRandomPosts(10));
  const [loadMore, setLoadMore] = useState(false);

  // Simulate API call for loading more random data
  function loadMoreData(): Promise<PostType[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const moreData = generateRandomPosts(10); // Always generate 10 new posts
        resolve(moreData);
      }, 1000); // 1 second delay to simulate API response time
    });
  }

  function onLoadMore() {
    setLoadMore(true);
    loadMoreData().then((newData) => {
      let _data = data;
      _data = [..._data, ...newData];
      setData(_data);
      setLoadMore(false);
    });
  }

  const { bottom } = useSafeAreaInsets();

  const isReelMode = false;
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.content}
        data={data}
        renderItem={({ item }) => {
          const Component = isReelMode ? CardPostReel : CardPost;
          return (
            <Component
              author={item.author}
              caption={item.caption}
              image={item.image}
              vote={item.vote}
              upvoteCount={item.upvoteCount}
              commentCount={item.commentCount}
            />
          );
        }}
        keyExtractor={(_, index) => 'item-' + index}
        pagingEnabled={isReelMode}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() =>
          !isReelMode ? <View style={styles.separator} /> : null
        }
        onEndReached={onLoadMore}
        ListFooterComponent={
          loadMore ? (
            <VStack align="center" mt={12} mb={bottom || 12}>
              <ActivityIndicator />
            </VStack>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  separator: {
    height: 4,
    backgroundColor: colors.fill_1,
  },
});
