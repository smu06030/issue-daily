export type CommentData = {
  id: number;
  created_at: string;
  article_id: string;
  user_id: string;
  message: string;
  avatar_url: string;
  user_name: string;
};

export type ParamProps = {
  params: {
    category: string;
    id: string;
  };
};

export type GetMyComments = ParamProps & {
  userId: string | null | undefined;
  ascending: boolean;
};
