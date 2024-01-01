import { TodoItemsContext } from "@/context/todo-items";
import { useContext } from "react";

export default function TodoView() {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      {
        todoItems.map((item, id) => (
          <div className="row mb-3" key={id}>
            <div className="col-6">{item.note}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-2 text-end">
              <button 
                type="button" 
                onClick={() => deleteItem(item.note)} 
                className="btn btn-danger btn-sm"
                >Delete
              </button>
            </div>
          </div>
        ))
      }
    </>
  );
};
