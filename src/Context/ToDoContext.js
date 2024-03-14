/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";


export const ToDoContext = createContext({
    todos :[
        {
            id:1,
            todo: "Todo msg",
            completed:false,
        }
    ]
    // eslint-disable-next-line no-unused-vars
    ,addTodo: (todo) =>{},
    updateTodo: (id,todo) =>{},
    deleteTodo:(id) =>{},
    // eslint-disable-next-line no-unused-vars
    toggleComplete: (id) => {}
})




export const useTodo = () =>{
    return useContext(ToDoContext)
}


export const ToDoProvider = ToDoContext.Provider