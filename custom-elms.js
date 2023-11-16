document.addEventListener('DOMContentLoaded', function() {

class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        console.log('MyCustomElement constructor');

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <script src="https://kit.fontawesome.com/7d33d53aa9.js" crossorigin="anonymous"></script>
        <script src="script.js"></script>
        <link rel="stylesheet" href="../../style.css">
        <div style="
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 100;
        ">
        <div id="navbar" style="position: fixed;">
            <a href="../../index.html" id="home-btn">Home</a>
            <div class="dropdown">
                <button class="dropbtn">Categories
                    <img style="width: 10px; margin-left:5px;" src="../../caret-down.svg" alt="down">
                </button>
                <button id="secret-btn"><a href="../../secret.html">???</a></button>
                <div class="dropdown-content" style="
                    position: fixed; 
                    right: 130px;
                ">
                  <a href="../../TopGames.html">Top Games 🔥</a>
                  <a href="../../2PlrGames.html">2 Player 👥</a>
                  <a href="../../RetroGames.html">Retro Games 🍄</a>
                  <a href="../../IoGames.html">Io Games 🎮</a>
                  <a href="../../FlashGames.html">Flash Games ⚡</a>
                  <a href="../../SportsGames.html">Sports Games ⚽</a>
                  <a href="../../MyFavs.html">My Favourites 👍</a>
                </div>
              </div>
              
              <a style="margin-right: 50px;" href="https://github.com/AstroGames08/astrogames08.github.io">
                <img style="width:30px;"
                src="../../github.svg">
              </a>

            
        <p style="
            color: white;
            position: fixed;
            top: 0;
            margin-left: 50px;
            line-height: 50px;
            font-family: 'Comfortaa', sans-serif;
            left: 0;
        " id="water-mark">Astro Games</p>
        <img src="../../astro.jpg" alt="astro" style="width: 50px; position: fixed; top: 0; left: 0;">
        </div>
        `;
    }
}
customElements.define('nav-bar', MyCustomElement);

class MyCustomElementAd extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2939348888494004"
        crossorigin="anonymous"></script>
        <!-- sides of games -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-2939348888494004"
            data-ad-slot="1518187149"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        `;
    }
}
customElements.define('ad-elm', MyCustomElementAd);

class MyCustomElementTerms extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="legal/legal.css">
        <script src="https://kit.fontawesome.com/7d33d53aa9.js" crossorigin="anonymous"></script>
        <footer>
        <div class="footer-content">
          <p>
            &copy; 2023 Astro-Games, <br />
            Made with <i class="fa-solid fa-heart" id="red-filler" style="color: red;"></i> by our
            amazing community! <br /><br />
            <a href="/">Back Home <i class="fa-solid fa-arrow-right-from-bracket"></i></i></a>
          </p>
        </div>
      </footer>
        `;
    }
}
customElements.define('terms-elm', MyCustomElementTerms);

class MyCustomElementOpt extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <script src="https://kit.fontawesome.com/7d33d53aa9.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../../style.css">
        <center>
        <div style="
            background: rgb(41, 41, 41);
            width: 80%;
            height: 35px;
            border-radius: 5px;
            margin-bottom: 5px;
            align-items: center;
            display: flex;
        "><img onclick="goFullscreen('embededGame'); return false"  id="fullscreen-btn" style="
            float: right;
            color: white;
            font-size: 25px;
            margin-right: 25px;
            top:50%;
            margin-left: 90%;
            filter: invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%);
            width: 20px;
        " src="../../icons/expand.svg"></div>
        <terms-elm></terms-elm>
        </center>
        `;
    }
}
customElements.define('opt-elm', MyCustomElementOpt);

class MyCustomElementHome extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../../style.css">
        <a href="../../index.html" style="
            color: rgb(0, 0, 0);
            text-decoration: none;
            width: 300px;
            height: 50px;
        ">
        <center><button style="
            color: rgb(0, 0, 0);
            background-color: rgb(255, 255, 255);
            border: none;
            border-radius: 5px;
            width: 300px;
            height: 50px;
            font-size: large;
            font-family: 'Comfortaa', sans-serif;
            margin-top: 50px;
            margin-bottom: 100px;
        " id="home-btn">
        Home
        </button></center>
        </a>
        `;
    }
}
customElements.define('home-btn', MyCustomElementHome);

});
