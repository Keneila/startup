# CS 260 Notes
### What is the default port for HTTP/HTTPS/SSH? 

HTTP: 80

HTTPS: 442

SSH: 22

### What does an HTTP status code in the range of 300/400/500 indicate?

"Redirection messages": 300s

Client error responses: 400s

Server error responses: 500s

"Successful responses": 200s

### What does the HTTP header content-type allow you to do?
The content type of the request body
### What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

What does the "Authorization" header in a HTTP request represent?

The credentials of user authentication

The HTTPOnly flag on cookies prevents a client browser from reading or writing a cookie.

The SameSite attribute lets servers specify whether/when cookies are sent with cross-site requests — i.e., third-party cookies. 

__Secure-: Cookies with names starting with __Secure- must be set with the Secure attribute by a secure page (HTTPS).

### Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?'

A middleware function looks very similar to a routing function. That is because routing functions are also middleware functions. The only difference is that routing functions are only called if the associated pattern matches. Middleware functions are always called for every HTTP request unless a preceding middleware function does not call next. A middleware function has the following pattern:
```js
function middlewareName(req, res, next)
```
Remember that the order that you add your middleware to the Express app object controls the order that the middleware functions are called. Any middleware that does not call the next function after doing its processing, stops the middleware chain from continuing.

### Given the following Express service code: What does the following front end JavaScript that performs a fetch return?

### Given the following MongoDB query, select all of the matching documents {name:Mark}

```
{ username: /.*cs260.*/ }
```
Which MongoDB query would find all JSON objects with either a "score" above 100 OR a "username" value of "hacker"?
```
{ $or: [(score: { $gt: 100 }), (username:"hacker")] }
```
Which MongoDB query would find all JSON objects with a "score" value less than 25?
```
{ score: { $lt: 25 } }
```
Which MongoDB query would find all JSON objects with a "username" value of "cosmo25"?
```
{ username: "cosmo25" }
```
### How should user passwords be stored?
User passwords should be sent over HTTPS, be hashed in the database, be salted
### Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?

### What is the websocket protocol intended to provide?

The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API. Assuming the browser is addressing an appropriate host and port (e.g., localhost:9900), first you create a WebSocket object: the first line below queries the browser to determine which protocol is being used (http or https) and selects the appropriate websocket upgrade (unsecure or secure, respectively); the second line creates the WebSocket object, using the selected protocol and the hostname and port currently being used by the browser:

The server uses the ws package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.


### What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM

NVM: Node Version Manager

DOM: Document Object Model

JS: JavaScript

JSX: JavaScript XML

AWS: Amazon Web Services

NPM: Node Package Manager

### Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.

### Given a set of React components that include each other, what will be generated

One of the primary purposes of a component is to generate the user interface. This is done with the JSX returned from a component. Whatever is returned, inserted into the component HTML element.

```js
const hello = <div>Hello</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(hello);
```
```html
<div>Hello</div>
```

```js
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```
```html
<div>Component: <b>Hello world</b></div>
```

The following example creates a state variable called clicked and toggles the click state in the updateClicked function that gets called when the paragraph text is clicked.

```js
function App() {
  const [clicked, updateClicked] = React.useState(false);

  function onClicked() {
    updateClicked(!clicked);
  }

  return <p onClick={onClicked}>clicked: {`${clicked}`}</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
A component's properties and state are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.

### What does a React component with React.useState do?
What is the "useState" React component used for?
Allowing React components to declare variables, update variables, and to trigger re-renders when the variable is updated

### What are React Hooks used for?
What is the "useEffect" React component used for?
Allowing React components to run code after a page finishes rendering or after a specific React state is updated

### What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

To add state to a component, use one of these Hooks:

useState declares a state variable that you can update directly.

useReducer declares a state variable with the update logic inside a reducer function.


Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

useContext reads and subscribes to a context.

Ref Hooks 

Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.

useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.

Effect Hooks 

Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

useEffect connects a component to an external system.


Performance Hooks 
A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

To skip calculations and unnecessary re-rendering, use one of these Hooks:

useMemo lets you cache the result of an expensive calculation.
useCallback lets you cache a function definition before passing it down to an optimized component.


### Given React Router code, select statements that are true.

A basic implementation of the router consists of a BrowserRouter component that encapsulates the entire application and controls the routing action. The Link, or NavLink, component captures user navigation events and modifies what is rendered by the Routes component by matching up the to and path attributes. The example contains two components. The App component with the router and a Page component that is routed to when a link is pressed.

```js
function Page({ color }) {
  return (
    <div className="page" style={{ backgroundColor: color }}>
      <h1>{color}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/">Red</NavLink>
          <NavLink to="/green">Green</NavLink>
          <NavLink to="/blue">Blue</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Page color="red" />} exact />
            <Route path="/green" element={<Page color="green" />} />
            <Route path="/blue" element={<Page color="blue" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### What does the package.json file do?
Your project configuration file, defining project name, version, and package dependencies

### What does the fetch function do?

### What does node.js do?
Runs JavaScript code outside of an internet browser

### What does pm2 do?
A daemon that handles running your deployed server

### What does Vite do?
Allows debugging web framework applications and bundling them for deployment

What does a "vite.config.js" file do?
Lists configurations for debugging and building with Vite






Trivia API
URL: https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple
### In the following code, what does the link element do?
It links an external resource (usually a CSS file) to the HTML document. Example: 
```html      
<link rel="stylesheet" href="styles.css">
```
applies styles from styles.css to the page.

### In the following code, what does a div tag do?
A &lt;div&gt; is a block-level container that groups other elements. It's used for structure and layout.
Examples (use in layouts):
&lt;div class="header"&gt; ... &lt;/div&gt;
&lt;div class="content"&gt; ... &lt;/div&gt;
Divs have default display:block and take full width. They don't add behavior by themselves.

'div' is a container element used to group other HTML elements together. It has no visual
effect by itself, but helps structure the page for styling and layout using CSS. Commonly used
for sections, wrappers, and layout blocks.
      
      <div>
             <p>This is inside a div</p>
      </div>
      
In this example, the paragraph is grouped inside a div, which can be styled or positioned together

### In the following code, what is the difference between the #title and .grid selector?
#title selects an element by ID (unique). .grid selects elements by class (can apply to multiple elements).

### In the following code, what is the difference between padding and margin?
Padding: space inside the element (between content and border). Margin: space outside the element (between
border and other elements).

### Given this HTML and this CSS how will the images be displayed using flex?
If the container uses display: flex;, the images will be displayed in a row by default, side by side, unless
flex-direction: column; is specified.

### What does the following padding CSS do?
Example: padding: 10px 20px; adds 10px top/bottom and 20px left/right inside the element.
```html
div {
 padding: 20px;
}
```
This adds 20 pixels of space inside the div, between its content and its border. Padding increases the
internal spacing, unlike margin which affects the space outside the element.

### What does the following code using arrow syntax function declaration do?
Arrow functions are a compact function syntax. (a, b) => a + b means a function with parameters a and b that
returns a+b.
Examples:
```js
const add = (a, b) => a + b;
const greet = name => `Hi ${name}`;
const square = x => { return x * x; } // block form
```
Note: arrow functions do not bind their own 'this' and are not suitable as constructors.
```js
const greet = (name) => {
 return 'Hello, ' + name;
}
console.log(greet('Amur'));
```
This defines an arrow function named greet that takes one argument name and returns a greeting
string.
```js
const square = x => x * x;
console.log(square(5));
```
Here, square takes a number and returns its square. The arrow syntax allows concise one-line
functions.
```js
const add = (a, b) => a + b;
console.log(add(2, 3));
```
This function takes two arguments and returns their sum. Arrow functions are common in modern JS,
especially with array methods.

### What does the following code using map with an array output?
map() transforms every element of an array and returns a new array without mutating the original.
```js
Examples:
const nums = [1,2,3];
const doubled = nums.map(n => n * 2); // [2,4,6]
const names = ['Amy','Bob'];
const greetings = names.map(n => `Hi ${n}`); // ['Hi Amy','Hi Bob']
```
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
```
Output: [2, 4, 6] — The map() function applies a transformation to each element, returning a new array.
```js
const students = [{name: 'Amy'}, {name: 'Ben'}];
const names = students.map(s => s.name);
console.log(names);
```
Output: ['Amy', 'Ben'] — This extracts the 'name' property from each object. Map doesn't change the
original array.

### What does the following code output using getElementByID and addEventListener?
Typical pattern:
const btn = document.getElementById('btn');
btn.addEventListener('click', () => console.log('Clicked!'));
Behavior: When user clicks the element with id 'btn', the callback runs and prints 'Clicked!'.
```js
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
 alert('Button clicked!');
});
```
getElementById() selects the HTML element with the specified id. addEventListener() waits for an event
(like a click) and runs the provided function when triggered. It doesn’t execute immediately—it listens
for the event.
```js
const input = document.getElementById('username');
input.addEventListener('change', () => {
 console.log('Input changed');
});
```
Listens for a change in an input field and logs a message when the value changes.
```js
const form = document.getElementById('loginForm');
form.addEventListener('submit', e => {
 e.preventDefault();
 console.log('Form submitted');
});
```
Prevents form refresh on submit and handles the event using JS.
```js
const heading = document.getElementById('title');
heading.style.color = 'green';
```
This example changes the text color of an element with id='title' to green.

### What does the following line of Javascript do using a # selector?
document.querySelector('#title') selects the first element that matches the CSS selector #title (elemequerySelector accepts any CSS selector (classes, attributes, pseudos).

### Which of the following are true? (mark all that are true about the DOM)
The DOM represents the HTML document as a tree of objects. You can use JavaScript to access and modify
DOM elements. Each HTML element is a node in the DOM.
By default, the HTML span element has a default CSS display property value of:
inline

### How would you use CSS to change all the div elements to have a background color of red?
```html
div { background-color: red; }
```

### How would you display an image with a hyperlink in HTML?
Wrap the &lt;img&gt; element with an &lt;a&gt; tag. Ensure the image file is in the correct folder (public or
images/) and the src path points to it.
Example:
&lt;a href="https://example.com"&gt;
 &lt;img src="images/logo.png" alt="Logo"&gt;
&lt;/a&gt;
Folder scheme example:
project/
 index.html
 images/
 logo.png
 css/
 styles.css
If using a framework, the image may need to be in a 'public' or 'static' folder so it is served directly.

```html
<a href="https://www.example.com">
 <img src="images/photo.jpg" alt="Example image">
</a>
```
This code wraps an image inside a hyperlink. Clicking the image takes the user to the linked page.
Your folder structure could look like this:
```
project-folder/
■■■ index.html
■■■ images/
■ ■■■ photo.jpg
```
You can also use an external image URL:
```html
<a href="https://openai.com">
 <img src="https://example.com/image.png" alt="External image">
</a>
```

### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Order: Content -> Padding -> Border -> Margin

Diagram:
```
+----------------+
| Margin |
| +------------+ |
| | Border | |
| | +--------+ | |
| | |Padding | | |
| | |Content | | |
| | +--------+ | |
| +------------+ |
+----------------+
```
Padding increases size inside border; margin creates space between elements.

### Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
Given 
```html
<p><span class="trouble">trouble</span> double</p>
```
use
```html
.trouble { color: green; }
```

### What will the following code output when executed using a for loop and console.log?
```js
for (let i = 0; i < 3; i++) { console.log(i); }
```
This initializes i=0, checks i<3 each loop, runs body and increments i++ after each iteration. Output 

### How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
Option 1 (direct):
```js
document.getElementById('byu').style.color = 'green';
```
Option 2 (variable):
```js
const byu = document.getElementById('byu');
byu.style.color = 'green';
```
Explanation: getElementById returns the DOM element. Assigning to variable avoids querying repeatedly.

### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Paragraph: &lt;p&gt;,
Ordered list: &lt;ol&gt;,
Unordered list: &lt;ul&gt;,
h2: &lt;h2&gt;, h1: &lt;h1&gt;, h3: &lt;h3&gt;

### How do you declare the document type to be html?
```
<!DOCTYPE html>
```

### What is valid javascript syntax for if, else, for, while, switch statements?
```
if (x > 5) { ... }
else { ... }
for (...) { ... }
while (...) { ... }
switch (x) { case 1: ...; break; default: ... }
```
### What is the correct syntax for creating a javascript object?
```
const person = { name: "John", age: 30 };
```
### Is it possible to add new properties to javascript objects?
Yes. Example: 
```
person.city = "Provo";
```
#### If you want to include JavaScript on an HTML page, which tag do you use?
```
<script src="script.js"></script>
```
### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
HTML:
```
<p id="animal">animal</p>
<p id="fish">fish</p>
```
Option 1 (direct):
```
document.getElementById('animal').textContent = 'crow';
```
Option 2 (variable):
```
const animal = document.getElementById('animal');
animal.textContent = 'crow';
```
Both work; second is clearer if reusing element.

### Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs. Example: 
```
{"name": "John", "age": 25 }
```
### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
chmod - change permissions

pwd - print working directory,

cd - change directory,

ls - list files,

vim/nano - text editors,

mkdir - make directory,

mv - move/rename,

rm - remove,

man - manual,

ssh - remote shell,

ps -processes,

wget - download files,

sudo - run as admin

### Which of the following console command creates a remote shell session?
ssh

To remotely enter startup server: ssh -i path/to/your/key.pem ubuntu@domainname.click

### Which of the following is true when the -la parameter is specified for the ls console command?
ls -la lists all files (including hidden) in long format

### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
TLD: .click,
root domain: bozo.click,
subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested
subdomain)

### Is a web certificate is necessary to use HTTPS?
Yes, HTTPS requires a valid SSL/TLS certificate.

### Can a DNS A record can point to an IP address or another A record.
A DNS A record points to an IP address; it should not point to another A record.

### Port 443, 80, 22 is reserved for which protocol?
443 -> HTTPS, 
80 -> HTTP, 
22 -> SSH

### What will the following code using Promises output when executed?
Many possibilities depending on promise behavior. Examples:
```
1) Promise.resolve('Done').then(console.log) -> 'Done'
2) Promise.reject('Error').catch(console.error) -> 'Error'
3) new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
4) Async function returns value -> printed when awaited or .then
5) Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5
6) Reject handled -> shows error via catch.
```


Destructuring:
```html
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```
Use in React
```js
function Clicker({ initialCount }) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker initialCount={3} />);
```
Javascript type and construct

Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.
```js
let x = 1;

const y = 2;
```
| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name-value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key-value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

You can also use the ternary operator. This provides a compact `if else` representation.

```js
a === 1 ? console.log(1) : console.log('not 1');
```
The following two invocations of sort are equivalent.

```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```

```js
function App() {
  const [count, setCount] = React.useState(0);

  function counterOpFactory(op) {
    return () => setCount((prevCount) => op(prevCount));
  }

  const incOp = counterOpFactory((c) => c + 1);
  const decOp = counterOpFactory((c) => c - 1);
  const tenXOp = counterOpFactory((c) => c * 10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incOp}>n++</button>
      <button onClick={decOp}>n--</button>
      <button onClick={tenXOp}>n*10</button>
    </div>
  );
}
```

The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => i < 1)`          |

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also in a for loop outside the promise so that both code blocks are running in parallel.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```
Coin Toss Promise - then, catch, finally
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});


coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```
async, try/catch version
```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

```
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```

Making the UI react to changes in user input or data, is one of the architectural foundations of React. React enables reactivity with three major pieces of a React component: props, state, and render.

React keeps a table of state values for every component. React records requested state in the table whenever a updateState method is called. Then periodically, React will rerender every component that has had a change since the last render occurred. Be careful about your assumptions of when state is updated. Just because you called updateState does not mean that you can access the updated state on the next line of code. Updates happen asynchronously, and therefore you never really know when it is going to happen. You only know that it will eventually happen.


### JSON
```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

Exercise 1:
```js
// how to get a form from the html file
const form = document.getElementById('emailForm')
// how to get a message from html file
const message = document.getElementById('message')

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value;
  if (email.includes('@')){
    message.textContent = "Eamil accepted";
    message.style.color = 'green'
  }
  else{
    // how to set a message to "Please, enter valid email"
      message.textContent = "Please, enter valid email"
    // how to get a red color to the message
      message.style.color = 'red'
  }
  
})
```
ex 2
```html

<!-- how to set up html file -->
<!DOCTYPE html>
<html lang="en">
    <!-- put head here -->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Click Counter</title>
        <!-- how to make a link to the style.css -->
        <link rel="stylesheet" href="style.css">
    <!-- put head here -->
    </head>
    <body>
        <!-- how to make a form with id counterForm-->
        <form type="click" id="counterForm">
            <p id="number">0</p>
            <button type="button" id="plus">+</button>
            <button type="button" id="minus">-</button>
            <button type="button" id="minus5">-5</button>
            <!-- make +5 button -->
            <button type="button" id="plus5">+5</button>
        <!-- form goes here -->
        </form>
        <!-- how to initilize javascript file here -->
        <script src="counter.js"></script>
    </body>
<!-- how to set up html -->
</html>
```
ex 3 css 
```html

body{
    font-family:Arial, Helvetica, sans-serif;
    padding: 5%;
}

select {
  background-color: yellowgreen; /* changes the box color */
  color: black;                /* keeps the text readable */
  border: 1px solid gray;      /* optional: makes it look nicer */
  padding: 5px;
  border-radius: 5px;
}
select:focus {
  background-color: skyblue;
}
```

## Dont want to delete any of this yet and am leaving it at the end of my notes for now
[My startup - Simon](https://simon.cs260.click)
## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 174.129.219.132
Launching my AMI I was able to visit the page without issues, and created an elastic IP.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
