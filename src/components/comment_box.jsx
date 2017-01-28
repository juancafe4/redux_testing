import React from 'react';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comment: ''};
  }
  onHandleChange(e) {
    const comment = e.target.value;
    this.setState({ comment })
  }
  render() {
    return (
      <div className="comment-box">
        <textarea 
          value= { this.state.comment }
          onChange={ this.onHandleChange.bind(this)}
        />
        <button>Submit comment</button>
      </div>
    );
  }
}
