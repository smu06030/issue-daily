export type CommentData = {
  id: number;
  created_at: string;
  article_id: string;
  user_id: string;
  message: string;
  nextPage: number | undefined;
  count: number;
};
