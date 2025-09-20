// const { response } = require("express");

function attachEventListeners() {
    let games_ul = document.getElementById('games-ul');
    if (!games_ul) {
        console.log("Games UL not found");
        return;
    }

    games_ul.querySelectorAll('li').forEach(game => {
        let img = game.querySelector('a img');
        let a = game.querySelector('a');
        let name = game.querySelector('p');

        game.addEventListener('click', (event) => {
            localStorage.setItem('game-title', name.innerText);
        });
    });
}

let observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            attachEventListeners();
            return;
        }
    }
});

if (window.location.pathname.endsWith('game.html')) {
    document.title = localStorage.getItem('game-title');

    let game_title = document.getElementById('game-title');
    let game_title_item = localStorage.getItem('game-title');
    game_title.innerText = game_title_item;
    let game_info = document.getElementById('game-info');
    game_info.innerText = localStorage.getItem('game-title');

    let game_icon = document.getElementById('game-icon');
    game_icon.src = `games/${game_title.innerText.split(' ').join('')}/icon.png`;


    let game_name = game_title.innerText.split(' ').join('');
    let embededGame = document.getElementById('embededGame');
    let canvas = document.getElementsByClassName("#canvas")[0];

    fetch('descrip.json')
        .then(response => response.json())
        .then(data => {
            let game = data.find(item => item.game_name === game_title_item);
            if (game) {
                console.log(game.description);
                let description_p = document.getElementById('description-p');
                description_p.innerText = game.description;
            } else {
                console.log("GAME NOT FOUND.")
                console.log(game_name);
                console.log("Game not found.");
            }
        })
        .catch(error => console.error("Error loading JSON:", error));

    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            let link = data.link;
            embededGame.src = `games/${game_name}/index.html`;
            embededGame.style.width = canvas.style.width;
            embededGame.style.height = canvas.style.height;
        });
};


let games_ul = document.getElementById('games-ul');
if (games_ul) {
    observer.observe(games_ul, { childList: true });
} else {
    console.log("Games UL not found");
}

attachEventListeners();
