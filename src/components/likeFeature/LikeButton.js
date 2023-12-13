import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from './actions';
import fillheart from '../assets/fill-heart.svg';
import lineheart from '../assets/line-heart.svg';
import './LikeButton.css';

const LikeButton = ({ postId }) => {
  const dispatch = useDispatch();
  const likedPosts = useSelector((state) => state.likedPosts);

  const handleLike = () => {
    dispatch(likePost(postId));
  };

  const isLiked = likedPosts.includes(postId);

  return (
    <div className='like'>
    <button onClick={handleLike}>
      {isLiked ?  
      (
        <div className='likee'>
        <img src={fillheart} />
        <p>Added to Favourites</p>
        </div>
        
      ) : (
        <div className='likee'>
        <img src={lineheart}/>
        <p>Add to Favourites</p>
        </div>
      )

      } 
    </button>
    
    </div>
  );
};

export default LikeButton;