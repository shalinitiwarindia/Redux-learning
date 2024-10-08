import {legacy_createStore as createStore} from "redux";

const reducer=(store,action) => {
    if(action.type === "ADD_COUNT") {
        return {...store,counter:store.counter + action.payload};
    }
    return store;
};

const initState={
    counter:0,
    todos:[],
    theme:"dark",
};

const store =createStore(reducer,initState);

console.log("Initial store",store.getState());
store.dispatch({type:"ADD_COUNT",payload:1});
console.log("After dispatch",store.getState());
