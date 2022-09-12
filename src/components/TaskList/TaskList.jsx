import { ReactComponent as Del } from '../../images/delete.svg';
import { ReactComponent as Done } from '../../images/done.svg';
import style from './TaskList.css'

const TaskList = props => {

    
    function deleteItem (id) {
        let newTodo = [...props.list.filter(item => item.id !== id)]
        props.changeState(newTodo)
    }


    const list = props.list.map(item =>{
        return <div key={item.id} className='list-item' >
            <Done className='icon' 
            onClick={() => props.handleToggle(item.id)}

            />
            <li className={item.done ? 'done' : ''} key={item.id} 
            // style={taskStyle}
            >{item.value}</li>
            <Del className='icon'  onClick={()=>{deleteItem(item.id)}}/>
        </div>
    });

    return (
        <div>
            {list}
        </div>
    );
};

export default TaskList;