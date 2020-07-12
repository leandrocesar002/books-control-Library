const express = require ('express');
const {uuid} = require('uuidv4');

const app = express();

app.use(express.json());

const libraries= [];

app.get('/library', (request, response) => {

    const {title} = request.query;

    const results = title ? libraries.filter(library => library.title.includes(title)) : libraries;

    return response.json(results);
});

app.post('/library', (request, response) => {
    const {id, title, numberPage, author, dtPublication} = request.body;

    const library = {id, title, numberPage, author, dtPublication};

    libraries.push(library);

    return response.json(library);
});

app.put('/library/:id', (request, response) => {
    const {id} = request.params;
    const {title, numberPage, author, dtPublication} = request.body;

    const libraryIndex = libraries.findIndex(library => library.id === id);

    if (libraryIndex < 0){
        return response.status(400).json({ error: "Book not found." })
    }

    const library ={
        id,
        title,
        numberPage,
        author,
        dtPublication,
    }

    libraries[libraryIndex] = library;

    return response.json(library);
});

app.delete('/library/:id', (request, response) => {
    const {id} = request.params;

    const libraryIndex = libraries.findIndex(library => library.id === id);

    if (libraryIndex < 0){
        return response.status(400).json({ error: "Book not found." })
    }

    libraries.splice(libraryIndex,1)

    return response.status(204).send();
});




app.listen(3333, () =>{
    console.log('back-end started!')
});