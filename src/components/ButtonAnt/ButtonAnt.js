import {Button} from 'antd';


export const ButtonAnt =({className,onClick,Type,Name})=>{

    return(
        <Button className={className} onClick={onClick} type={Type}>{Name} </Button>
    )
}