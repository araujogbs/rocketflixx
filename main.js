import {
  API_KEY, BASE_URL,
  IMG_URL,
} from './api.js'

const result = document.querySelector('.result')

const poster = document.querySelector('#poster')
const filmtitle = document.querySelector('#title')
const description = document.querySelector('#description')
const switchbtn = document.querySelector('#switchBtn')

const imgerror = './assets/emojitriste.png'

switchbtn.addEventListener('click', async () => {

  

  const randomID = Math.floor(Math.random() * 500)
  const movie = await getMovie(randomID)

  renderMovie(movie)


  console.log(movie)
  


})

async function getMovie(randomID){

  const movie = await fetch(BASE_URL+randomID+'?'+API_KEY)
  const movieData = await movie.json()
  return movieData

}

function renderMovie(movieData){
  if(movieData.status_code == 34){
    poster.src = imgerror
    description.textContent = 'Desculpe, não existe um filme com esse ID no banco de dados'
    poster.style.width = '15vw'

  
  }else{
    poster.src = IMG_URL + movieData.poster_path
    description.textContent = movieData.overview
    
  }
  filmtitle.textContent = movieData.title
  result.style.display = 'flex'
  result.style.display = 'flex'

}

