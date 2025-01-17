import { users } from '../db/db';
import { app } from '../server';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Регистрация пользователя
 * @returns 
 */
const registrationUser  = () => {
  return app.post('/register', async (req: any, res: any) => {
    const { username, password }: any = req.body;

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

      // Генерация JWT
      const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });

      // Установка куки с токеном
      res.cookie('token', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'Strict', 
        maxAge: 3600000
      });

      res.status(201).json({ message: 'Пользователь зарегистрирован', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
}

/**
 * Аутентификация пользователя
 * @returns 
 */
const authenticationUser  = () => {
  return app.post('/login', async (req: any, res: any) => {
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
      const token = jwt.sign({ username: user.username }, 'secret_key', { expiresIn: '1h' });

      // Установка куки с токеном
      res.cookie('token', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'Strict',
        maxAge: 3600000 
      });

      res.json({ message: 'Успешный вход' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
}

export { authenticationUser , registrationUser  };