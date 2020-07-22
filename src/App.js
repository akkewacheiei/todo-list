import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state={
    list:[],
    item:""
  };
/////////////////////////////////////////////////////////เมื่อกดปุ่มSubmit
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={todoItem:this.state.item}; //ดึงค่าจาก state item มาเก็บที่ todoItem
    const updateItem=[... this.state.list,newItem]; //นำItemใหม่ เพิ่มลงในList
    this.setState({
      list:updateItem,
      item:""
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

  render(){
    return(
      <div className="container ">
        <h1 className="my-5 " align="center">To do list - Web Application</h1>
        <div>
          <TodoInput 
            item={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <TodoList
            list={this.state.list}
          />
        </div>
      </div>
    );
  }
}

export default App;
