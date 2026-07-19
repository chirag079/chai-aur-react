import { createContext, useContext } from "react";

export const ExpenseContext=createContext(
    {
        transactions:[
            {
                id: Date.now(),
                description: "",
                amount:0,
                type:"",
                category:"",
                timeStamp:""
            }
        ],
        addTransaction:(transaction)=>{},
        deleteTransaction:(id)=>{},
        updateTransaction:(id, transaction)=>{},
    }
)
export const ExpenseContextProvider=ExpenseContext.Provider;


export const useExpense = () => (useContext(ExpenseContext))