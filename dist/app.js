import { createNote, getNotes } from './apiService.js';

n
async function main() {
    try {
       
        const newNote = await createNote();
        console.log('New note created:', newNote);

        const notes = await getNotes();
        console.log('Notes:', notes);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
