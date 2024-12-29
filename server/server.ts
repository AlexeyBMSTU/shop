import express, { Request, Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json()); // Для парсинга JSON-данных

// Определяем интерфейс для пользователя
interface User {
  username: string;
  password: string;
}

const users: User[] = []; // Массив для хранения пользователей (в реальном приложении используйте базу данных)

const images = [
  'https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?t=st=1735399991~exp=1735403591~hmac=8cd7eaac7bd108743443945a3285355c1217476a12ec316e390b8b80fcb5e480&w=1380',
  'https://img.freepik.com/free-photo/late-april-through-early-may-tulip-fields-netherlands-colourfully-burst-into-full-bloom-fortunately-there-are-hundreds-flower-fields-dotted-dutch-countryside-which_181624-33612.jpg?t=st=1735401166~exp=1735404766~hmac=4c10d0e4fac63d9456f33659558f85a535d703b1b22c42e663b93865c5ac50e6&w=1380',
  'https://img.freepik.com/free-photo/beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset_181624-8579.jpg?t=st=1735401184~exp=1735404784~hmac=957f3c3ee1dc8873ee0c633a4ad80093d8228bea1170f0eae6a0afb9fb85d677&w=1380',
  'https://img.freepik.com/premium-photo/serene-swan-gracefully-glided-calm-waters-lake-trampeau-sweden-reflecting-off-its-pe_1120824-2314.jpg?w=1380',
  'https://img.freepik.com/free-photo/blooming-flowers-sunset_1161-80.jpg?t=st=1735401282~exp=1735404882~hmac=ebd19ecdb04ab138e68ff7a9623549b0165887b3d20ca2f2e0d25e6b247979f4&w=1380'
];

// Регистрация пользователя
app.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Проверка на наличие username и password
  if (!username || !password) {
    return res.status(400).json({ message: 'Имя пользователя и пароль обязательны' });
  }

  // Проверка на существование пользователя
  const existingUser  = users.find(user => user.username === username);
  if (existingUser ) {
    return res.status(400).json({ message: 'Пользователь уже существует' });
  }

  try {
    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Сохранение нового пользователя
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'Пользователь зарегистрирован' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Аутентификация пользователя
app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Проверка на наличие username и password
  if (!username || !password) {
    return res.status(400).json({ message: 'Имя пользователя и пароль обязательны' });
  }

  // Поиск пользователя
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Неверные учетные данные' });
  }

  try {
    // Проверка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Неверные учетные данные' });
    }

    // Генерация JWT
    const token = jwt .sign({ username: user.username }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Получение изображений
app.get('/images', (req: Request, res: Response) => {
  res.json(images);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});