let inp = document.querySelector("input");
let ulist = document.querySelector("ul");

function response(event) {
    event.preventDefault(); 
    let item = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("large-checkbox"); 
    checkbox.addEventListener("change", updateProgress);
    
    let delIcon = document.createElement("i");
    delIcon.classList.add("fa-solid", "fa-trash", "delete");
    delIcon.addEventListener("click", deleteItem);


    item.appendChild(checkbox);
    item.appendChild(document.createTextNode(inp.value));
    item.appendChild(delIcon);
    ulist.appendChild(item);
    inp.value = "";
    updateProgress();
}

function updateProgress() {
    let para = document.querySelector("p");
    let checkboxes = document.querySelectorAll("ul input[type='checkbox']");
    let checked = document.querySelectorAll("ul input[type='checkbox']:checked");
    let percent = (checked.length / checkboxes.length) * 100;
    para.innerText = `Completed: ${Math.round(percent)}%`;
    if(percent == 100){
        para.innerText = 'Congrats! Your task is completed for today';
    }
}
function deleteItem(event) {
    let listitem = event.target.parentElement;
    listitem.remove();
    updateProgress();
}