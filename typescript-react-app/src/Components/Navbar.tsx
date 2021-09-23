import { Link,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../Redux/actions"
import { fetchUser,fetchTodo } from "../Redux/actions";
import { useEffect } from "react";
const Navbar = () => {
  const dispatch=useDispatch();
  const history = useHistory();
  const handleLogout = () => {
      dispatch(Logout());
    dispatch(fetchUser())
    localStorage.removeItem('user')
      history.push("/login");
  };
  useEffect(()=> {
    dispatch(fetchTodo())
  }, [])
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/homepage" >
          <h1>Todo App</h1>
        </Link>
      </div>
      <div className="header__button">
        <div><button className="header__login" onClick={handleLogout}>Logout</button></div>
        <Link to="/homepage"> </Link>
      </div>
    </div>
  );
};
export default Navbar;  
