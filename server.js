const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.secret,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// set handlebars engine
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// takes all contents of a folder and serves as static assets
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });
