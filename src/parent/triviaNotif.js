

class EventMessage {
    constructor(from, details) {
        this.from = from;
        this.details = details;
    }   
}

class TriviaNotif {
    events = [];
    handlers = [];

    constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onmessage = async (msg) => {
      try {
        console.log("Received WS message");
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch {}
    };    
    }

    broadcastEvent(from, details) {
        const event = new EventMessage(from,details);
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers = this.handlers.filter(h => h !== handler);
    }

    receiveEvent(event) {
        this.events.push(event);

        this.handlers.forEach(handler => handler(event));
    }
}

const TriviaNotifier = new TriviaNotif();
export { TriviaNotifier };