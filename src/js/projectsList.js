class ProjectList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="row p-list-row g-0 aBorder p-list-row-first just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/elapsedesign.html">Elapse App Design</a><span class="p-list-date">2023</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Designed Elapse, a feature packed app to help competitors at VRC events</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/elapsedesign.html">VIEW</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/robotics.html">Competitive Robotics</a><span class="p-list-date">2023</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Participated in FLL and VRC over five years</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/robotics.html">READ</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/thedriveteampodcast.html">The Drive Team Podcast</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">A fun podcast about experiences in competitive robotics</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/thedriveteampodcast.html">LISTEN</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/25kteam.html">Team 25K Website</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Landing page website made for Team 25K</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/25kteam.html">VISIT</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/sorbackyardscrimmage.html">SOR Backyard Scrimmage Video</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Video highlighting the fun backyard scrimmage at Silver Owl Robotics</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/sorbackyardscrimmage.html">WATCH</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/sorreveal.html">SOR22 Robot Reveal Video</a><span class="p-list-date">2022</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Cinematic video showcasing Silver Owl Robotics' 2022 robot</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/sorreveal.html">WATCH</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/unionvillehowl.html">The Unionville Howl Website Design</a><span class="p-list-date">2021</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">A website design for Unionville High School’s digital newspaper</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/unionvillehowl.html">VIEW</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/winstonzhaov1.html">Winstonzhao.ca V1</a><span class="p-list-date">2021</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">The first version and design of my website</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/winstonzhaov1.html">VISIT</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/839team.html">Team 839 Website</a><span class="p-list-date">2021</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Caution Tape Robotics Team 839's website</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/839team.html">VISIT</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/asymtry.html">Asymtry Logo & Branding</a><span class="p-list-date">2020</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Logo design and 3D art for a fun design collective</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/asymtry.html">VIEW</a></div>
    </div>
    <div class="row p-list-row g-0 aBorder just-fade">
      <div class="col-10 col-xl-6 col-lg-5 small-bold p-list-title"><a href="../portfolio/controllerdeskmats.html">Controller Deskmats</a><span class="p-list-date">2020</span></div>
      <div class="col-0 col-xl-5 col-lg-6 paragraph p-list-desc">Deskmat design based on Stadia Controller, previous group buy</div>
      <div class="col-2 col-lg-1 small-bold p-list-btn"><a href="../portfolio/controllerdeskmats.html">SHOP</a></div>
    </div>

    `;

  }
}

customElements.define('projects-list', ProjectList);