import { ADD_TODO } from "./action";
const init = {todos:[] };
export const todosReducer = (store=init,{type,payload})=>{
    switch (type) {
         case ADD_TODO:
              return {...store,todos:[...store.todos,payload]};
        default:
            return store;
    }
};
