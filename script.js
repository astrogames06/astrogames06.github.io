document.getElementById('down').onclick = function(e) {
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