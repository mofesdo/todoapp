document.querySelector("#clear").addEventListener("click", clearList);

function clearList(){
    let list = document.querySelector("#list");
    let listLength = list.children.length;
    console.log(list.children)
    while(listLength > 0){
        list.removeChild(list.childNodes[0])
    }
}