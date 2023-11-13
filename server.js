const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser'); // Ensure JSON parsing with this inclusion
const users = require('./fakeUsers.json'); // Import user data

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Utilize body-parser for JSON parsing
app.use(bodyParser.json());

// Handle routes
app.get('/', (req, res) => {
  res.render('login'); // Render the login view
});

app.post('/', (req, res) => {
  res.redirect(`/list`); // Redirect to the '/list' route
});

app.get('/list', (req, res) => {
  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredUsers = users.filter((user, idx) => idx > start && idx <= end);

  res.render('list', {
    title: 'list',
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

app.get('/detail/:id', (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.render('detail', { user });
});

// Employ the apiRouter for managing API requests
app.use('/api', apiRouter);

// Listen for incoming requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
