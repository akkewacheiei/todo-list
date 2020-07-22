import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from "uuid";

class App extends Component {
  state={
    list:[],
    id:uuid(),
    item:"",
    editStatus:false,
    checkStatus:false
  };
/////////////////////////////////////////////////////////เมื่อกดปุ่มSubmit
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      todoItem:this.state.item
    }; //ดึงค่าจาก state item มาเก็บที่ newItem
    const updateItem=[... this.state.list,newItem]; //นำItemใหม่ เพิ่มลงในList
    this.setState({
      list:updateItem,
      id:uuid(),
      item:"",
      editStatus:false
    })
  }

  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    })
  }
  clearList=()=>{
    this.setState({
      list:[]
    })
  }

  handleDelete=(id)=>{
    const filterItem=this.state.list.filter(item=>item.id !== id)
    this.setState({
      list:filterItem
    })
  }

  handleEdit=(id)=>{
    const selectItem=this.state.list.find(item=>item.id === id)
    const filterItem=this.state.list.filter(item=>item.id !== id)

    this.setState({
      list:filterItem,
      item:selectItem.todoItem,
      id:id,
      editStatus:true
    })
  }

  render(){
    return(
      <div className="container ">
        <h1 className="my-5 " align="center">To do list - Web Application</h1>
        <div>
          <TodoInput
            id={this.state.id} 
            item={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editStatus={this.state.editStatus}
          />
          <TodoList
            list={this.state.list}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            editStatus={this.state.editStatus}
          />
        </div>
      </div>
    );
  }
}

export default App;
