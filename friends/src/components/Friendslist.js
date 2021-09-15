import React from "react";
import { Route } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";
class FriendsList extends React.Component{
    state={
        friends:[],
    }

    componentDidMount(){
        axiosWithAuth()
            .get('/friends')
            .then(res=>{
                this.setState({
                    ...this.state.friends,
                    friends: res.data
                })
            })
            .catch(err=>{
                console.error(err)
            })
    }   


    render(){
        return(<div>
            {this.state.friends.map((friend, id)=>{
                return(<Friend key={id} friend={friend}/>)
            })}
        </div>)
    }
} 

export default FriendsList



