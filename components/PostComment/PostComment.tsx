import React, { memo, useState } from 'react';
import Image from 'react-native-fast-image'

import styles from './style';
import { HStack, Text, UserInfo, VStack } from '@/components';
import { Author } from '../CardPostReel';
import { TouchableOpacity } from 'react-native';
import { ICThumbUp } from '@/assets/icons';
import colors from '@/styles/colors';

type PostCommentProps = {
  author: Author;
  comment: string;
  img?: string;
  isNested?: boolean;
  comments?: Omit<PostCommentProps, 'comments'>[];
};
function PostComment({
  author,
  comment,
  img,
  isNested = false,
  comments,
}: PostCommentProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <VStack spacing={4} style={[styles.item, isNested && styles.noBorder]} ml={isNested ? 18 : 0}>
      <UserInfo avatar={author.avatar} name={author.name} variant="dark" small={isNested} />
      <VStack spacing={6} ml={44} mb={4}>
        <Text type="caption">{comment}</Text>
        {img && <Image source={{ uri: img }} style={!isNested ? styles.img : styles.imgSmall} />}

        <HStack spacing={12} mt={4}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsLiked(!isLiked)}
          >
            <HStack spacing={4}>
              <ICThumbUp
                width={16}
                height={16}
                stroke={isLiked ? colors.primary_1 : colors.plain}
              />
              <Text type="caption" weight="medium">
                12
              </Text>
            </HStack>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <Text type="caption" weight="medium">
              BALAS
            </Text>
          </TouchableOpacity>
        </HStack>

        {comments && comments?.length > 0 && (
          <VStack spacing={4} mt={4}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsExpanded(!isExpanded)}
              style={styles.btnExpand}
            >
              <Text type="caption" weight="medium" color="primary_1">
                {isExpanded ? 'Tutup Balasan' : 'Buka Balasan'}
              </Text>
            </TouchableOpacity>
          </VStack>
        )}
      </VStack>

      {isExpanded && comments && comments?.length > 0 && (
        <VStack spacing={8} mt={8}>
          {comments?.map((comment) => (
            <PostComment
              key={comment.comment}
              author={comment.author}
              comment={comment.comment}
              img={comment.img}
              isNested
            />
          ))}
        </VStack>
      )}
    </VStack>
  );
}

export default memo(PostComment);
