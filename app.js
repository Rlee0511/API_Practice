const list=document.querySelector('#jokes');
const button = document.querySelector('button');



const getDadJoke = async ()=>{
    const config = {headers:{Accept:'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/',config);
    return res.data.joke;

}

const addNewJoke = async() =>{
    const joketext = await getDadJoke();
    const newLI =document.createElement('LI');
    newLI.append(joketext);
    list.append(newLI);

}

button.addEventListener('click', addNewJoke);