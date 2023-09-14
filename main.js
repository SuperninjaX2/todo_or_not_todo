let btn = document.querySelector(".add")
let box = document.querySelector(".content")

function getValue(){
  let value = document.getElementById("note").value;
    return value
}
clear=()=>{
  let textArea = document.querySelector("textarea")
  textArea.value =""
}
function insertElements(value){
  localStorage.setItem("value",value)
  if(value !=""){
  let div = document.createElement("div")
  div.classList.add("box")
  box.appendChild(div)
  
  let p = document.createElement("p")
  p.classList.add("text")
  div.appendChild(p)
  p.innerHTML=value;
  
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.innerHTML="X"
  div.appendChild(deleteBtn)
  deleteBtn.addEventListener("click",function(){
    div.remove()
    localStorage.removeItem("value")
  })
  clear()
}
}
window.onload = function() {
  // Check if there is data in localStorage
  if (localStorage.getItem('value')) {
    // Data exists in localStorage, do something with it
    var data = localStorage.getItem('value');
    // Your code here to handle the data
    insertElements(data)
  } else {
    // No data found in localStorage
    // Your code for the case when there's no data
  }
};

function ADD(){
insertElements(getValue())
}

btn.addEventListener("click",ADD)