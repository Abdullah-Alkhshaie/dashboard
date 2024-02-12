import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div key={item.id} className="item">
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} to="/" className="listItem">
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
