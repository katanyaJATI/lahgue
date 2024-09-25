import { PostType } from "@/services/post";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomUsername(): string {
  const names = [
    'john_d',
    'jane_s',
    'michael_j',
    'emily_d',
    'william_b',
    'olivia_w',
    'james_t',
    'isabella_a',
    'benjamin_m',
    'sophia_t',
  ];
  return names[getRandomInt(0, names.length - 1)];
}

function getRandomName(): string {
  const names = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Davis',
    'William Brown',
    'Olivia Wilson',
    'James Taylor',
    'Isabella Anderson',
    'Benjamin Martinez',
    'Sophia Thompson',
  ];
  return names[getRandomInt(0, names.length - 1)];
}

function getRandomImageUrl(): string {
  return `https://picsum.photos/id/${getRandomInt(1, 200)}/900/1200`;
}

function getRandomAvatarUrl(): string {
  return `https://picsum.photos/id/${getRandomInt(1, 200)}/300/300`;
}

function getRandomCaption(postNumber: number): string {
  return `This is a caption for post ${postNumber}. `.repeat(4);
}

function getRandomVote(): 'upvote' | 'downvote' | undefined {
  const options = [undefined, 'upvote', 'downvote'] as const;
  return options[getRandomInt(0, 2)];
}

function generateRandomPost(postNumber: number) {
  const post: PostType = {
    caption: getRandomCaption(postNumber),
    image: getRandomImageUrl(),
    author: {
      name: getRandomName(),
      avatar: getRandomAvatarUrl(),
      username: getRandomUsername(),
    },
    vote: getRandomVote(),
    upvoteCount: getRandomInt(50, 400),
    commentCount: getRandomInt(10, 100),
  };

  return post;
}

export function generateRandomPosts(postCount: number) {
  const posts = [];
  for (let i = 1; i <= postCount; i++) {
    posts.push(generateRandomPost(i));
  }
  return posts;
}
