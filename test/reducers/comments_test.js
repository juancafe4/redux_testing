import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import commmentReducer from '../../src/reducers/comments';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    const state = commmentReducer(undefined, {});
    expect(state).to.eql([]);
  });

  it('SAVE_COMMENT', () => {
    const state = commmentReducer([], {type: SAVE_COMMENT, payload: 'new comment'});
    expect(state).to.eql(['new comment']);
  });
});