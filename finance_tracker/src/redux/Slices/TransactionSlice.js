import {createSlice,nanoid} from "@reduxjs/toolkit"
//I was making separate slice for everything. income slice,expense slice, transaction slice and balance slice but they are all related to each ther If i store transaction from that I can calculate everyother thing so no need to make extra slice only make separate slice when you have to store completely different data they don't have any relation with eachother
const initialState={transactionHistory:{balance:0,income:0,expense:0,transactions:[{
id:'',
amount:0,
category:'',
desc:'',
cashflowMethod:''
}],
expenseData:[['Category','Amount']],
incomeData:[['Category','Amount']]
}
}
// the name already handles the key so we don't have to give it here otherwise it will be state.transactionHistory.transactionHistory
// balance insome and expense are single entity there will be multiple transaction and it hve multiple properties so there is a list od transaction and inside it there is a separate object for each transaction
const transactionSlice=createSlice({
    name:'transactionhistory',
    initialState,
    reducers:{
        addTransaction:(state,action)=>{
            //from input value always comes in string e.target.value
            if (action.payload.cashflow === 'income'){
                state.transactionHistory.balance+=Number(action.payload.amount)
                state.transactionHistory.income+=Number(action.payload.amount)
            }
            else{
                state.transactionHistory.balance-=Number(action.payload.amount)
                state.transactionHistory.expense+=Number(action.payload.amount)
            }
                const transaction={
                id:nanoid(),
                amount:action.payload.amount,
                category:action.payload.category,
                desc:action.payload.desc,
                cashflowMethod:action.payload.cashflow
            }
            state.transactionHistory.transactions.push(transaction)     
        },
        deleteTransaction:(state,action)=>{
            const transinfo=state.transactionHistory.transactions.find((item)=>item.id===action.payload) //in this variable there will be transaction object is saved which user want to deleted 
            // when the user will delete the transaction it must subtact amount from the balance and category as well
            let delamount=Number(transinfo.amount)
            let delcategory=transinfo.category
            let method=transinfo.cashflowMethod
            if (method==='expense'){
                state.transactionHistory.balance+=delamount //expense always cuts from the balance but when it i deleted then that expense will be added in the balance
                state.transactionHistory.expense-=delamount
                let delchartamount=state.transactionHistory.expenseData.find(el=>el[0]===delcategory)
                delchartamount[1]-=delamount

            }
            else{
                state.transactionHistory.balance-=delamount
                state.transactionHistory.income-=delamount
                let delchartamount=state.transactionHistory.incomeData.find(el=>el[0]===delcategory)
                delchartamount[1]-=delamount
            }
            state.transactionHistory.transactions=state.transactionHistory.transactions.filter((item)=>(item.id!==action.payload
            ))

        },
        adddata:(state,action)=>{
            const {category,cashflow,amount}=action.payload
            const foundincome=state.transactionHistory.incomeData.find((element)=>element[0]===category) //if it returns an element that means we havefound the element which have the category and we just have to add the amount in the current amount
            const foundexpense=state.transactionHistory.expenseData.find((element)=>element[0]===category)
            if (cashflow==='income'){
                if (foundincome){
                    foundincome[1]+=Number(amount)
                }
                else{
                    state.transactionHistory.incomeData.push([category,Number(amount)])
                }
            }
            else{
                if (foundexpense){
                    foundexpense[1]+=Number(amount)
                }
                else{
                    state.transactionHistory.expenseData.push([category,Number(amount)])
                }
            }

        }
    }
})

export const {addTransaction,deleteTransaction,adddata}=transactionSlice.actions // if we have to export methods we did it through actions
export default transactionSlice.reducer
//means “when someone imports this file without { }, give them the reducer function”.