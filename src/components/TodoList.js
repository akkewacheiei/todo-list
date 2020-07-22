import React ,{Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
    render(){
        const {list} = this.props;
        return(
            <ul className="bg-light card card-body my-5">
                <h4 align="center" className="my-3" >รายการ</h4>
                {list.map(item=>{
                    return(
                        <TodoItem
                            todoItem={item.todoItem}
                        />
                    )
                })}
                <button className="btn btn-danger font-weight-bold" >Clear</button>
            </ul>
        );
    }
}