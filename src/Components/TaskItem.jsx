import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../features/tasks/taskSlice";
import { useState } from "react";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      dispatch(editTask({ id: task.id, text: newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item" key={task.text}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="item-type"
        />
      ) : (
        <span className="text-data">{task.text}</span>
      )}
      <div className="buttons">
        <button onClick={handleEdit} className="btnn edit-btn">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDelete} className="btnn del-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
