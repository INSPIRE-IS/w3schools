import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{flex:1,background:'#0095ffad'}}>
        <ul style={{flexDirection:'row',listStyle:'none'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Add</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
