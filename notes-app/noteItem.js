class NoteItem extends HTMLElement {
    set note(note) {
        this.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.body}</p>
            <small>${new Date(note.createdAt).toLocaleString()}</small>
        `;  
    }
}
customElements.define("note-item", NoteItem);