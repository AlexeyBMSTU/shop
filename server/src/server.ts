import getImages from './controller/image';
import { authenticationUser, registrationUser } from './controller/auth';
import getAccount from './controller/account';

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
export const app = express();
const PORT = 10000;

app.use(cors());
app.use(bodyParser.json()); 
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

getImages();
authenticationUser();
registrationUser();
getAccount();