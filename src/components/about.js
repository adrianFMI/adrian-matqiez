import React from 'react';
const About = () => (
  <div className="container aboutcontainer">
    <div className="row">
      <div className="col-sm-4">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div className="fakeimg"><img src="https://via.placeholder.com/300" alt="sample"/></div>
        <p>Adrian Fernando Marquez</p>
        <h3>Find me</h3>
        <p>Social Nework</p>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/adrian-fernando-marquez/" target="_blank"><i class="fab fa-linkedin socialIcon"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/adrianFMI" target="_blank"><i class="fab fa-github socialIcon gitIcon"></i></a>
          </li>
        </ul>
        <hr className="d-sm-none"/>
      </div>
      <div className="col-sm-8">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg"><img src="https://via.placeholder.com/300x250" alt="sample"/></div>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <br/>
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div className="fakeimg"><img src="https://via.placeholder.com/300x250" alt="sample"/></div>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
  </div>
)
export default About;
