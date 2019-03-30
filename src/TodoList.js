import React, { Component } from 'react';
import store from './store';
export default class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().todo.list,
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list,
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            let action={type:'add_item',value:e.target.value};
            store.dispatch(action);
            e.target.value='';//设置input的value值为空
        }
    }
    delete=(index)=>{
        // console.log(index);
        let action={type:'delete',value:index};
        // console.log(action.value);
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <input type="text"  onKeyDown={this.handleAdd}/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item} <button onClick={()=>this.delete(index)}>
                            删除</button></li>
                            
                        ))
                    }
                </ul>
            </div>
        )
    }
}

