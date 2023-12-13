import { LIKE_POST } from './actions';

const initialState = {
  likedPosts: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_POST:
      const postId = action.payload;
      if (state.likedPosts.includes(postId)) {
        return {
          ...state,
          likedPosts: state.likedPosts.filter((id) => id !== postId),
        };
      } else {
        return {
          ...state,
          likedPosts: [...state.likedPosts, postId],
        };
      }
    default:
      return state;
  }
};

export default likeReducer;