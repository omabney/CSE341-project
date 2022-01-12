// TA02 Solution
// This is the solution for the routing side of TA02
const express = require('express');
const router = express.Router();

//Team activity 01
const userArray = ['Tony', 'Bruce', 'Peter'];

//Team activity 02
router.post('/addUser', (req, res, next) => {
    const newUser = req.body.newUser;

    userArray.push(newUser);

    res.redirect('/ta02/');
});

//Team activity 03
router.post('/removeUser', (req, res, next) => {
    const remUser = req.body.remUser;

    
    const index = userArray.indexOf(remUser);
    if (index !== -1 ) {
        userArray.splice(index, 1);
    }

    res.redirect('/ta02/');
});

router.get('/',(req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        users: userArray,
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;

