import React from 'react';

const TaskList = props => {

    const list = props.list.map(item =>{
        return <div key={item.id} >
            <li key={item.id} >{item.value}</li>
        </div>
    });

    return (
        <div>
            {list}
        </div>
    );
};

export default TaskList;