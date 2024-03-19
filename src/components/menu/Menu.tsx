import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";
import Cookies from "js-cookie";

const Menu = () => {

  const menuItemComponentSet = menu.map((item) => {
    return (
      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {(item.title === "User" && Cookies.get("user"))
          ? item.listItems.map((listItem) => {
              if (listItem.id > 2) {
                return (
                  <Link
                    to={listItem.url}
                    className="listItem"
                    key={listItem.id}
                    onClick={()=>{
                      console.log("first");
                      (listItem.onClickFn)?listItem.onClickFn():null;
                    }}
                  >
                    <img src={listItem.icon} alt="" />
                    <span className="listItemTitle">{listItem.title}</span>
                  </Link>
                );
              } else {
                return null;
              }
            })
          : item.listItems.map((listItem) => {
            if (listItem.id < 3) {
              return (
                <Link
                  to={listItem.url}
                  className="listItem"
                  key={listItem.id}
                >
                  <img src={listItem.icon} alt="" />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              );
            } else {
              return null;
            }
            })}
      </div>
    );
  });
  return (
    <div className="menu">
      {/* {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))} */}
      {menuItemComponentSet}
    </div>
  );
};

export default Menu;
