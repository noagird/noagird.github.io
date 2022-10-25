class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      nav {
        display: flex;
        background-color:  #242424;
        width: 100%;
        height: 75px;
        filter: drop-shadow(0px 5px 5px var(--accent-color) );
      }

      #navbar-links-list {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
      }

      #navbar-links-list > li {
        display: inline-block;
        padding: 50% 75px;
      }
      
      #navbar-links-list > li > a {
        float: left;
        font-weight: 700;
        color: var(--text-color);
        text-decoration: none;
      }
      
      #navbar-links-list > li > a:hover {
        transition: color 0.25s linear;
        color: var(--accent-color);
      }
    </style>
    <header>
      <nav>
        <ul id="navbar-links-list">
          <li><a id="home" href="./">Home</a></li>
          <li><a id="about-me" href="about-me">About Me</a></li>
          <a id="logo" href="./"><img src="Assets/Final_Logo-Solo-Edited.png" height="75px" style="margin: 0 50px; aspect-ratio: 1/1;"></a>
          <li><a id="projects" href="projects">Projects</a></li>
          <li><a id="resume" href="resume">Résumé</a></li>
        </ul>
      </nav>
    </header>
  `;
  }
}

customElements.define('navbar-component', NavBar);

let current = 0;
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href === document.URL && document.links[i].id !== "logo") {
    current = i;
  }
}
document.links[current].className = 'current';