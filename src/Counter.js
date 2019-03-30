/*基于react去实现 */
import React, { Component } from 'react';
import store  from './store';
//store链接action 和Reducer的一个对象
//action是一个对象，描述state的变化
//Reducer定义了如何响应action描述的state的变化，并发送
export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })//监听变化
    }
    handleAdd=()=>{
        let action={type:'ADD',value:10};//可以传递value值
        store.dispatch(action);//提供 dispatch(action) 方法更新 state
        console.log(store.getState());
    }
    handleDec=()=>{
        let action={type:'DEC'};
        store.dispatch(action);//提供 dispatch(action) 方法更新 state
        console.log(store.getState());
    }
    incrementIfOdd=()=>{
        if (store.getState().counter % 2 !== 0) {
            let action={type:'ADD',value:1};
            store.dispatch(action);
        }
    }
    incrementAsync=()=>{
        setTimeout(function () {
            let action={type:'ADD',value:1};
            store.dispatch(action);
        }, 1000)
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <br/>
                    <button onClick={this.incrementIfOdd}>Increment if odd</button>
                    <button onClick={this.incrementAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}

