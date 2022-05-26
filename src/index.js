const messages = [
    "Mateo",
    "Carlos",
    "Andres",
    "Diego",
    "Luis",
    "Juan",
    "Pedro"
];

const randowMsg = () => {
    const message =  messages[Math.floor(Math.random() * 
        messages.length)];
        console.log(message);
}

module.exports = { randowMsg };