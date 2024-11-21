
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import { counterReducer } from "./Counter/reducer";
import { todosReducer } from "./Todos/reducer";
const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
});

const middleware1 = (store)=> (next) => (action)=>{
    console.log("Entering Mw1");
    next(action);
    console.log("Exit");
}
export const store = createStore(
    rootReducer,
    applyMiddleware(middleware1),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
);

console.log("State",store.getState());
