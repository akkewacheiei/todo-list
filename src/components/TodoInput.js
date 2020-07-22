import React ,{Component} from 'react';

export default class TodoInput extends Component{
    render(){
        const {item,handleSubmit,handleChange} = this.props;
        return(
            <div className="bg-light card card-body my-4">
                <form onSubmit={handleSubmit}>
                    <div  className="form-group">
                        <label><h5>ป้อนรายการ</h5></label>
                        <input className="form-control"  type="text" value={item} onChange={handleChange}/>   
                    </div>
                    <input type="submit" className="btn btn-success" value="บันทึกรายการ"/>
                </form>
            </div>
            
        );
    }
}