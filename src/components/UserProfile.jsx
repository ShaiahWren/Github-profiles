import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const UserProfile = props => {
    const {users} = props
    const { user_number } = useParams();
    const users = users.find((user) => {
        return users.number === parseInt(user_number) ? user : null;
    });

    return (
       <>
        <p>{user.name}</p>
        <p>{user.repos_url}</p>
        <ReactMarkdown source={user.repos_url} escapeHtml={false}/>
       </> 
    )

};


export default UserProfile;