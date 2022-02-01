import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hatim Matsue | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        <ul className="top_nav_bar">
          <li id="about_link">
            <a href="#about_tab">ABOUT</a>
          </li>
          <li id="projects_link">
            <a href="#projects_tab">PROJECTS</a>
          </li>
          <li id="contact_link">
            <a href="#email_address">CONTACT</a>
          </li>
        </ul>

      </header>

      <main>

        <h1 className="title">Hello world!</h1>

        <p className="description">
          My name is Hatim Matsue and i am a
          <p id="typing_area">
            <p>Software Developer</p> 
          </p>
        </p>

        <div className="tab" id="about_tab">
          <h2>About</h2>

          <p id="about_desc">
            I am a highly motivated software developer with over three years
            of learning experience. I have effective problem-solving skills and
            advance knowledge in algorithms & data structures, UI/UX Design,
            Front-end development and Backend development. I have strong
            communication skills and I love engaging in team activities. 

            <span id="dots">...</span> <br /> <br />
            
            <span id="more">
              My skills and expetize include:
              <ul>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>JQuery</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Oracle</li>
                <li>MongoDB</li>
                <li>Adobe illustrator</li>
                <li>Adobe after effects</li>
                <li>Microsoft office</li>
                <li>SDLC</li>
                <li>Agile development</li>
                <li>Project management</li>
                <li>UML</li>
              </ul>

              <h3>Why I want to be a developer at SovTech?</h3>
              <p>
                i really admire the company culture and 
                i am rest assured that the work environment is interesting too.

                The organization contains individuals that are highly 
                dedicated & willing to the organization to the greater hights
                and my skills set fit those requirements perfectly.

                Working with the elite team at SovTech will become a dream come true 
                since that will give a chance to: learn more about my line of work
                and meet like minded people.


              </p>

            </span>
          </p>

          <button id="read_button">Read more</button>

        </div>

        <div className="tab" id="projects_tab">
          <h2>Projects</h2>

          <div id="projects_container">
            <div className="card">
                <a href="https://party-tyme.herokuapp.com/" target="_blank">
                  <h3>Party-tyme</h3>
                  <img src="/pt_logo_2.png" className="project_logo" />
                </a>

            </div>
          </div>

        </div>


      </main>

      <footer>
        <h4>Contact</h4> 

        <div id="footer_links">
          <a id="email_address" href="mailto:matsuehatimt@gmail.com">email</a>
          <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/matsuehatim/">linkedin</a>
          <a id="github" target="_blank" href="https://github.com/timmy3000/">github</a>
          <a id="twitter" target="_blank" href="https://twitter.com/timmy_3000">twitter</a>
          
        </div>

        
        <div id="copyright"> © <span id="year"></span> MH - All Rights Reserved</div>

      </footer>

      <style jsx>{`

        .top_nav_bar {
          list-style-type: none;
          margin: 0;
          position: fixed;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          background: #fff;
          border-bottom: 1px solid #eaeaea;
          padding: 2rem 1.2rem;
          font-size: 1.1rem;
          font-weight: 500;
          width: 100%;
        }

        .top_nav_bar li {
          transition: .2s;
        }

        #about_link > a {
          color: #d72e82;
        }

        #projects_link > a {
          color: #875afb;
        }

        #contact_link > a {
          color: #ff7a00;
        }


        .top_nav_bar li:hover {
          cursor: pointer;
          font-weight: bolder;
          transform: scale(1.2);
          
        }


        #logo {
          align-self: flex-start;
          font-size: 2rem;
          display: none;

        }


        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          margin: 60px 18% 0 18%;
        }

        .tab {
          margin-bottom: 30px;
        }


        footer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-top: 1px solid #eaeaea;
          padding: 0 18%;
          width: 100%;
          height: 160px;
        }


        #footer_links {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
          width: 70%;

        }

        #footer_links a {
          font-size: 15px;
          text-decoration: underline;

        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #f;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          display: inline-block;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        #typing_area {
          margin: 20px auto;
          background-color: #1a1a1a;
          border-radius: 1px;
          padding: .01rem 6rem;
          max-width: 400px;

        }

        #typing_area > p {
          overflow: hidden;
          white-space: nowrap;
          display: inline-display;
          border-right: .15em solid #00ae6b;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          text-align: center;
          color: #00ae6b;
          animation: typing 2s steps(20, end) forwards,
            blink .8s infinite;

        }


        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          from { border-color: transparent; }
          to { border-color: #00ae6b; }
        } 

        h2 {
          font-size: 1.7rem;
        }



        #about_desc {

        }

        #more {
          display: none;
        }
        
        #read_button {
          outline: unset;
          border: 1.5px solid #000;
          border-radius: 3px;
          padding: 5px 15px;
          transition: .4s;
        }

        #read_button:hover {
          cursor: pointer;
          opacity: .8;
        }


        .project_logo {
          cursor: pointer;
          width: 150px;
          height: auto;
        }

        .logo {
          height: 1em;
        }

                
        #copyright, #year {
            cursor: pointer;
            margin-top: 5px;
            padding-top: 20px;
            font-size: 10px;
            text-align: center;
            color: #8a8a8a;
        }

        #email_address {
          color: #000;
          font-size: 14px;
        }
        
        @media (max-width: 650px) {
          main {
            margin: 60px 5% 0 5%;
          }

          footer {
            padding: 0 5%;
          }
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          text-decoration: none;
          color: #000;
        }

        ::selection {
          color: #fff;
          background: #000;
        }
        body::-webkit-scrollbar {
          width: 0.8rem;
        }
        body::-webkit-scrollbar-track {
          background: #cfcfcf;
        }
        body::-webkit-scrollbar-thumb {
          background: #1a1a1a;
        }

      `}</style>
  
      <Script>{`

        var dots = document.getElementById("dots");
        var more = document.getElementById("more");
        var read_button = document.getElementById("read_button");


        read_button.addEventListener("click", () => {
          if(dots.style.display === "none") {
            dots.style.display = "inline";
            read_button.innerHTML = "Read more";
            more.style.display = "none";
      
          } else {
            dots.style.display = "none";
            read_button.innerHTML = "Read less";
            more.style.display = "inline";
      
          }
        });

        //getting the year
        function getYear() {
            var the_date = new Date();
            document.getElementById("year").innerHTML = the_date.getFullYear();
        }
        getYear();

      `}</Script>
        
  

    
    </div>
  )
}
