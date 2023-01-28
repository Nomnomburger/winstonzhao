class ProjectList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="row p-list-row g-0 p-list-row-first">
        <div class="col-6 small-bold p-list-title"><a href="#">Adobe Audition</a><span class="p-list-date">Audio Production</span></div>
        <div class="col-5 paragraph">Learned about Adobe Audition in class</div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">The Drive Team Podcast</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">A fun podcast about experiences in competitive robotics</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">LISTEN</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">Team 25K Website</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">Landing page website made for Team 25K</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">Elapse App Design</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">Elapse, an app to make your life easier at VRC tournaments</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">VIEW</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">Chopocalypse Tour Website</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">A website for DJ Usaybflow’s tour</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">The Unionville Howl Website Design</a><span class="p-list-date">2021</span></div>
        <div class="col-5 paragraph">A website design for Unionville High School’s digital newspaper</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">VIEW</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">Winstonzhao.ca V1</a><span class="p-list-date">2021</span></div>
        <div class="col-5 paragraph">The first version and design of my website</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">Team 839 Website</a><span class="p-list-date">2021</span></div>
        <div class="col-5 paragraph">Caution Tape Robotics Team 839's website</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">Asymtry Logo & Branding</a><span class="p-list-date">2020</span></div>
        <div class="col-5 paragraph">Logo design and 3D art for a fun design collective</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">VIEW</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="#">Controller Deskmats</a><span class="p-list-date">2020</span></div>
        <div class="col-5 paragraph">Deskmat design based on Stadia Controller, previous group buy</div>
        <div class="col-1 small-bold p-list-btn"><a href="#">SHOP</a></div>
      </div>

    `;

  }
}

customElements.define('projects-list-home', ProjectList);