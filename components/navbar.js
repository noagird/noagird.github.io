class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav>
        <ul id="navbar-links-list">
          <li><a id="home" href="./">Demo Reel</a></li>
          <li><a id="about-me" href="about">About</a></li>
          <a id="logo" href="./"><img src="Assets/Final_Logo-Solo-Edited.png" height="75px" style="aspect-ratio: 1/1;"></a>
          <li><a id="projects" href="projects">Projects</a></li>
          <li><a id="resume" href="resume">Resume</a></li>
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