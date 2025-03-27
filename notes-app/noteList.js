class NoteList extends HTMLElement {
    constructor() {
        super();
        this.notes = [];
    }

    setNotes(notes) {
        this.notes = notes;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this.notes.forEach(note => {
            const item = document.createElement("note-item");
            item.note = note;
            this.appendChild(item);
        });
    }
}

customElements.define("note-list", NoteList);
