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
  'https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image1.jpeg?raw=true',
  'https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image2.jpeg?raw=true',
  'https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image3.jpeg?raw=true',
  'https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image4.jpeg?raw=true',
  'https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image5.jpeg?raw=true',
  'null',
  'https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image7.jpeg?raw=true',
];
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

getImages();