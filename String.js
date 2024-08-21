import { client } from './client.js';

async function init() {
    await client.set("name:5", "Ashu")
    const name = await client.get("name:5");
    console.log("Name is: ", name)
}
// init();

/*
    In redis we can also set the life of a key. After the time ends the key get destroyed.
*/
async function setLife() {
    // await client.expire("name:5", 5); // 5 is the time in seconds
    const name = await client.get("name:5");
    console.log("Name is: ", name)
    // After 5 seconds it will return 'null'
}

setLife();