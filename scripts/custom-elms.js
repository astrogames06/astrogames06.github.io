document.addEventListener('DOMContentLoaded', function() {

    class MyCustomElement extends HTMLElement {
        constructor() {
            super();
            console.log('MyCustomElement constructor');

            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = `
        <script src="https://kit.fontawesome.com/7d33d53aa9.js" crossorigin="anonymous"></script>
        <script src="script.js"></script>
        <link rel="stylesheet" href="../style.css">

        <div style="
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 100;
        ">
        <div id="navbar" style="position: fixed;">
            <a href="../../games.html" id="home-btn">Home <i class="fa-solid fa-house"></i></a>
            <a href="../pages/Support.html" id="support-btn">Support Us! <i class="fa-solid fa-heart" style="color: #ff00bb;"></i></a>
            <div class="dropdown">
                <button id="dropbtn" class="dropbtn">Categories
                    <img style="width: 10px; margin-left:5px;" id="caret" src="../../icons/caret-down.svg" alt="down">
                </button>
                <button id="secret-btn">Support Us!<a href="../../secret.html">???</a></button>

                <div id="dropdown-content" class="dropdown-content" style="
                    position: fixed; 
                    right: 130px;
                    color: white;
                ">
                  <a href="../../categories/TopGames.html">Top Games 
                    <i class="fa-solid fa-fire fa-lg" style="color: #74C0FC;"></i>
                  </a>
                  <a href="../../categories/2PlrGames.html">2 Player 
                  <i class="fa-solid fa-person fa-xl" style="color: #B197FC;"></i>
                  <i class="fa-solid fa-person fa-xl" style="color: #B197FC;"></i>
                  </a>
                  <a href="../../categories/RetroGames.html">Retro Games <i class="fa-solid fa-ghost"></i></a>
                  <a href="../../categories/IoGames.html">Io Games <i class="fa-solid fa-gamepad" style="color: #63E6BE;"></i></a>
                  <a href="../../categories/FlashGames.html">Flash Games <i class="fa-solid fa-bolt" style="color: #FFD43B;"></i></a>
                  <a href="../../categories/SportsGames.html">Sports <i class="fa-solid fa-futbol"></i></a>
                  <a href="../../categories/Favourites.html">Favourites <i class="fa-solid fa-star fa" style="color:#FFD43B;"></i></a>
                </div>
              </div>
              
              <a style="margin-right: 50px;" href="https://github.com/AstroGames08/astrogames08.github.io">
                <img style="width:30px;"
                src="../icons/github.svg">
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
        <link rel="stylesheet" href="../style.css">
        <link rel="stylesheet" href="../legal/legal.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://kit.fontawesome.com/7d33d53aa9.js" crossorigin="anonymous"></script>

        <div class="footer-content">
          <p>
            &copy; 2025 Astro-Games, <br />
            Made with <i class="fa-solid fa-heart" id="red-filler" style="color: red;"></i> by our
                amazing community! <br /><br />
            <a href="../../legal/privacy.html">Privacy Policy <i class="fa-solid fa-arrow-right-from-bracket"></i></i></a>
            <a href="../pages/contact.html">Contact <i class="fa-solid fa-arrow-right-from-bracket"></i></i></a>
            <br>
            <a href="../../legal/terms-of-service.html">Terms Of Service <i class="fa-solid fa-arrow-right-from-bracket"></i></i></a>
            <a href="../pages/about.html">About <i class="fa-solid fa-arrow-right-from-bracket"></i></i></a>
            <br>
            <br>
            <a href="../../games.html">Back Home <i class="fa-solid fa-arrow-right-from-bracket"></i></i></a>
          </p>
        </div>

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
            width: 1080px;
            height: 50px;
            border-radius: 0px 0px 15px 15px;
            margin-bottom: 5px;
            align-items: center;
            display: flex;
        "><i class="fa-solid fa-expand" onclick="goFullscreen('embededGame'); return false"  
            id="fullscreen-btn" style="
            float: right;
            color: white;
            font-size: 25px;
            margin-right: 25px;
            top:50%;
            margin-left: 90%;
            filter: invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%);
            width: 20px;
        " src="../../icons/expand.svg"></i></div>
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
        <a href="../../games.html" style="
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
