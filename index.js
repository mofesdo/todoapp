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
        /* Not fully implemented delete btn
        let btn = document.createElement("button");
        btn.classList.add("button");
        btn.innerHTML = "Erase"
        btn.addEventListener("click", erase);
        li.appendChild(btn);
        */
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
/* Not implemented
function erase(){
    console.log("erasing...")
    localStorage.removeItem(1)
    localStorage.setItem("count", Number(localStorage.getItem("count")) - 1)
}
*/