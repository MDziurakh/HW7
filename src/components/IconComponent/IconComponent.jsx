import React from 'react';
import { ReactComponent as Add } from '../../images/add.svg';
import { ReactComponent as Done } from '../../images/done.svg';
import { ReactComponent as Del } from '../../images/delete.svg';

const IconComponent = props => {

    let icon;

    if(props.iconName === 'add'){
        icon = <Add style={{height:20}} onClick={props.onClick}/>
    }
    if(props.iconName === 'done'){
        icon = <Done style={{height:20}} onClick={props.onClick}/>
    }
    if(props.iconName === 'del'){
        icon = <Del style={{height:20}} onClick={props.onClick}/>
    }


    return (
        <>
          {icon}  
        </>
    );
};

export default IconComponent;