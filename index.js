
document.querySelector("#clear").addEventListener("click", clearList);
document.querySelector("#submit").addEventListener("click", add)



function clearList(){
    let list = document.querySelector("#list");
    let listLength = list.children.length;
    console.log(list.children)
    while(listLength > 0){
        list.removeChild(list.childNodes[0])
    }
}

function add(){
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${document.querySelector("#task").value}`));
    ul.appendChild(li)
}