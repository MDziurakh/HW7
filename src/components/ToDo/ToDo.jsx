import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../TaskList/TaskList';
import IconComponent from '../IconComponent/IconComponent';

class ToDo extends Component {

    state={
        currentTask:{
            done:false,
            value:'',
            id:'',
        },
        list:[]
    }

    handleToggle = (id) =>{
        let doneList = this.state.list.map((item) => item.id === id ? { ...item, done: !item.done} : {...item});
        console.log(doneList);
        this.setState({list:doneList})
    }

    changeState = (newList) =>{
        this.setState({list:newList})
    }


    handleChange = (e) =>{
        this.setState({currentTask:{
                    ...this.state.currentTask,
                    value:e.target.value
                }})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.currentTask.value.trim().length !==0){
            
        this.setState({currentTask:{
            ...this.state.currentTask,
            id: uuidv4(),
        }}, ()=>{
            const newTask = {
                value: this.state.currentTask.value,
                id: this.state.currentTask.id,
                done:this.state.currentTask.done
            }
            const newList= [...this.state.list, newTask];
            this.setState({list:newList}, ()=>{
                this.setState({currentTask:{
                    value:'',
                    id:'',
                    done:false
                }})
            })
        })
        }

    }



    render() {
        return (
            <>
                <form className='user-input' onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <input type='text' value={this.state.currentTask.value} onChange={this.handleChange}/>
                    {/* <input type='submit' value='Add Task'/> */}
                    <IconComponent iconName='add' onClick={(e)=>{this.handleSubmit(e)}}/>
                </form>
                <TaskList changeState={this.changeState} click={this.click} list={this.state.list} handleToggle={this.handleToggle} />
                
            </>
        );
    }
}

export default ToDo;