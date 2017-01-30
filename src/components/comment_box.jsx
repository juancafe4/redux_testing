import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class CommentBox extends React.Component {
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
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' })
  }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit.bind(this)} className="comment-box">
        <textarea 
          value= { this.state.comment }
          onChange={ this.onHandleChange.bind(this)}
        />
        <button action="submit" >Submit comment</button>
      </form>
    );
  }
}


export default connect(null, actions)(CommentBox);
