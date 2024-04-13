loadList();
document.querySelector("#clear").addEventListener("click", clearList);
document.querySelector("#submit").addEventListener("click", add)

function loadList(){
    console.log(localStorage.getItem("count"))
    
}


function clearList(){
    localStorage.clear();
    location.reload()

}

function add(){
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${document.querySelector("#task").value}`));
    ul.appendChild(li)
    let count = ul.children.length;
    localStorage.setItem(count, document.querySelector("#task").value);
}