import React, { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Route, Link } from 'react-router-dom';


const UserProfile = props => {
    const {users} = props
    const { username } = useParams();
    const user = users.find((user) => {
        return user.login === username ? user : null;
    });

    const [repoData, setRepos] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repoData = await response.json();
            setRepos(repoData);
        })();
       }, [setRepos, username]);



    return (
       <>
       {!!user ? (
           <>
           <p>{user.name}</p>
           <p>{user.location}</p>
           <p>{user.bio}</p>
           <ul>
               {repoData.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
               ))}
           </ul>
           </>
       ) : (
           <p>Users array is empty</p>
       )}
        
       </> 
    )

};


export default UserProfile;