import { Button, ButtonGroup } from "@material-tailwind/react";
const CustomCounter: React.FC<{value: number, setValue:Function}> = ({value, setValue}) => {
//   const [value, setValue] = useState<number>(0);

  const decrement = () => {
    setValue((prevValue: number | any)  => prevValue - 1);
  };

  const increment = () => {
    setValue((prevValue: number | any) => prevValue + 1);
  };

  return (
      <div className="flex flex-row h-10 w-[8rem] mx-[1rem] rounded-lg relative bg-transparent mt-1">
        <ButtonGroup size="sm" placeholder="hii" color="black">
            <Button variant="text" placeholder="hii" onClick={decrement}>-</Button>
            <p className="w-full min-w-[3rem] bg-blue-gray-50 text-center leading-10 outline-none border-none">{value}</p>
            <Button variant="text" placeholder="hii" onClick={increment}>+</Button>
        </ButtonGroup>
      </div>
  );
};

export default CustomCounter;
