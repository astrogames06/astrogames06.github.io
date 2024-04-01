document.addEventListener('DOMContentLoaded', function () {
    let games_ul = document.getElementById('games-ul');

    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            let link = data.link;
            data.games.forEach(game => {
                let game_name = game.split(' ').join('');
                let game_li = document.createElement('li');
                let game_a = document.createElement('a');
                game_a.href = '../game.html';

                let game_img = document.createElement('img');
                game_img.src = `games/${game_name}/icon.png`;
                game_img.alt = `${game}`;

                game_a.appendChild(game_img);
                game_li.appendChild(game_a);
                game_li.appendChild(document.createElement('br'));

                let p = document.createElement('p');
                p.innerText = `${game}`;
                game_li.appendChild(p);

                games_ul.appendChild(game_li);
            });
        })
        .catch(error => {
            console.error('Error fetching games:', error);
        });
});
