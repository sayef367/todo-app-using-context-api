import { TodoItemsContext } from "@/context/todo-items";
import { useContext, useState } from "react";

export default function TodoAdd() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');

  const handelClick = () => {
    addNewItem(note, date);
    setNote('');
    setDate('');
  };

  return (
    <>
      <div className="input-group mt-5">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter Todo" 
          value={note}
          onChange={(e) => setNote( e.target.value )}
        />
        <input 
          type="date" 
          className="form-control" 
          value={date}
          onChange={(e) => setDate( e.target.value )}
        />
        <button 
          type="button" 
          onClick={handelClick} 
          className="btn btn-primary"
          >Add Todo
        </button>
      </div>
    </>
  );
};
