import React ,{Component} from 'react';
import "./TodoItem.css";

export default class TodoItem extends Component{
    render(){
        const {todoItem,handleDelete,handleEdit,checkStatus} = this.props;
        return(
           <li className="list-group-item d-flex justify-content-between my-2">
                <div >
                    <input className="mx-2 checkbox-1x" type="checkbox" id="customCheck1"></input>
                    {todoItem}
                </div>
                <div>
                <span  className="mx-2 text-primary" onClick={handleEdit}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </span>
                <span className="text-danger" onClick={handleDelete} >
                    <i className="fa fa-trash"  aria-hidden="true"></i>
                </span>
            </div>
           </li>
            
        );
    }
}