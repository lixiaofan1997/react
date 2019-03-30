import {CombineReducers, combineReducers} from 'redux';//合并
let counter=(state=0,action)=>{
//接收原来的state，进行处理后返回新的
    switch(action.type){
        case 'ADD':
            return state+action.value;
        case 'DEC':
            return state-1;
        default:
            return state;
    }
}
let initValue ={
    list:[1,2,3]
}
let todo=(state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState =JSON.parse(JSON.stringify(state));
            newState.list.push(action.value);
            console.log(newState.list);
            return  newState;
        case 'delete':
            let newState1 =JSON.parse(JSON.stringify(state));
            newState1.list.splice(action.value,1);//删除数组里的某个值
            return  newState1;
        default:
            return state;
    }
}

export default combineReducers({
    counter:counter,todo:todo
    //把两个reducer合并到了一个
})
//导出纯函数