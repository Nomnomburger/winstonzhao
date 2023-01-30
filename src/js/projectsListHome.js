class ProjectList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="row p-list-row g-0 p-list-row-first">
        <div class="col-6 small-bold p-list-title">Adobe Audition<span class="p-list-date">Audio Production</span></div>
        <div class="col-5 paragraph">Learned about Adobe Audition in class</div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="../portfolio/thedriveteampodcast.html">The Drive Team Podcast</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">A fun podcast about experiences in competitive robotics</div>
        <div class="col-1 small-bold p-list-btn"><a href="../portfolio/thedriveteampodcast.html">LISTEN</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://25k.team" target="_blank">Team 25K Website</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">Landing page website made for Team 25K</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://25k.team" target="_blank">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://www.figma.com/proto/a5RZujVSCMuWA9B4LQyVI4/Elapse-App?page-id=0%3A1&node-id=17%3A11&viewport=348%2C256%2C0.18&scaling=scale-down&starting-point-node-id=17%3A11" target="_blank">Elapse App Design</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">Elapse, an app to make your life easier at VRC tournaments</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://www.figma.com/proto/a5RZujVSCMuWA9B4LQyVI4/Elapse-App?page-id=0%3A1&node-id=17%3A11&viewport=348%2C256%2C0.18&scaling=scale-down&starting-point-node-id=17%3A11" target="_blank">VIEW</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://youtu.be/jNJzbm1Zd14" target="_blank">SOR Backyard Scrimmage Video</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">Video highlighting the fun backyard robotics scrimmage at Silver Owl Robotics</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://youtu.be/jNJzbm1Zd14" target="_blank">WATCH</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://youtu.be/ktJ5cc93fWk" target="_blank">SOR22 Robot Reveal Video</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">Cinematic video showcasing Silver Owl Robotics' 2022 robot</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://youtu.be/ktJ5cc93fWk" target="_blank">WATCH</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="http://www.chopocalypsetour.com/" target="_blank">Chopocalypse Tour Website</a><span class="p-list-date">2022</span></div>
        <div class="col-5 paragraph">A website for DJ Usaybflow’s tour</div>
        <div class="col-1 small-bold p-list-btn"><a href="http://www.chopocalypsetour.com/" target="_blank">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://www.figma.com/proto/uZQaR5G7IwW6194IieCEeY/UHS-Howl-Website?page-id=0%3A1&node-id=2%3A2&viewport=735%2C226%2C0.13&scaling=min-zoom&starting-point-node-id=2%3A2&show-proto-sidebar=1" target="_blank">The Unionville Howl Website Design</a><span class="p-list-date">2021</span></div>
        <div class="col-5 paragraph">A website design for Unionville High School’s digital newspaper</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://www.figma.com/proto/uZQaR5G7IwW6194IieCEeY/UHS-Howl-Website?page-id=0%3A1&node-id=2%3A2&viewport=735%2C226%2C0.13&scaling=min-zoom&starting-point-node-id=2%3A2&show-proto-sidebar=1" target="_blank">VIEW</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://youtu.be/GgcoKS5ap2g" target="_blank">Winter In Toronto</a><span class="p-list-date">2021</span></div>
        <div class="col-5 paragraph">Cinematic video of downtown Toronto in the winter</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://youtu.be/GgcoKS5ap2g" target="_blank">WATCH</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://www.winstonzhao.ca" target="_blank">Winstonzhao.ca V1</a><span class="p-list-date">2021</span></div>
        <div class="col-5 paragraph">The first version and design of my website</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://www.winstonzhao.ca" target="_blank">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://www.839.team" target="_blank">Team 839 Website</a><span class="p-list-date">2021</span></div>
        <div class="col-5 paragraph">Caution Tape Robotics Team 839's website</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://www.839.team" target="_blank">VISIT</a></div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title">Asymtry Logo & Branding<span class="p-list-date">2020</span></div>
        <div class="col-5 paragraph">Logo design and 3D art for a fun design collective</div>
      </div>
      <div class="row p-list-row g-0">
        <div class="col-6 small-bold p-list-title"><a href="https://thekey.company/products/controller-series-deskmat?_pos=3&_sid=2b62b683f&_ss=r" target="_blank">Controller Deskmats</a><span class="p-list-date">2020</span></div>
        <div class="col-5 paragraph">Deskmat design based on Stadia Controller, previous group buy</div>
        <div class="col-1 small-bold p-list-btn"><a href="https://thekey.company/products/controller-series-deskmat?_pos=3&_sid=2b62b683f&_ss=r" target="_blank">SHOP</a></div>
      </div>

    `;

  }
}

customElements.define('projects-list-home', ProjectList);