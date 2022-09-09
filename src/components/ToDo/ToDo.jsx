import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../TaskList/TaskList';

class ToDo extends Component {

    state={
        currentTask:{
            value:'',
            id:''
        },
        list:[]
    }

    handleChange = (e) =>{
        this.setState({currentTask:{
                    ...this.state.currentTask,
                    value:e.target.value
                }}, ()=> {
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({currentTask:{
            ...this.state.currentTask,
            id: uuidv4(),
        }}, ()=>{
            const newTask = {
                value: this.state.currentTask.value,
                id: this.state.currentTask.id
            }
            const newList= [...this.state.list, newTask];

            this.setState({list:newList}, ()=>{
                this.setState({currentTask:{
                    value:'',
                    id:''
                }})
            })
        })

    }



    render() {
        return (
            <>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <input type='text' value={this.state.currentTask.value} onChange={this.handleChange}/>
                    <input type='submit' value='Add Task'/>
                </form>
                <TaskList list={this.state.list} />
            </>
        );
    }
}

export default ToDo;