let btn = document.querySelector(".add")


let box = document.querySelector(".content")

function getValue(){
  let value = document.getElementById("note").value;
  return value
}

function insertElements(value){
  
  let div = document.createElement("div")
  div.classList.add("box")
  box.appendChild(div)
  
  let p = document.createElement("p")
  p.classList.add("text")
  div.appendChild(p)
  p.innerHTML=value;
  
  let deleteBtn = document.createElement("buttun");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.innerHTML="X"
  div.appendChild(deleteBtn)
}
function ADD(){
insertElements(getValue())
}

btn.addEventListener("click",ADD)