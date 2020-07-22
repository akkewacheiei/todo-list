import React ,{Component} from 'react';

export default class TodoItem extends Component{
    render(){
        const {todoItem} = this.props;
        return(
           <li className="list-group-item d-flex justify-content-between my-2">
                <div>
                    {todoItem}
                </div>
                <div>
                <span  className="mx-1 text-primary">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </span>
                <span className="text-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
            </div>
           </li>
            
        );
    }
}