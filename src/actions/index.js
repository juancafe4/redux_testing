import { SAVE_COMMENT } from './types';

export function saveComment() {
  return {
    type: SAVE_COMMENT,
    payload: 'new comment',
  };
}