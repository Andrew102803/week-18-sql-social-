const express = require('express');
const mongoose = require('mongoose');
//mongoos sucks
const app = express();
//express baby
const PORT = process.env.PORT || 3001;
//qowefhkiuqEHFIUHE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));
//Q9UERUHEQIUFH
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/noSQL-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries pls
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));
