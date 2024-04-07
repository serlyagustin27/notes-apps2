export async function createNote() {
    try {
        const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                title: 'Hello, Notes!',
                body: 'My new notes.'
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw new Error('Failed to create note');
    }
}


export async function getNotes() {
    try {
        const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw new Error('Failed to fetch notes');
    }
}

