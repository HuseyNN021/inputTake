const inputData=document.querySelector('.takeData');
const submitData=document.querySelector('button');
const show=document.querySelector('.showInput');
submitData.addEventListener('click',()=>{
    show.innerHTML=inputData.value
    alert(inputData.value)
})
