import { IconButton, Input } from "@material-tailwind/react";
import TaskItem from "../../components/bhp/TaskItem";
import { IoIosAdd } from "react-icons/io";
import { addTaskMutation } from "../../api/task";
import { useState } from "react";

const TasksPage = () => {
  const [task, setTask] = useState({title: ""});
  // const [is]
  const addTask = addTaskMutation();

  const handleSubmit = async () => {
    const respose = await addTask.mutateAsync(task);
    console.log(respose)
  }
  const handleChange = (e) => {
    setTask({title: e.target.value});
  }
  return (
    <div>
      <div className="flex gap-2">
        <Input label="add task" onChange={handleChange}/>
        <IconButton size="md" placeholder="hii" onClick={handleSubmit}>
          <IoIosAdd className="text-white" fontSize="2rem" />
        </IconButton>
      </div>
      <div className="task-items-pending my-[2rem]">
        <h1 className="font-bold">Pending</h1>
        <div>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
      <div className="task-items-done my-[2rem]">
        <h1 className="font-bold">Done</h1>
        <div>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
