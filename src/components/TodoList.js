import React ,{Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
    render(){
        const {list,clearList,handleDelete,handleEdit,editStatus} = this.props;
        return(
            <ul className="bg-light card card-body my-5">
                <h4 align="center" className="my-3" >รายการ</h4>
                {list.map(item=>{
                    return(
                        <TodoItem
                            key={item.id} 
                            todoItem={item.todoItem}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                        />
                    )
                })}
                <button onClick={clearList} className="btn btn-danger font-weight-bold" disabled={editStatus?true:false} >ลบทั้งหมด</button>
            </ul>
        );
    }
}