const Promise = require('bluebird');
const sqlite = require('sqlite');

sqlite.open('./data/database.sqlite', { Promise }).then(db => {
    db.all('SELECT * FROM customers;').then(console.log);
});