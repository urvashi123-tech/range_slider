const min=document.querySelector("#min")
const max=document.querySelector("#max")
const rangeinput=document.querySelectorAll(".range-input input")
rangeinput.forEach(input =>{
input.addEventListener("input",()=>{
    let minval=parseInt(rangeinput[0].value)
    let maxval=parseInt(rangeinput[1].value)
    // document.querySelector('min').innerHTML=minval;
    // document.querySelector('max').innerHTML=maxval;
    console.log(minval,maxval)
})
})
// let min_enter=Number(document.querySelector("#min").value)
// let max_enter=Number(document.querySelector("#max").value)
// let min_range_input=document.querySelector("#one")
// let max_range_input=document.querySelector("#two")
// min_range_input.setAttribute("value",min_enter)
// max_range_input.setAttribute("value",max_enter)