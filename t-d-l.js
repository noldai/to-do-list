/*var listContainer = document.getElementById('listContainer');
                if (listContainer.style.display === "none"){
                    listContainer.style.display = "block";
                } else{
                    listContainer.style.display = "none";
                }*/


function addTask() { //adds a <li> element to <ul>
    var task = document.getElementById('newTask').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI");
        txtNode = document.createTextNode(task);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}
        
function removeTask() {
    var task = document.getElementById('list');
        task.removeChild(task.childNodes[0]);
}