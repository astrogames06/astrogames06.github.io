let star_btn = document.getElementById('star-btn');
let game_title = document.getElementById('game-title');
let favs = [];

document.addEventListener('DOMContentLoaded', function() {
    if (favs.includes(game_title.innerText))
    {
        star_btn.style.color = '#FFD43B';
    }
});

try {
    let storedData = localStorage.getItem('favourite_games');
    if (storedData) {
        favs = JSON.parse(storedData);
    }
} catch (error) {
    console.error('Error parsing favourite games:', error);

    localStorage.setItem('favourite_games', JSON.stringify(favs));
}

star_btn.addEventListener('click', () => {
    if (!favs.includes(game_title.innerText))
    {
        // alert(`Favourited: ${game_title.innerText}`)
        favs.push(game_title.innerText);
        star_btn.style.color = '#FFD43B';
    }
    else
    {
        // alert(`UnFavourited: ${game_title.innerText}`)
        favs.splice(favs.indexOf(game_title.innerText), 1);
        star_btn.style.color = 'white';
    }
    localStorage.setItem('favourite_games', JSON.stringify(favs));
});
