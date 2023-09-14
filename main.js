let btn = document.querySelector(".add")


let box = document.querySelector(".content")

function getValue(){
  let value = document.getElementById("note").value;
    return value
}

function insertElements(value){
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
  })
}
}
function ADD(){
insertElements(getValue())
}

btn.addEventListener("click",ADD)