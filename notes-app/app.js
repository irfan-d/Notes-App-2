const STORAGE_KEY = 'notesData';

const defaultNotes = [
    {
        id: 'notes-jT-jjsyz61J8XKiI',
        title: 'Welcome to Notes, Dimas!',
        body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
        createdAt: '2022-07-28T10:03:12.594Z',
        archived: false,
    },
    {
        id: 'notes-aB-cdefg12345',
        title: 'Meeting Agenda',
        body: 'Discuss project updates and assign tasks for the upcoming week.',
        createdAt: '2022-08-05T15:30:00.000Z',
        archived: false,
    },
    {
        id: 'notes-XyZ-789012345',
        title: 'Shopping List',
        body: 'Milk, eggs, bread, fruits, and vegetables.',
        createdAt: '2022-08-10T08:45:23.120Z',
        archived: false,
    },
    {
        id: 'notes-1a-2b3c4d5e6f',
        title: 'Personal Goals',
        body: 'Read two books per month, exercise three times a week, learn a new language.',
        createdAt: '2022-08-15T18:12:55.789Z',
        archived: false,
    },
    {
        id: 'notes-LMN-456789',
        title: 'Recipe: Spaghetti Bolognese',
        body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
        createdAt: '2022-08-20T12:30:40.200Z',
        archived: false,
    },
    {
        id: 'notes-QwErTyUiOp',
        title: 'Workout Routine',
        body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
        createdAt: '2022-08-25T09:15:17.890Z',
        archived: false,
    }
];

function getNotes() {
    const storedNotes = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return storedNotes && storedNotes.length > 0 ? storedNotes : defaultNotes;
}

function addNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

document.addEventListener("DOMContentLoaded", () => {
    const noteListElement = document.querySelector("note-list");
//////////////////////////////////////////////////////////////////////////////
    if (noteListElement) {
        noteListElement.setNotes(defaultNotes);
    } else {
        console.error("note-list tidak ditemukan di halaman.");
    }

    const notesData = getNotes();
    noteListElement.setNotes(notesData);

    document.getElementById("note-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;

        if (title.trim() && body.trim()) {
            const newNote = {
                id: `notes-${Date.now()}`,
                title: title,
                body: body,
                createdAt: new Date().toISOString(),
                archived: false
            };

            const updatedNotes = getNotes();
            updatedNotes.push(newNote);
            addNotes(updatedNotes);

            noteListElement.setNotes(updatedNotes);

            document.getElementById("title").value = "";
            document.getElementById("body").value = "";
        }
    });
});
