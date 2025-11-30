import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  bg-dark navbar-dark">
      <div class="container">
        <Link class="navbar-brand" to="/">
          Supabase React
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#!"
                onClick={async () => await supabase.auth.signOut()}
              >
                Logout
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
