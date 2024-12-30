import path = require('path')
import getImages from './controller/image'

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

export const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json()); 
// Укажите директорию для статических файлов
app.use('/photos', express.static(path.join(__dirname, 'db/photos')));

export const images = [
  '/photos/image1.jpeg',
  '/photos/image2.jpeg',
  '/photos/image3.jpeg',
  '/photos/image4.jpeg',
  '/photos/image5.jpeg',
  '/photos/image77.jpeg',
  '/photos/image7.jpeg',
];
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

getImages();