export const LIKE_POST = 'LIKE_POST';

export const likePost = (postId) => ({
  type: LIKE_POST,
  payload: postId,
});