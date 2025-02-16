import { Link, Route, Routes, useParams } from "react-router-dom";
import Profile from "./Profile";
import Posts from "./Posts";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>User ID: {id}</h2>
      <nav>
        <ul>
          <li>
            <Link to={`/user/${id}/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`/user/${id}/post`}>Post</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="post" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default User;
