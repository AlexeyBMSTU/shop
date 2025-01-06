import { users } from '../db/db';
import { app } from '../server';
const jwt = require('jsonwebtoken');

/**
 * Получение информации о пользователе
 * @returns 
 */
const getAccount = () => {
  return app.get('/account', (req: any, res: any) => {
    const token = req.cookies.token; // Получение токена из куки

    if (!token) {
      return res.status(401).json({ message: 'Пользователь не аутентифицирован' });
    }

    try {
      // Проверка и декодирование токена
      const decoded = jwt.verify(token, 'secret_key');
      const username = decoded.username;

      // Поиск пользователя по имени
      const user = users.find(user => user.username === username);
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }

      // Возврат информации о пользователе
      res.json({ username: user.username });
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Неверный токен' });
    }
  });
}

export default getAccount;