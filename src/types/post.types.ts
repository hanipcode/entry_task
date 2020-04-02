export interface IPost {
  avatar: string;
  username: string;
  post_title: string;
  channel_name: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  description: string;
  id: number;
  participants: Array<{
    username: string;
    avatar: string;
  }>;
  likes: Array<{
    username: string;
    avatar: string;
  }>;
  location: string;
  address: string;
}
