const global = {
    currentPage: window.location.pathname,
  };


//   fetch data from TMDB API
async function fetchAPIData(endpoint){
    const API_KEY = '0de5b1f9c4c7eb98173d9b4aa730d042';
}

// Highlight active link;
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      if (link.getAttribute('href') === global.currentPage) {
        link.classList.add('active');
      }
    });
  }

function init() {
    switch (global.currentPage) {
      case '/':
      case '/index.html':
        displaySlider();
        displayPopularMovies();
        break;
      case '/shows.html':
        displayPopularShows();
        break;
      case '/movie-details.html':
        displayMovieDetails();
        break;
      case '/tv-details.html':
        displayShowDetails();
        break;
      case '/search.html':
        search();
        break;
    }
  
    highlightActiveLink();
  }

  document.addEventListener('DOMContentLoaded', init);