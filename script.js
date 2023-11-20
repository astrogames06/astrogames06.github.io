document.addEventListener('DOMContentLoaded', function() {

document.getElementById('down').onclick = function (e) {
    smoothScroll('games');
};



function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    const targetPosition = targetSection.offsetTop;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}
let count = document.getElementById('games').getElementsByTagName("li").length;
document.getElementById('games-count').innerHTML = `${count-2} Games`

function myFunction() {
    const dropdown = document.getElementById('myInput');
    dropdown.classList.toggle('show');
}
});


function search()
{
    let myInput = document.getElementById('search-bar');
    let games = document.getElementById('games');

    games.querySelectorAll('li').forEach((listItem, index) => {

        console.log(listItem);
        if (listItem.textContent.toLowerCase().includes(myInput.value.toLowerCase()))
        {
            listItem.style.display = "inline-block";
        }
        else
        {
            listItem.style.display = "none";
        }
    });
}
