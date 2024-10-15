import browserClient from '@/utils/supabase/client';

export const fetchUsers = async () => {
  const { data } = await browserClient.auth.getUser();
  const userId = data.user?.id ?? null;
  return userId;
};
export const getProfileByUserId = async (userId: string | null) => {
  if (!userId) return null;
  const { data, error } = await browserClient.from('profiles').select('*').eq('id', userId);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getLikesByUserId = async (userId: string | null) => {
  if (!userId) return null;
  const { data, error } = await browserClient.from('likes').select('*').eq('user_id', userId);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getCommentsByUserId = async (userId: string | null) => {
  if (!userId) return null;
  const { data, error } = await browserClient.from('comments').select('*').eq('user_id', userId);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
