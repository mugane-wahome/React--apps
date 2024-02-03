
import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
            <li>
              <Link to={`contacts/1`}>Dennis Beaty</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Greg Brimble</Link>
            </li>
            <li>
              <Link to={`contacts/3`}>Ryan Dahl</Link>
            </li>
            <li>
              <Link to={`contacts/4`}>Sarah Dayan</Link>
            </li>
            <li>
              <Link to={`contacts/5`}>Ceora Ford</Link>
            </li>
            <li>
              <Link to={`contacts/6`}>Anthony Frehner</Link>

            </li>
            <li>
              <Link to={`contacts/7`}>Arisa fukukazi</Link>
            </li>
            <li>
              <Link to={`contacts/8`}>Henry Helvetica</Link>
            </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }