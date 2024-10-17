import { GetMyComments, ParamProps } from '@/types/comment';
import browserClient from '@/utils/supabase/client';

export const countComment = async ({ params }: ParamProps) => {
  const { count, error } = await browserClient
    .from('comments')
    .select('*', { count: 'exact', head: true })
    .eq('article_id', params.id);
  if (error) {
    console.error('Error:', error);
  } else {
    return count;
  }
};

export const getMyComments = async ({ params, userId, ascending }: GetMyComments) => {
  const { data, error } = await browserClient
    .from('comments')
    .select('*')
    .eq('article_id', params.id)
    .eq('user_id', userId)
    .order('created_at', { ascending: ascending })
    .range(0, 7);

  if (error) {
    console.error(error);
    return [];
  }
  return data || [];
};

export const getAllComments = async ({ params, userId, ascending }: GetMyComments) => {
  let query = browserClient
    .from('comments')
    .select('*')
    .eq('article_id', params.id)
    .order('created_at', { ascending: ascending });

  if (userId) {
    query = query.neq('user_id', userId);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
};
