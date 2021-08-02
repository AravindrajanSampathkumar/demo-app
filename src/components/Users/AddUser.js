import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserage] = useState('');
    const [error,setError]= useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0) {
            setError({
                title:'Invalid Input',
                message:'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserage < 1) {
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredUserage)
        console.log(enteredUsername, enteredUserage)
        setEnteredUsername('');
        setEnteredUserage('');
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const userageChangeHandler = (event) => {
        setEnteredUserage(event.target.value)
    }
    const errorHandler =()=>{
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm ={errorHandler}></ErrorModal>}
            
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username"
                        type="text"
                        onChange={usernameChangeHandler}
                        value={enteredUsername} />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age"
                        type="number"
                        onChange={userageChangeHandler}
                        value={enteredUserage} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};


export default AddUser;