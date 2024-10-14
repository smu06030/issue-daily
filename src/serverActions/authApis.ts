'use server';

import { createClient } from '@/utils/supabase/server';

export const signInWithGoogle = async () => {
  const serverClient = createClient();

  const { data, error } = await serverClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.origin + '/auth/callback'
    }
  });

  return { data };
};
