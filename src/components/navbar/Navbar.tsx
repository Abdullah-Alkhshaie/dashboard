import "./navbar.scss";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import app from "../../images/app.svg";
import expand from "../../images/expand.svg";
import settings from "../../images/settings.svg";
import notification from "../../images/notifications.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <>abdullahadmin</>
      </div>
      <div className="icons">
        <img src={search} alt="" className="icon" />
        <img src={app} alt="" className="icon" />
        <img src={expand} alt="" className="icon" />
        <div className="notification">
          <img src={notification} alt="" />
          <span>1 </span>
        </div>
        <div className="user">
          <img
            src="https://lh3.googleusercontent.com/ogw/ANLem4bFXSF_ZRR3EGVWQd5SjijWuRc2emgmS8OvzULplg=s32-c-mo"
            alt=""
          />
          <span>Abdullah</span>
        </div>
        <img src={settings} alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
