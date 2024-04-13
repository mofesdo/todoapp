loadList();
document.querySelector("#clear").addEventListener("click", clearList);
document.querySelector("#submit").addEventListener("click", add)

function loadList(){
    console.log(localStorage.getItem("count"))
    let ol = document.querySelector("#list");
    console.log(ol)
    if(localStorage.getItem("count") == null){
        localStorage.setItem("count", 0);
    }
    for(let i = 0; i < Number(localStorage.getItem("count")); i++){
        let li = document.createElement("li")
        console.log(localStorage.getItem(i));
        li.appendChild(document.createTextNode(localStorage.getItem(i)))
        console.log(ol)
        ol.appendChild(li)
    }
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
    let count = Number(localStorage.getItem("count"));
    localStorage.setItem(count, document.querySelector("#task").value);
    localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
}