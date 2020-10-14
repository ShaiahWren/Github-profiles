import React, { Component } from 'react';
import UserCardList from "./UserCardList";
import { Route } from 'react-router-dom';
import { Container } from 'bloomer/lib/layout/Container';
import UserProfile from './UserProfile';


class SearchForm extends Component {
    state = {
        userName: '',
        users: []
    };

    loadData = async (userName) => {
        const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
        const data = await response.json();
        console.log("The data is: ", data)
        return data;
        
      };

    _handleSubmit = async (event) => {
            event.preventDefault();
            const { userName } = this.state;
            const users = await this.loadData(userName);
            this.setState({
                users: [...this.state.users, users],
            })
    }

    _handleChange = (newUser) => {
        this.setState({
            userName: newUser,
        });
    };

    render() {
        return (
            <>
            <Route exact path="/">Github Users
                {/* <h1>Github Users</h1> */}
                <form onSubmit={this._handleSubmit}>
                    <label>
                        Enter User Name
                        <input type="text" onChange={(event) => this._handleChange(event.target.value)}/>
                    </label>
                    <button type="submit">Search</button>
                </form>
                    
                    <UserCardList users={this.state.users}/>
            </Route>

            <Route path="/user/:username">
                
                <UserProfile users={this.state.users}/>
            </Route>
            </>
        )
    }
}

export default SearchForm;