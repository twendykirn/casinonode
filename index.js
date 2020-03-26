const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const ejs = require("ejs");
const session = require('express-session');
const http = require('http');
const hostname = '45.147.197.154';
const port = 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'ezvin',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));


app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});

let sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/games');
    } else {
        next();
    }
};

app.get("/", function (req, res) {
    res.sendFile('index.html');
    res.render("home");
});

const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(new VKontakteStrategy({
    clientID: '7373573',
    clientSecret: '9NfXagL0YkFxnRiKBr3j',
    callbackURL: "http://localhost:3000/auth/vkontakte/callback",
    scope: ['groups'],
    profileFields: ['uid', 'first_name', 'last_name', 'photo_big']
},
    function (accessToken, refreshToken, params, profile, done) {
        return done(null, profile);
    }
));

app.get('/auth/vkontakte',
    passport.authenticate('vkontakte'),
    function (req, res) {
        // The request will be redirected to vk.com for authentication, so
        // this function will not be called.
    });

app.get('/auth/vkontakte/callback',
    passport.authenticate('vkontakte', {
        failureRedirect: '/',
        session: false
    }),
    function (req, res) {
        req.session.user = req.user["_json"];
        res.redirect('/games');
    });

app.get('/games', function (req, res) {
    if (!req.session.user && !req.cookies.user_sid) {
        res.redirect('/');
    } else {
        let sess = req.session;
        if (sess.user['photo_big'] == undefined) {
            res.redirect('/');
        } else {
            res.render('games', {
                photo: "src=" + sess.user['photo_big']
            })
        }
    }
})

app.route('/youtube').post(function (req, res) {
    if (!req.session.user && !req.cookies.user_sid && !req.body.word) {
        res.send('error');
    } else {
        let sess = req.session;
        res.render('youtube');
    }
}).get(function (req, res) {
    res.redirect('/');
});

app.route('/faq').post(function (req, res) {
    if (!req.session.user && !req.cookies.user_sid && !req.body.word) {
        res.send('error');
    } else {
        let sess = req.session;
        res.render('faq');
    }
}).get(function (req, res) {
    res.redirect('/');
});

app.route('/withdraw').post(function (req, res) {
    if (!req.session.user && !req.cookies.user_sid && !req.body.word) {
        res.send('error');
    } else {
        let sess = req.session;
        res.render('withdraw');
    }
}).get(function (req, res) {
    res.redirect('/');
});

app.route('/bonus').post(function (req, res) {
    if (!req.session.user && !req.cookies.user_sid && !req.body.word) {
        res.send('error');
    } else {
        let sess = req.session;
        res.render('bonus');
    }
}).get(function (req, res) {
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    res.clearCookie('user_sid');
    res.redirect('/');
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(301, { Location: 'http://easyvin.net' });
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Node.js!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});