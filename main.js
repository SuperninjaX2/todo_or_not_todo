let box = document.querySelector(".content");

function getValue() {
  let value = document.getElementById("note").value;
  return value;
}

clear = () => {
  let textArea = document.querySelector("textarea");
  textArea.value = "";
};

function save(value) {
  var key = "data_" + Date.now();
  localStorage.setItem(key, value);
  return key;
}

function insertElements(key, value) {
  if (value !== "") {
    let div = document.createElement("div");
    div.classList.add("box");
    box.appendChild(div);

    let p = document.createElement("p");
    p.classList.add("text");
    div.appendChild(p);
    p.innerHTML = value;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-delete");
    deleteBtn.innerHTML = "X";
    div.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      div.remove();
      localStorage.removeItem(key); // Remove the item from localStorage using the key
    });
    clear();
  }
}

window.onload = function () {
  // Loop through all items in localStorage and display them
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let data = localStorage.getItem(key);
    insertElements(key, data);
  }
};

function ADD() {
  let value = getValue();
  let key = save(value);
  insertElements(key, value);
}

let btn = document.querySelector(".add");
btn.addEventListener("click", ADD);
