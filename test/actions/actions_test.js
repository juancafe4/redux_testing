import { expect } from '../test_helper'

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions/index';

describe('actions', () => {
  describe('saveComment', () => {
    let action = null;
    beforeEach(() => {
      action = saveComment();
    })
    it('has the correct tyoe', () => {
      expect(action.type).to.equal(SAVE_COMMENT)
    });

    it('has the correct payload', () => {
      expect(action.payload).to.equal('new comment')
    });
  });
});