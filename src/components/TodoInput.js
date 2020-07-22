import React ,{Component} from 'react';

export default class TodoInput extends Component{
    render(){
        const {id,item,handleSubmit,handleChange,editStatus} = this.props;
        return(
            <div className="bg-light card card-body my-4 ">
                <form onSubmit={handleSubmit}>
                    <label><h5>{editStatus?"":"ป้อนรายการ"}</h5></label>
                    <div  className="input-group">
                        <div className="input-group-prepend">
                            <div className={editStatus?"input-group-text bg-success text-white":"input-group-text bg-primary text-white"}>                   
                                    <i className={editStatus?"fa fa-pencil-square-o":"fa fa-book"} ></i>    
                            </div>
                        </div>
                        <input className={editStatus?"form-control is-invalid":"form-control"}  type="text" value={item} onChange={handleChange}/>  
                        <div className="mx-5 invalid-feedback">
                            <h6>แก้ไขรายการของคุณ !</h6>
                        </div> 
                    </div>
                    <input type="submit" disabled={item?false:true}
                        className={editStatus?"my-3 btn btn-block btn-success font-weight-bold":"my-3 btn btn-block btn-primary font-weight-bold"}
                        value={editStatus?"บันทึกรายการ":"เพิ่มรายการ"}
                    />
                </form>
            </div>
            
        );
    }
}