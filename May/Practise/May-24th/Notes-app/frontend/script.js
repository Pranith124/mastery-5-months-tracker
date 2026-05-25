
window.onload = function() {
    getNotes();
};


async function getNotes(){
    /*
    const res= await fetch("http://localhost:3000/Notes");
    const notes= await res.json();
    */

    const res= await axios.get("http://localhost:3000/notes");
    const notes=res.data.notes;

    document.getElementById("All-notes").innerHTML="";
    for (let i= 0 ;i<notes.length; i++){
        const newNote = document.createElement("div");
        newNote.innerHTML=notes[i];
        newNote.setAttribute("style","border:2px solid black ; padding:10px;")
        document.getElementById("All-notes").appendChild(newNote);
    }

    return;
}


async function createNote() {
    const note=document.getElementById("User-Note").value;
    const res=await axios.post("http://localhost:3000/note",{
        note:note
    })

    const newNote = document.createElement("div");
    newNote.innerHTML=note;
    newNote.setAttribute("style","border:2px solid black ; padding:10px;")
    document.getElementById("All-notes").appendChild(newNote);

    getNotes();

}
