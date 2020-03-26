const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const ejs = require("ejs");
const session = require('express-session');
const config = require('config.json')('./config.json');

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
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.render("home");
});

const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(new VKontakteStrategy({
    clientID: '7376972',
    clientSecret: 'tbI5oCIF6MWDkhhvfEki',
    callbackURL: "http://easykesh.ru/auth/vkontakte/callback",
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

let server = require('http').Server(app);

server.listen(config.http.port, config.http.host, function () {
    console.log("Listening!");
});