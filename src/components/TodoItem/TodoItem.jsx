import "./TodoItem.css";

function TodoItem({ todo, onChange, onDelete }) {
   return (
      <div className="todoListItem">
         <label className="todoListlabel">
            <input
               type="checkbox"
               checked={todo.isCompleted}
               onChange={(e) => {
                  onChange({
                     ...todo,
                     isCompleted: e.target.checked
                  });
               }}
            />
            <span
               className={ todo.isCompleted ? "text-dec" : ""}
            >{todo.text}</span>
         </label>
         <button
            className="todoListItemDelete"
            onClick={() => {
               onDelete(todo);
            }}>X
         </button>
      </div>
   )
}

export { TodoItem };
