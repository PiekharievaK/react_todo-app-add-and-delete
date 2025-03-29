import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import { ERROR } from '../../types/enums';

type Props = {
  todos: Todo[];
  setTodosLoading: (id: number | null) => void;
  setErrorMessage: (value: ERROR) => void;
  setTodos: (callback: (prev: Todo[]) => Todo[]) => void;
  todosLoading: number | null;
};

export const TodoList: React.FC<Props> = ({
  todos,
  setTodosLoading,
  setErrorMessage,
  setTodos,
  todosLoading,
}) => {
  // console.log('render list');

  const onError = (message) => {
    setErrorMessage(message);
    setTodosLoading(null);
    throw new Error(message);
  };

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          setTodosLoading={setTodosLoading}
          onError={onError}
          setTodos={setTodos}
          isLoading={todosLoading}
        />
      ))}
    </section>
  );
};
