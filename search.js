function search() {
    var input = getURLParameter("search");
    if (input) {
        document.getElementById("search-bar").value = input;
        input = input.toLowerCase();
    } else {
        input = document.getElementById("search-bar").value.toLowerCase();
    }

    var cards = document.getElementsByClassName("game-url");
    var noResultsMessage = document.getElementById("no-results");
    var hasResults = false;

    const respectiveNote = document.getElementById("respective-note");

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector("h3").textContent.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "block";
            hasResults = true;
        } else {
            cards[i].style.display = "none";
        }
    }

    if (hasResults) {
        noResultsMessage.style.display = "none";
        respectiveNote.style.display = "block";
    } else {
        noResultsMessage.style.display = "block";
        respectiveNote.style.display = "none";
    }
}


document.getElementById("search-bar").addEventListener("input", search);
window.addEventListener("load", function() {
    search();
});


function getURLParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
