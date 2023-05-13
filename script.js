// const home1 = document.getElementById('boxes');
// const home = document.getElementById('home');
// //movie api
// async function getMovie(){
//     try{
//         const response = await fetch('https://www.omdbapi.com/?s=batman&apikey=71868d6b');
//         var data = await response.json();
//         console.log(data);
        
//         renderList(data.Search);
//     }catch(err){
//         console.log(err);
//     }
// }
// getMovie();

// function addMovie(data){
//     console.log(data)
//     const movie = document.createElement('section');
//     movie.innerHTML = `
//     <img src="${data.Poster}" alt="movie" class="home-image">
//         <div class="home-text">
//             <h1 class="home-title">${data.Title}<br> true story</h1>
//             <p>Releasing on 10 may</p>
//             <a href="#" class="watch-btn">
//                 <i class="fa-solid fa-play"></i>
//                 <span>Watch the trailer</span>
//             </a>
//     </div>
// `;
//     home.appendChild(movie);
// }

// function renderList(data){
//     home.innerHTML = "";
//     for(let i=0;i<1;i++){
//         addMovie(data[i]);
//         console.log(i);
//     }
// }
// renderList();