import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList,setUsersList] =useState([]);

  const onAddUserHandler =(uName, uAge)=>{
   
    setUsersList((prevUsersList)=>{
     return [...prevUsersList,{name:uName,age:uAge, id:Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser ={onAddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
