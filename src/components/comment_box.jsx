import React from 'react';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box">
        <textarea />
        <button>Submit comment</button>
      </div>
    );
  }
}
