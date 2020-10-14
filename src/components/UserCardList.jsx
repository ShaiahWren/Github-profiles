import React from "react";
import UserCard from "./UserCard";
import { BrowserRouter as Link } from 'react-router-dom';




const UserCardList = (props) => {
    const { users } = props;
    return (
      
        <ul>
          {users.map((user) => (
            <Link to={`/user/${user.login}`}>
              <UserCard user={user}/>
            </Link>
          ))}
        </ul>
     
    );
  };
  
  export default UserCardList;