/* 
function fetchJoke(){
fetch('http://icanhazdadjoke.com', {
  method: 'GET', // or 'PUT'
  headers: {
    Accept: 'application/json',
  },
})
.then(response => response.json())
.then(data => {
  joke.innerText = data.joke
})
} */

async function fetchJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('http://icanhazdadjoke.com', config)

    const data = await res.json()

    joke.innerText = data.joke
}

fetchJoke()

jokeBtn.addEventListener('click',()=>{
    fetchJoke()
})