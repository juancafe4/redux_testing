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
  onHandleSubmit(e) {
    e.preventDefault();
    
    this.setState({ comment: '' })
  }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit.bind(this)} className="comment-box">
        <textarea 
          value= { this.state.comment }
          onChange={ this.onHandleChange.bind(this)}
        />
        <button>Submit comment</button>
      </form>
    );
  }
}
