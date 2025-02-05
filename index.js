const app = require('./app');
const http = require("http");


const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});

/* 
Задача: зареєструвати юзера

+0. Створити сервер, який приймає запити
1. Прийняти відповідний запит.
2. Прийняти дані і розпарсити їх
3. Валідація даних 
    3.2. Якщо валідація даних пройшла неуспішно - відповісти помилкою
4. Створити сутність юзера
5. Зберегти юзера
6. Надіслати з сервера успішний статус і дані зареєстрованого юзера
 
*/
