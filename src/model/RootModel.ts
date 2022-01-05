import { types } from 'mobx-state-tree';
import TodoModel from './TodoModel';

const RootModel = types.model({
    todos: types.array(TodoModel),
});

export default RootModel;
