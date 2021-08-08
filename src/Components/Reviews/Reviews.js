import React from 'react';
import s from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>Нет обзоров</p>;
  }
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <>
            <h4>{review.author}</h4>
            <p className={s.text}>{review.content}</p>
          </>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
