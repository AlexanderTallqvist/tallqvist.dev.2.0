
export async function generateMetadata() {
  return {
    title: "Alexander Tallqvist",
    description: "Alexander Tallqvist page.",
  };
}

export default async function Home() {
  return (
    <>
      <header className="header">
        <div id="particles-js"></div>
        <nav className="navigation">
          <div className="logo">Tallqvist.dev</div>
          <ul className="link-container">
            <li className="link"><a target="_blank" href="https://www.linkedin.com/in/alexandertallqvist/">LinkedIn</a>
            </li>
            <li className="link"><a target="_blank" href="https://github.com/AlexanderTallqvist">GitHub</a></li>
            <li className="link"><a target="_blank" href="https://www.drupal.org/u/alexander-tallqvist">Drupal</a></li>
            <li className="link"><a target="_blank" href="files/alexander_tallqvist_cv.pdf">Resume</a></li>
          </ul>
        </nav>

        <div className="content">
          <div className="text">Alexander Tallqvist</div>
          <div className="typewriter" id="typewriter"></div>
        </div>

        <div className="more">
          <p>Read more about me</p>
          <span className="icon"></span>
        </div>
      </header>

      <main className="main-content">
        <div className="content">
          <article className="column skills">
            <h2>Skills</h2>
            <div className="skills-container">
              <div className="skills-left">
                <h3>5+ Years of Experience:</h3>
                <div className="skill"><span>CMS:</span> Drupal 7, 8 and 9</div>
                <div className="skill"><span>Back-end:</span> PHP</div>
                <div className="skill"><span>Front-end:</span> HTML5, CSS, JavaScript</div>
                <div className="skill"><span>Libraries:</span> jQuery</div>
                <div className="skill"><span>Preprocessors:</span> Sass, Less</div>
                <div className="skill"><span>Databases:</span> MySQL, SQL</div>
                <div className="skill"><span>Site Generators:</span> Hugo</div>
                <div className="skill"><span>Version Control:</span> Git</div>
                <div className="skill"><span>Project management:</span> Jira</div>
                <div className="skill"><span>Tools:</span> NPM, Webpack, Gulp</div>
              </div>
              <div className="skills-right">
                <h3>Familiar with:</h3>
                <div className="skill"><span>CMS:</span> WordPress</div>
                <div className="skill"><span>Back-end:</span> Python, Node.js</div>
                <div className="skill"><span>Libraries:</span> Vue, React</div>
                <div className="skill"><span>Frameworks:</span> Laravel, Django, Express</div>
                <div className="skill"><span>Databases:</span> MongoDB</div>
              </div>
            </div>
          </article>
          <article className="column about">
            <h2>About</h2>
            <p>Experienced <b>Full-Stack Web Developer</b> with more than 5 years in the industry. Proficient in an
              assortment of technologies,
              including <b>Drupal</b>, <b>PHP</b>, <b>JavaScript</b>, <b>CSS</b>, <b>HTML5</b> and more. Currently
              working at
              <a target="_blank" href="https://www.karhuhelsinki.fi/">Karhu Helsinki</a> while completing a Master's
              degree in Information Technology at
              <a target="_blank" href="https://www.abo.fi/en/">Åbo Akademi</a>.</p>
          </article>
          <article className="column contact">
            <h2>Contact me</h2>
            <p>Need to get in contact with me? The best way of doing so is reaching out to me by email
              at: <b>alexander(at)tallqvist.dev</b>, or by sending me a message on
              <a target="_blank" href="https://www.linkedin.com/in/alexandertallqvist/">LinkedIn</a>.</p>
          </article>
        </div>
      </main>

      <footer className="footer"></footer>
    </>
  );
}