import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Comment from './Comment';
import browserClient from '@/utils/supabase/client';
import { CommentData, ParamProps } from '@/types/comment';
import { getMyComments } from '@/serverActions/commentsActions';

type MyCommentsProps = ParamProps & {
  ascending: boolean;
  countMyComments: number | null | undefined;
  userId: string | null | undefined;
};

const MyComments = ({ params, ascending, countMyComments, userId }: MyCommentsProps) => {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<number>();
  const [editingMessage, setEditingMessage] = useState<string>();

  const updateComments = async (id: number) => {
    await browserClient
      .from('comments')
      .update({
        message: editingMessage
      })
      .eq('id', id);
  };

  const deleteComments = async (id: number) => {
    await browserClient.from('comments').delete().eq('id', id);
  };

  const {
    data: myComments,
    isLoading,
    refetch
  } = useQuery<CommentData[]>({
    queryKey: ['myComments', params.id, ascending, countMyComments],
    queryFn: () => getMyComments({ params, userId, ascending }),
    enabled: !!userId
  });

  useEffect(() => {
    refetch();
  }, [countMyComments]);

  const updateMutation = useMutation({
    mutationFn: updateComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myComments', params.id, ascending, countMyComments] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myComments', params.id, ascending, countMyComments] });
      queryClient.invalidateQueries({ queryKey: ['countComments'] });
    }
  });

  if (isLoading && !!userId) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {myComments?.map((comment: CommentData) => (
        <article key={comment.id} className="mb-10 flex justify-between">
          <Comment comment={comment} ifEditing={editingId === comment.id} setEditingMessage={setEditingMessage} />
          <div className="flex items-center gap-2 text-[0.875rem]">
            {editingId === comment.id ? (
              <>
                <button onClick={() => setEditingId(undefined)} className="p-1">
                  취소
                </button>
                <button
                  onClick={() => {
                    updateMutation.mutate(comment.id);
                    setEditingId(undefined);
                  }}
                >
                  완료
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setEditingId(comment.id)} className="p-1">
                  수정
                </button>
                <button onClick={() => deleteMutation.mutate(comment.id)}>삭제</button>
              </>
            )}
          </div>
        </article>
      ))}
    </>
  );
};

export default MyComments;
