import { TodoItemsContext } from "@/context/todo-items";
import { useContext } from "react";

export default function Message() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <h3 className="text-center mt-5">
      {todoItems.length === 0 ? 'Empty Todos' : ''}
    </h3>
  );
};
