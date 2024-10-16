import { FieldValues } from 'react-hook-form';

export const signUp = async (userInfo: FieldValues) => {
  const res = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  });

  const { message, error } = await res.json();

  return { message, error };
};

export const login = async (userInfo: FieldValues) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  });

  const { user } = await res.json();

  return user;
};
