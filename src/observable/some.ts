class EventEmitter {
  private listeners: { [event: string]: Function[] } = {};

  constructor() {}

  public addEventListener(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  public removeEventListener(event: string, callback: Function) {
    if (!this.listeners[event]) return;

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  public emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) return;

    this.listeners[event].forEach((listener) => listener(...args));
  }
}

// Пример использования с событиями DOM
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

const emitter = new EventEmitter();

const handleClick = () => {
  console.log("Button was clicked!");
};

// Подписка на событие клика
emitter.addEventListener("click", handleClick);

// Добавление обработчика события клика на кнопку
button.addEventListener("click", () => {
  emitter.emit("click"); // Вызываем событие, когда кнопка нажата
});

// Отписка от события (например, через 5 секунд)
setTimeout(() => {
  emitter.removeEventListener("click", handleClick);
  console.log("Unsubscribed from click event");
}, 5000);
