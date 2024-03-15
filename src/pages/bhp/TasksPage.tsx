import { IconButton, Input } from "@material-tailwind/react";
import TaskItem from "../../components/bhp/TaskItem";
import { IoIosAdd } from "react-icons/io";
import { addTaskMutation, getTaskMutation } from "../../api/task";
import { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const TasksPage = () => {
  const [task, setTask] = useState({ title: "" });
  const [taskset, setTaskset] = useState([]);
  const [taskCompletedset, setTaskCompletedset] = useState<
    (Element | JSX.Element)[]
  >([]);
  const [taskPendingset, setTaskPendingset] = useState<
    (Element | JSX.Element)[]
  >([]);
  const addTask = addTaskMutation();
  const getTask = getTaskMutation();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTask.mutateAsync();
      setTaskset(response);
      console.log(response)
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    setTaskCompletedset(taskset
    .filter((item: { isCompleted: boolean }) => item.isCompleted)
    .map((item: { title: string; isCompleted: boolean, _id: string  }, index) => (
      <TaskItem
        key={index}
        title={item.title}
        isCompleted={item.isCompleted}
        id={item._id}
      />
    )));
  
  setTaskPendingset(taskset
    .filter((item: {isCompleted: boolean}) => !item.isCompleted)
    .map((item: { title: string; isCompleted: boolean, _id: string }, index) => (
      <TaskItem
        key={index}
        title={item.title}
        isCompleted={item.isCompleted}
        id={item._id}
      />
    )));
  
  }, [taskset]);

  const handleSubmit = async () => {
    try {
      const response = await addTask.mutateAsync({ title: task.title });
      if (response.success) {
        toast.success(response.message, {
          position: "top-right",
          autoClose: 1000,
          theme: "light",
        });
      } else {
        toast.error(response.message, {
          position: "top-right",
          autoClose: 1000,
          theme: "light",
        });
      }
      setTask({ title: "" });
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
  };

  const handleChange = (e) => {
    setTask({ title: e.target.value });
  };

  return (
    <div>
      <div className="flex gap-2">
        <Input label="Add task" value={task.title} onChange={handleChange} />
        <IconButton size="md" onClick={handleSubmit}>
          <IoIosAdd className="text-white" fontSize="2rem" />
        </IconButton>
      </div>
      <div className="task-items-pending my-[2rem]">
        <h1 className="font-bold">Pending</h1>
        <Fragment>
          <div>{taskPendingset}</div>
        </Fragment>
      </div>
      <div className="task-items-done my-[2rem]">
        <h1 className="font-bold">Done</h1>
        <div>{taskCompletedset}</div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TasksPage;
