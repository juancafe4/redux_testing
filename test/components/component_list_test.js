import { renderComponent, expect }  from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList Component', () => {
  let component = null;
  let props = null;
  beforeEach(() => {
    props =  { comments: ["New comment", "Aloha", "Hello"] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).equal(3);
  });

  it('shows each comment that is provided', () => {
    props.comments.map((val, index) => {
      expect(component).to.contain(val)
    });
  });
});