import React from 'react';
import User from './User';
import Visit from './Visit';
import {Link} from "react-router-dom";
const App = () => {
  return (  
    <div>
      <h1>App Component</h1>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/user">User</Link> </li>
        <li> <Link to="/visit">Visit</Link> </li>
      </ul>
    </div>
  );
}

export default App;