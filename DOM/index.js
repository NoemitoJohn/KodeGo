let submit = document.getElementById("submit");
let itemTxt = document.getElementById("item");
let list = document.getElementById("items");
let deleteBtn = document.querySelector(".delete");


submit.addEventListener("click", addItem);


function addItem(){
    
    let item = document.createElement("li");
    item.innerHTML = itemTxt.value;
    item.setAttribute("class", "list-group-item");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger btn-sm float-right delete");
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", deleteItem);
    item.appendChild(deleteBtn);
    list.appendChild(item)
}


function deleteItem(event){
    let target = event.target.parentElement;
    list.removeChild(target);
}