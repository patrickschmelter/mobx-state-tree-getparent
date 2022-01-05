import { types } from 'mobx-state-tree';
import CommentModel from './CommentModel';

const TodoModel = types.model({
    title: types.string,
    comments: types.array(CommentModel),
})
    // remove these lines to make it work
    .actions((self) => ({
        setTitle(title: string): void {
            self.title = title;
        }
    }));
// ---

export default TodoModel;
