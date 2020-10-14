import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Image, Title, Media } from "bloomer";
import { CardImage } from "bloomer/lib/components/Card/CardImage";

const UserCard = ( props) => {
    const { user } = props;
    return (
        <Card>
            <div className="card-wrapper">
          <li className="user-card">
            <CardImage>
             
              <Link to={`/user/${user.login}`}>
                <Image 
                  src={user.avatar_url}
                  alt={`${user.avatar_url}`}
                />
              </Link>
         
           
            </CardImage>
            <Media>
                <Title isSize={4}>
                <p>
                  {user.name}
                </p>
                </Title>
            </Media>
            
          </li>
          </div>
           </Card>
    )


}
            

export default UserCard;