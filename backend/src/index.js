const express = require ('express');
const cors= require('cors');
const {uuid} = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json());

const libraries= [];
const users = [];

app.get('/library', (request, response) => {

    const {title} = request.query;

    const results = title ? libraries.filter(library => library.title.includes(title)) : libraries;

    return response.json(results);
});

app.get('/users', (request, response) => {

    const {name} = request.query;

    const results = name ? users.filter(user => user.name.includes(name)) : users;

    return response.json(results);
});


app.post('/library', (request, response) => {
    const {id, title, numberPage, author, dtPublication} = request.body;

    const library = {id, title, numberPage, author, dtPublication};

    libraries.push(library);

    return response.json(library);
});

app.post('/users', (request, response) => {
    const { name, email, funcao} = request.body;

    const user = {id: uuid() ,name, email, funcao};

    users.push(user);

    return response.json(user);
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


app.put('/user/:id', (request, response) => {
    const {id} = request.params;
    const {name,email,funcao} = request.body;

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0){
        return response.status(400).json({ error: "User not found." })
    }

    const user ={
        id,
        name,
        email,
        funcao
    }

    users[userIndex] = user;

    return response.json(user);
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


app.delete('/user/:id', (request, response) => {
    const {id} = request.params;

    
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0){
        return response.status(400).json({ error: "User not found." })
    }

    users.splice(userIndex,1)

    return response.status(204).send();
});



app.listen(3333, () =>{
    console.log('back-end started!')
});