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

const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

const emitter = new EventEmitter();

const handleClick = () => {
  console.log("Button was clicked!");
};

emitter.addEventListener("click", handleClick);

button.addEventListener("click", () => {
  emitter.emit("click"); 
});

setTimeout(() => {
  emitter.removeEventListener("click", handleClick);
  console.log("Unsubscribed from click event");
}, 5000);
