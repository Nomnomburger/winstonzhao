class ProjectList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="row p-list-row g-0 aBorder p-list-row-first just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">The Drive Team Magazine</a><span class="p-list-date">Upcoming</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">A magazine all about the world of competitive robotics and STEM education</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#"></a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Elapse VRC App</a><span class="p-list-date">Upcoming</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Elapse, an app to make your life easier at VRC tournaments</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#"></a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Elapse App Design</a><span class="p-list-date">2023</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Designed Elapse, a feature packed app to help competitors at VRC events</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">VIEW</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">The Drive Team Podcast</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">A fun podcast about experiences in competitive robotics</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">LISTEN</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Team 25K Website</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Landing page website made for Team 25K</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">SOR Backyard Scrimmage Video</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Video highlighting the fun backyard robotics scrimmage at Silver Owl Robotics</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">WATCH</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">SOR22 Robot Reveal Video</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Cinematic video showcasing Silver Owl Robotics' 2022 robot</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">WATCH</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Chopocalypse Tour Website</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">A website for DJ Usaybflow’s tour</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">The Unionville Howl Website Design</a><span class="p-list-date">2021</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">A website design for Unionville High School’s digital newspaper</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">VIEW</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Winstonzhao.ca V1</a><span class="p-list-date">2021</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">The first version and design of my website</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Team 839 Website</a><span class="p-list-date">2021</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Caution Tape Robotics Team 839's website</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">VISIT</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Asymtry Logo & Branding</a><span class="p-list-date">2020</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Logo design and 3D art for a fun design collective</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">VIEW</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-md-6 small-bold p-list-title"><a href="#">Controller Deskmats</a><span class="p-list-date">2020</span></div>
      <div class="col-0 col-md-5 paragraph p-list-desc">Deskmat design based on Stadia Controller, previous group buy</div>
      <div class="col-2 col-md-1 small-bold p-list-btn"><a href="#">SHOP</a></div>
    </div>

    `;

  }
}

customElements.define('projects-list', ProjectList);