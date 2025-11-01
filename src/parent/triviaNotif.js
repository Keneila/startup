

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
        setInterval(() => {
            const score = Math.floor(Math.random() * 101);
            const studentName = "Student 1";
            const subject = "Social Studies";
            this.broadcastEvent(studentName, { studentName, subject, score });
        }, 10000);
    }

    broadcastEvent(from, details) {
        const event = new EventMessage(from,details);
        this.receiveEvent(event);
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