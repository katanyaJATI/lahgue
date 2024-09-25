export type PostType = {
  caption: string
  image: string
  author: {
    name: string
    avatar: string
    username: string
  };
  vote: undefined | 'upvote' | 'downvote';
  upvoteCount: number;
  commentCount: number;
};
