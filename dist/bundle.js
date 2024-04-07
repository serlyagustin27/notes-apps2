let notes = [
    {
      id: "notes-jT-jjsyz61J8XKiI",
      title: "Welcome to Notes, Dimas!",
      body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
      createdAt: "2022-07-28T10:03:12.594Z",
      archived: false
    },
    
  ];
  
  console.log(notes);
  
  const noteList = document.getElementById("note-list");
  
  function renderNotes(noteArray) {

    noteList.innerHTML = "";
  
    noteArray.forEach((note) => {
      const noteElement = document.createElement("div");
      noteElement.classList.add("note");
      noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.body}</p>
        <small>Created at: ${new Date(note.createdAt).toLocaleString()}</small>
        <button class="delete-btn">Delete</button>
      `;
      noteElement.querySelector(".delete-btn").addEventListener("click", () => {
       
        notes = notes.filter((n) => n.id !== note.id);
        renderNotes(notes);
      });
      noteList.appendChild(noteElement);
    });
  }
  
  
  const noteForm = document.getElementById("note-form");
  
  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("note-title").value;
    const bodyInput = document.getElementById("note-body").value;
    const newNote = {
      id: `notes-${Date.now()}`,
      title: titleInput,
      body: bodyInput,
      createdAt: new Date().toISOString(),
      archived: false
    };
    
    notes.push(newNote);
    renderNotes(notes);
    noteForm.reset();
  });
  
 
  renderNotes(notes);
  