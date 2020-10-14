import React from "react";
import UserCard from "./UserCard";



const UserCardList = (props) => {
    const { users } = props;
    return (
      
      <ul>
        {users.map((user) => (
            <UserCard user={user}/>
        ))}
      </ul>
     
    );
  };
  
  export default UserCardList;