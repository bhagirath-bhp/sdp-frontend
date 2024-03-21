// import {
//   Legend,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
import { useRecoilValue } from "recoil";
import "./single.scss";
import { userState } from "../state/recoilState";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  const user = useRecoilValue(userState);
  console.log(user)
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="cover-container">
            <img src={user.profileURL}/>
          </div>
          <div className="details">
              <div className="profile-image-container"style={{backgroundImage: `url(${user.profileURL})`}}>
                {/* <img src={user.profileURL} /> */}
              </div>
              <div className="item">
                <span className="itemTitle">Name: </span>
                <span className="itemValue"> {user.name}</span>
              </div>
              <div className="item">
                <span className="itemTitle">Email: </span>
                <span className="itemValue"> {user.email}</span>
              </div>
              <div className="item">
                <span className="itemTitle">Status: </span>
                <span className="itemValue"> {user.status || "Not verified"}</span>
              </div>
          </div>
        </div>
        {/* <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div> */}
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default Single;
