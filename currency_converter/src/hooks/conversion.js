//hooks always be in js
//hook is just a normal function
let rate
const useCurrencyConvert=async(from,to)=>{
    let res=await fetch(`https://v6.exchangerate-api.com/v6/919d790b675e0137d9cc7245/latest/${from}`)
    let data= await res.json()
    console.log(data)
    rate=data.conversion_rates[to]
    console.log(rate)
    return Number(rate)
}
export default useCurrencyConvert;
