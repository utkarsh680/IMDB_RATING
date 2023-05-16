
const home = document.querySelector('.swiper-wrapper');
const hotMovies = document.getElementById('hot-movies');


// this is my url
const url = 'https://www.omdbapi.com/?s=';

// this is my api key
const key = '&apikey=71868d6b';

//movie api
async function getMovie(){
    try{
        const response = await fetch('https://www.omdbapi.com/?s=batman&apikey=71868d6b');
        var data = await response.json();
        console.log(data); 
        renderList(data.Search);
    }catch(err){
        console.log(err);
    }
}
getMovie();



function addMovie(data){
  
    const element = document.createElement('div');
    element.classList.add('swiper-slide');
    addCard(element,data);
    home.appendChild(element);
}

function addCard(element,data){
    element.innerHTML = `
    <div class="img-box">
        <img src="${data.Poster}" alt="">
        <div class="card-body">
            <h1 class="card-title">
                ${data.Title}
            </h1>
            <p class="card-sub-title">
                ${data.Year}
            </p>
            <p class="card-description">
                ${data.Type}
            </p>

        </div>
        
    </div>
    `;
}

// function hotMovies(){
//     fetch('https://www.omdbapi.com/?s=spiderman&apikey=71868d6b')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         renderList(data.Search);
//     }
//     )
//     .catch(err => console.log(err));    
// }


// function addHotMovie(){
//     const hotMovie = document.createElement('div');
//     hotMovie.classList.add('swiper-slide');
//     hotMovie.innerHTML = `
//     <div class="img-box">
//         <img src="${data.Poster}" alt="">
//         <div class="card-body">
//             <h1 class="card-title">
//                 ${data.Title}
//             </h1>
//             <p class="card-sub-title">
//                 ${data.Year}
//             </p>
//             <p class="card-description">
//                 ${data.Type}
//             </p>

//         </div>
        
//     </div>
//     `;
//     hotMovies.appendChild(hotMovie);
// }

function renderList(data){
    home.innerHTML = "";
    for(let i=0;i<data.length;i++){
        addMovie(data[i]);
        
    }
}
// renderList();


