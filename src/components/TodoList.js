import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  console.log(filters);
  console.log(todos);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          switch (filters.status) {
            case "Complete":
              return todo.completed;
            case "Incomplete":
              return !todo.completed;
            default:
              return true;
          }
        })
        .filter((todo) => {
          if (filters.colors.length > 0) {
            return filters.colors.includes(todo?.color);
          }
          return true;
        })
        .map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      <Todo />
    </div>
  );
}
