import { getParent, Instance, types } from 'mobx-state-tree';
import TodoModel from './TodoModel';

const CommentModel = types.model({
    comment: types.string,
}).views((self) => ({
    // remove these lines to make it work
    get todo(): Instance<typeof TodoModel> {
        return getParent<typeof TodoModel>(self, 2);
    },
    // ---
}));

export default CommentModel;
