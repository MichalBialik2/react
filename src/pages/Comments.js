import React, { useState } from 'react';

const Comments = ({ addComment, comments }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ name, comment });
    setName('');
    setComment('');
  };

  return (
    <div>
      <h1>Komentarze</h1>
      <form onSubmit={handleSubmit}>
        <label>Nazwa:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Komentarz:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        <button type="submit">Dodaj Komentarz</button>
      </form>
      <div className="comments-list">
        <h2>Dodane Komentarze:</h2>
        {comments.map((comment, idx) => (
          <div key={idx} className="comment-item">
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
