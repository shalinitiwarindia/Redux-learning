
store.getState()
// { todos: [ ... ], counter: }

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
    //   todos
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export { TodoList };

