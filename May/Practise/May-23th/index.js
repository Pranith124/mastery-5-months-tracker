function addTodo(){
    let element= document.getElementById("todoInput");
    const val=element.value;
    

    const newdiv =  document.createElement("div");
    newdiv.innerHTML=val;

    const parentDiv = document.getElementById("TodoList");
    parentDiv.appendChild(newdiv);


}