import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/page1">Page 1</Link>
          </li>
          <li>
          <Link to="/page2">Page 2</Link>
          </li>
          <li>
          <Link to="/form">Form page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout