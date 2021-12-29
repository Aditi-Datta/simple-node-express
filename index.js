const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from 4th node with nodemon');
});

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888889' },
    { id: 1, name: 'Shabnur', email: 'shabana@gmail.com', phone: '01788888889' },
    { id: 2, name: 'Shabonti', email: 'shabana@gmail.com', phone: '01788888889' },
    { id: 3, name: 'Shuchorita', email: 'shabana@gmail.com', phone: '01788888889' },
    { id: 4, name: 'Shania', email: 'shabana@gmail.com', phone: '01788888889' },
    { id: 5, name: 'Shaami', email: 'shabana@gmail.com', phone: '01788888889' },
]

app.get('/users', (req, res) => {

    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res)=>{
    console.log('hitting the post',req.body);
    res.send('inside post')
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['manogo', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy tok marka fazli');
})


app.listen(port, () => {
    console.log('listening to port', port);

})