# data model for each transaction

{
    id: Date.now(),
    description: "",
    amount:"",
    type:"",
    category:"",
    timeStamp:""
}

# context

createContext(
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
        filter:(type, timeStamp)=>{},
        search:(description)=>{},
    }
)