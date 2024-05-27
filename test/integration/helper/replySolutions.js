const REALMAN78_BODY = `<!DOCTYPE html>
<html>
  <head>
    <title>Resume - Marin Dedic</title>
    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="resume.css" media="screen" />
    <style type="text/css">
      body {
        background-color: #000000;
        margin: 0;
        padding: 0;
        font-family: "Lucida Console", Monaco, monospace;
        color: rgb(39, 133, 47);
      }
    </style>
  </head>

  <body>
    <div>
      <div>
        <hr style="border-color: rgb(39, 133, 47); border-width: 5px" />
        <center><strong>Marin Dedic Resume</strong></center>
        <center>
          Github -
          <a href="https://github.com/Realman78" target="_blank"
            >https://github.com/Realman78</a
          >
        </center>
        <hr style="border-color: rgb(39, 133, 47); border-width: 5px" />
      </div>

      <div id="resume-container">
        <div id="executed_commands">
          <div>
            Note: Enter <i>help</i> to get list of all available commands
          </div>
        </div>

        <div id="command-line">
          <span>visitor@Marin-resume-site:~#</span>
          <input type="text" autofocus="autofocus" id="command" />
        </div>
      </div>
    </div>

    <!-- Resume Sections -->

    <!-- 1. About -->
    <div id="about">
      <div><strong>About Me</strong></div>
      <div>
        As a Backend Engineer with a deep interest in network engineering and
        security, I have a track record of leading backend development for
        complex projects. My expertise includes managing real-time services
        (including WebRTC, WebSocket, and Server-Sent Events), optimizing
        performance, implementing ETL processes, cache management, DevOps
        practices, with proficient use of AWS, Docker, and Kubernetes. <br />In
        addition to these skills, I am well-versed in handling both lower-level
        protocols like UDP and TCP, as well as newer, higher-level protocols
        such as HTTP/2, HTTP/3, and gRPC. <br />Additionally, I played a key
        role in architectural planning, ensuring efficient and robust design to
        meet the project's complex needs. <br /><br />During my college years,
        my deep understanding of networks enabled me to be a teaching assistant
        for the Computer Networks course. Also at college, I was a teaching
        assistant for the Embedded Computer Systems course. These experiences
        not only solidified my technical knowledge but also honed my ability to
        explain complex concepts clearly and effectively. <br />Apart from that,
        I also have experience in frontend development (React, Svelte, Vue and
        Next.js), android app develpment, AI/ML and 3D game development just to
        name a few of the bigger ones. <br /><br />As an extroverted individual,
        I place immense value on communication. I thrive in environments where I
        can engage in problem-solving, devise creative solutions, and apply
        critical thinking. <br />My greatest hobby lies in invention and
        exploration. Whether it involves software or hardware, I am constantly
        driven by the desire to understand how systems operate at their most
        fundamental level. This curiosity often leads me to reverse engineering,
        a pursuit that allows me to unravel and learn from the intricacies of
        complex systems.
      </div>
      <br>

    </div>

    <!-- 2. Education  -->
    <div id="education">
      <div><strong>Education</strong></div>
      <div>
        <ul>
          <div><strong>College</strong></div>
          <ul>
            <li>
              <strong>Faculty of Engineering Rijeka, 2023-present</strong>
            </li>
            <p style="margin: 0">Graduate University Study of Computing</p>
            <br />
            <li><strong>Faculty of Engineering Rijeka, 2020-2023</strong></li>
            <p style="margin: 0">
              Undergraduate University Study of Computing - Awarded Bachelor of
              Science in Computing in 2023
            </p>
          </ul>
          <div><strong>School</strong></div>
          <ul>
            <li>
              <strong
                >High school for electrical engineering and computing,
                2016-2020</strong
              >
            </li>
            <p style="margin: 0">Computer technician</p>
          </ul>
        </ul>
      </div>
      <br>

    </div>

    <!-- 3. Projects  -->
    <div id="projects">
      <div><strong>Projects</strong></div>
      <div>
        <ul>
          <li>
            <strong
              ><a href="https://marindedic.ddns.net/" target="_blank"
                >Roletta</a
              ></strong
            >
            <ul>
              <li>
                Roletta makes interviewing fast, accessible and easy for both
                parties.
              </li>
              <li>
                Video/Audio conference, Easy Interview & Meeting scheduling
              </li>
              <li>
                Shared Code editor with the ability to execute JS code
                (execution happens in an isolated environment)
              </li>
              <li>Screen sharing & Realtime chat</li>
            </ul>
          </li>

          <li>
            <strong
              ><a href="https://www.npmjs.com/~realman78" target="_blank">
                NPM Packages</a
              ></strong
            >
            <ul>
              <li>
                <strong
                  ><a href="https://www.npmjs.com/package/majodo"
                    >MaJoDo</a
                  ></strong
                >
                A template game server supporting UDP, WebSockets and
                Protobuffers.
              </li>
              <li>
                <strong
                  ><a href="https://www.npmjs.com/package/streamer-express-lite"
                    >Streamer-express-lite</a
                  ></strong
                >
                A library that enables users to stream files with 1 line of code.
              </li>
            </ul>
          </li>

          <li>
            <strong
              ><a href="https://github.com/Realman78/VoiceComet" target="_blank"
                >VoiceComet</a
              ></strong
            >
            <ul>
              <li>Social media platform with a focus on audio content</li>
              <li>
                Live feed, ability to record and post audio files, Real-time
                chat, profiles and other typical social media platform features.
              </li>
              <li>
                Taken down since August 2022 because Heroku removed their free
                hosting tier.
              </li>
            </ul>
          </li>

          <li>
            <strong
              ><a
                href="https://play.google.com/store/apps/details?id=com.marin.comet&hl=en&gl=US"
                target="_blank"
                >UpComet</a
              ></strong
            >
            <ul>
              <li>
                environment which enables users to tranfser files between their
                devices fast and safe
              </li>
              <li>
                Consists of:
                <ul>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.marin.comet&hl=en&gl=US"
                      >Android app</a
                    >
                    which enables users to share files from their mobile device
                  </li>
                  <li>
                    <a href="https://github.com/Realman78/Comet-server-side"
                      >Web app</a
                    >
                    which enables users to share files from any device that
                    supports internet
                  </li>
                </ul>
              </li>
              <li>
                Taken down since August 2022 because Heroku removed their free
                hosting tier.
              </li>
            </ul>
          </li>
          <li>
            To see my other 35+ personal projects, visit my
            <a href="https://github.com/Realman78">GitHub page.</a>
          </li>
        </ul>
      </div>
      <br>

    </div>

    <!-- 4. Experience  -->
    <div id="experience">
      <div><strong>Experience</strong></div>
      <div>
        <ul>
          <li>
            <strong>Backend Engineer @ Agilno d.o.o</strong>: August 2022 - Present
            <ul>
                <li>
                  As the Backend Engineer, I was the lead engineer on multiple
                  projects, including taking charge of the backend engineering of a
                  particularly complex project from its initial architectural
                  planning through to the MVP release.
                </li>
                <li>
                  My key responsibilities encompassed the full spectrum of backend
                  engineering: from planning and designing high-performance services
                  to developing, testing, and maintaining them. Also, collaborating
                  with cross-functional teams to deliver on-time and on-budget
                  projects and initiatives.
                </li>
                <li>
                  Often used: Node.js, Nest.js, Docker, Kubernetes, Python, Airflow,
                  AWS, Git, Next.js, React, Tailwind…
                </li>
              </ul>
          </li>
          <li>
            <strong>Junior Programmer @ Ris Software</strong>: Febrary 2021 - August 2022
            <ul>
                <li>Junior programmer position at Ris software. As a junior programmer, I've gone through many tasks with emphasis on PLSQL and Clarion.</li>
                <li>Other duties: <ul>
                    <li>App development in Clarion</li>
                    <li>Development using PostgreSQL</li>
                    <li>Task automatizations (Python)</li>
                    <li>Software testing using Selenium and TestComplete</li>
                </ul></li>
            </ul>
          </li>
          <li>
            <strong>Student internship @ Asseco</strong>: May 2022 - August 2022
            <ul>
                <li>I did my internship within the faculty at Asseco in the Security & Compliance (DevOps/SysAdmin) department using these technologies: Docker, Kubernetes, Ansible, Gitlab, Jenkins, etc.</li>
            </ul>
          </li>
          <li>
            <strong>Freelance (Runebearer - Lead Programmer)</strong>: May 2022 - August 2022
            <ul>
                <li>Runebearer is an open-world RPG game that is still in development. As the lead programmer, I was in charge of the whole multiplayer and singleplayer aspect of the game.</li>
                <li>Responsibilities:</li>
                <ul>
                    <li>Multiplayer system development</li>
                    <li>Cooperation and leading 2 other programmers</li>
                </ul>
            </ul>
          </li>
          <li>
            <strong>IT assistant @ Imperial d.o.o</strong>: June 2018 - September 2018 && June 2019 - September 2019
            <ul>
                <li>Helping the IT team with whatever was needed. Main responsibilities include Website editing (HTML+CSS+JS) and general help with servers and network configurations.</li>
            </ul>
          </li>
        </ul>
      </div>
      <br>

    </div>

    <!-- 5. Skills  -->
    <div id="skills">
      <div><strong>Technical Skills</strong></div>
      <div>
        <ul>
            <li><strong>Node.js</strong> (related: Nest.js, Express, WebSockets, Protobufs, Electron.js)</li>
            <li>Fundamental <strong>networking</strong> knowledge </li>
            <li><strong>Programming Languages</strong> (Strongest to weakest):  JavaScript (TS), Go, Java, Python, Rust, C/C++/C#, Shell, PHP</li>
            <li><strong>Databases</strong> – SQL (PostgreSQL, MySQL, SQLite) & MongoDB</li>
            <li><strong>Cache</strong> management – Redis</li>
            <li><strong>Operating systems</strong>: Linux (CentOS certified, Ubuntu, Kali, Raspbian), MacOS & Windows</li>
            <li><strong>DevOps</strong>: Git, Docker, Kubernetes, NGINX, AWS (Lambda, RDS, S3, Airflow)</li>
            <li><strong>Architecture</strong> and High Level Design planning</li>
            <li><strong>Other</strong> more important <strong>technologies/protocols</strong> I have worked with: WebRTC, UDP/TCP, HTTP/2, HTTP/3,  QUIC, DNS, HTTPS, BGP</li>
            <li><strong>Software engineering tools</strong>: Git, Jira, GitHub, BitBucket, Jenkins</li>
            <li><strong>Other</strong> less important mentions: Wireshark, AI/ML, Android Studio,  Game development (Unity & Unreal Engine – Multiplayer and Singleplayer 3D games), Office tools</li>
            <li><strong>Languages</strong>: Native Croatian,  Proficient English, Basic German</li>
        </ul>
        <br>
    </div>

    <div id="certificates">
      <div><strong>Certificates</strong></div>
      <div>
        <ul>
            <li>Relevant</li>
            <ul>
                <li>Backend Master Class [Golang + Postgres + Kubernetes + gRPC] (2023)</li>
                <li>Unlocking Backend Peak Performance (2023)</li>
                <li>Complete Linux Training Course (2023)</li>
                <li>Nginx (2023)</li>
                <li>Fundamentals of Backend Engineering (2022)</li>
                <li>Fundamentals of Network Engineering (2022)</li>
                <li>Docker & Kubernetes (2022)</li>
                <li>Node.js Advanced Concepts (2022)</li>
                <li>Node.js Developer Course (2020)</li>
                <li>React - The Complete Guide (incl Hooks, React Router, Redux) (2021)</li>
            </ul>
            <li>Other</li>
            <ul>
                <li>Java Android Studio Developer Course (2018)</li>
                <li>Unity 3D Game Developer Course (2020)</li>
                <li>Advaned Java Course (2019)</li>
                <li>Java Programming Masterclass Course (2019)</li>
            </ul>
        </ul>
      </div>
      <br>
    
    </div>

    <!-- 6. Contact  -->
    <div id="contact">
        Email:
        <a href="mailto:marin.dedic@me.com" target="_blank"
          >marin.dedic@me.com</a
        ><br />
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/marin-dedi%C4%87-bb45491b5/"
          target="_blank"
          >https://www.linkedin.com/in/marin-dedi%C4%87-bb45491b5/</a
        ><br />
        Github:
        <a href="https://github.com/Realman78" target="_blank"
          >https://github.com/Realman78</a
        >
        <br>
        YouTube:
        <a href="https://www.youtube.com/channel/UCHWyM5ew0ehw6q1DR8ZeNgg" target="_blank"
          >https://www.youtube.com/channel/UCHWyM5ew0ehw6q1DR8ZeNgg</a
        >
      <br>

    </div>

    <!-- 7. Download -->
    <div id="download">
      <p>
        Downloading resume..<br />
        Note: If you are facing any problem, then click
        <strong><a href="./resume.pdf">HERE</a></strong> to download
      </p>
      <br>

    </div>

    <!-- 8. Error -->
    <div id="error">
      <p>
        <strong>Error</strong>: Command not found! Enter <i>help</i> to get list
        of all available commands..
      </p>
      <br>

    </div>

    <!-- 9. clear -->
    <div id="clear"></div>

    <!-- 10. Help -->
    <div id="help">
      <div>
        ------------------ <br />
        Built-in Commands <br />
        ------------------ <br />
        <p>
          about, education, projects, experience, skills, contact, download,
          clear
          <br />For autocompletion use <strong>Ctrl + Space</strong>
        </p>
      </div>
      <br>

    </div>
    <!-- Resume sections end -->

    <script type="text/javascript" src="resume.js"></script>
  </body>
</html>`;

const EXAMPLE_BODY = `<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>`;
export { REALMAN78_BODY, EXAMPLE_BODY };
