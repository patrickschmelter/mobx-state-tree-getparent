import { getParent } from 'mobx-state-tree';
import RootModel from './model/RootModel';
import TodoModel from './model/TodoModel';

const rootStore = RootModel.create({
    todos: [{
        title: 'test',
        comments: [{
            comment: 'test',
        }]
    }]
});

// remove lines CommentModel:8-10 to make it work
const comment = rootStore.todos[0].comments[0];
const todo = getParent<typeof TodoModel>(comment, 2);
