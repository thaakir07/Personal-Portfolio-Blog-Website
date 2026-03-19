import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpeg";
import { VscGithubInverted, VscVscode } from "react-icons/vsc";
import { FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiC, SiVim } from "react-icons/si"

type Profile = {
  img: string;
  name: string;
  bio: string;
}

interface ProfileCardProps {
  isEditing: boolean;
  onSave: () => void;
}

/**
 * The ProfileCard component is a card that displays a profile with an image, 
 * name and bio. It has two modes: editing and viewing. 
 * 
 * In editing mode, the user can edit the image, name, and bio of the profile.
 * The changes will be saved in the browser's local storage. 
 * 
 * In viewing mode, the user can view the profile's image, name, and bio. 
 * 
 * The component accepts two props: isEditing and onSave. 
 * 
 * isEditing: A boolean that indicates whether the component is in editing 
 * mode or not. 
 * onSave: A function that is called when the user clicks the save button 
 * while in editing mode. 
 * 
 * @returns A ProfileCard component.
 */
function ProfileCard({ isEditing, onSave }: ProfileCardProps) {
  
  const defaultProfile = {
    img: profilePic,
    name: "Thaakir Fernandez",
    bio: "Hi, I'm Thaakir. I'm a final year computer science student at Stellenbosch University. I enjoy gaming, working out at the gym, playing football and watching movies/anime. After I graduate, I would like to either do my honours in computer science or join a graduate program in software engineering and keep upskilling in the field while gaining real-world experience.",
  };

  const [profile, setProfile] = useState<Profile>(defaultProfile);

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  /**
   * Handles changes to the name and bio fields in the profile card.
   * @param e The change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  /**
   * Handles changes to the profile image field in the profile card.
   * When a new image is selected, it creates an object URL from the selected
   * file and updates the profile with the new image URL.
   * @param e The change event.
   */
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newImg = URL.createObjectURL(e.target.files![0]);
      setProfile({
        ...profile,
        img: newImg,
      })
    }
  }

  /**
   * Saves the current profile to local storage and calls the onSave callback.
   * If a profile is already saved in local storage, it will be overwritten.
   * If the onSave callback is undefined, nothing will happen.
   */
  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    if (onSave) onSave();
  }

  return (
    <div className="profile-card">
      <img className="card-image" src={profile.img} alt="Profile picture" />

      {isEditing ? (
        <>
          <input 
            type= "file" 
            accept="image/*" 
            onChange={handleImgChange} 
            className="card-image-input"
          />
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="card-title-input"
          />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="card-text-input"
          />
          <button className="save-button" onClick={handleSave}>Save</button>
          {console.log("Editing mode:", isEditing)}
        </>
      ) : (
        <>
        <div className="card-name">
          <h2 className="card-title">{profile.name.split(" ")[0]}</h2>
          <h2 className="card-surname">{profile.name.split(" ")[1]}</h2>
        </div>
          <p className="card-text">{profile.bio}</p>
        </>
      )}
    </div>
  );
}

export default ProfileCard

/**
 * EducationCard is a component that displays a list of education experiences.
 * @returns A EducationCard component.
 */
function EducationCard() {

  return (
    <div className = "education-card">
      <h1 className = "card-title"> Education </h1>
        <h2 className = "card-subtitle"> Stellenbosch University 2023 - Present </h2>
          <h3 className = "card-mini-title"> BSc Computer Science </h3>
              <div className="year">
                <ul className="modules">
                  <h4> First Year</h4>
                  <li> Physics 114 99%</li>
                  <li> Mathematics 114 99%</li>
                  <li> Mathematics 144 99%</li>
                  <li> Computer Science 114 99%</li>
                  <li> Computer Science 144 99%</li>
                  <li> Probability & stats 114 99%</li>
                  <li> Applied Mathematics 144 99%</li>
                </ul>
                <ul className="modules">
                  <h4> Second Year</h4>
                  <li> Mathematics 214 99%</li>
                  <li> Mathematics 244 99%</li>
                  <li> Computer Science 214 99%</li>
                  <li> Computer Science 244 99%</li>
                  <li> Applied Mathematics 214 99%</li>
                  <li> Applied Mathematics 244 99%</li>
                  <li> Operations Research 214 99%</li>
                  <li> Operations Research 244 99%</li>
                </ul>
                <ul className="modules">
                  <h4> Third Year</h4>
                  <li> Computer Science 313 99%</li>
                  <li> Computer Science 314 99%</li>
                  <li> Computer Science 343 99%</li>
                  <li> Computer Science 344 99%</li>
                  <li> Operations Research 314 99%</li>
                  <li> Operations Research 322 99%</li>
                  <li> Operations Research 344 99%</li>
                  <li> Operations Research 352 99%</li>
                </ul>
              </div>
        
        <h2 className = "card-subtitle"> Darul Ulum al-Arabiyyah al-Islamiyyah 2015-2020 </h2>
          <h3 className = "card-mini-title"> Islamic Law and Jurisprudence  </h3>
            <div className="year">
                <ul className="modules">
                  <h4> First Year</h4>
                  <li> Arabic Grammar </li>
                  <li> Arabic Morphology </li>
                  <li> Rules of Quran Recitation </li>
                  <li> Islamic Law </li>
                  <li> Islamic History </li>
                </ul>
                <ul className="modules">
                  <h4> Second Year</h4>
                  <li> Hadith </li>
                  <li> Islamic Law </li>
                  <li> Islamic History </li>
                  <li> Hadith Sciences </li>
                  <li> Islamic Legal Principles </li>
                </ul>
                <ul className="modules">
                  <h4> Third Year</h4>
                  <li> Hadith Module 3 </li>
                  <li> Islamic Law </li>
                  <li> Quranic Sciences Module 2 </li>
                  <li> Islamic History Module 2 </li>
                  <li> Islamic Legal Principles Module 2 </li>
                </ul>
                <ul className="modules">
                  <h4> Fourth Year</h4>
                  <li> Hadith Module 4 </li>
                  <li> Islamic Family Law </li>
                  <li> Hadith Sciences </li>
                  <li> Islamic History Module 3 </li>
                  <li> Islamic Legal Principles Module 3 </li>
                </ul>
                <ul className="modules">
                  <h4> Fifth Year</h4>
                  <li> Hadith Module 5 </li>
                  <li> Islamic Law of Business </li>
                  <li> Quranic Sciences Module 3 </li>
                  <li> Islamic History Module 3 </li>
                  <li> Islamic Legal Principles Module 3 </li>
                </ul>
                <ul className="modules">
                  <h4> Sixth Year</h4>
                  <li> Hadith Module 6 </li>
                  <li> Quranic Exegeses </li>
                  <li> Maslahah </li>
                  <li> Purposes of Islamic Law </li>
                  <li> Legal Maxims </li>
                </ul>
            </div>
    
    
        <h2 className = "card-subtitle"> Madrasah tul-Qurra 2009-2014 </h2>
          <h3 className = "card-mini-title"> Memorization of the Quran </h3>
            <p>
              This program focused on the memorization of the Quran, with an emphasis on proper pronunciation and recitation. Students engaged in daily memorization sessions, group recitations, and individual assessments to track their progress.
            </p>
    
    </div>
  );

}

export { EducationCard }

/**
 * React component that renders the experience section of the website.
 * The experience section displays the user's work experience, including
 * the company, role, and job duties.
 * @returns A ExperienceCard component.
 */
function ExperienceCard() {
  const jobs = [
    {
      company: "Amazon 2021",
      title: "Tech Support",
      duties: [
        "Responded to customer queries via chat.",
        "Troubleshoot hardware & software issues",
        "Provide technical support and assistance",
        "Maintain customer satisfaction",
      ],
    },
    {
      company: "Stellenbosch University 2024",
      title: "CS144 Learning Assistant",
      duties: [
          <div className="CS-duties">
            <p>Provided one-on-one and group tutoring for students</p>
          </div>,
          <div className="CS-duties">
            <p> Helped students understand complex concepts and improve 
              their coding skills.</p>  
          </div>,
          <div className="CS-duties">
            <p> Advised students on the design and implementation of 
              their projects.</p>  
          </div>,
          <div  className="CS-duties">
            <p>Invigilated examinations.</p>
          </div>,
      ],
    },
    {
      company: "Stellenbosch University 2025",
      title: "CS214 Teaching & Learning Assistant",
      duties: [
          <div className="CS-duties">
            <p>Oversaw tutorial sessions as lead demi.</p>
          </div>,
          <div className="CS-duties">
            <p> Helped students understand concepts regarding Data 
              Structures and Algorithms.</p>  
          </div>,
          <div className="CS-duties">
            <p> Advised students on the design and implementation 
              of their projects.</p>  
          </div>,
           <div className="CS-duties">
            <p> Assisted students in managing their Git repositories.</p>
          </div>,
          <div  className="CS-duties">
            <p>Participated in code reviews</p>
          </div>,
      ],
    },
    {
      company: "Stellenbosch University 2025",
      title: "CS144 Teaching & Learning Assistant",
      duties: [
          <div className="CS-duties">
            <p>Oversaw tutorial sessions as lead demi.</p>
          </div>,
          <div className="CS-duties">
            <p> Helped students understand concepts regarding Object-
              Oriented Programming.</p>  
          </div>,
          <div className="CS-duties">
            <p> Advised students on the design and implementation of 
              their projects.</p>  
          </div>,
           <div className="CS-duties">
            <p> Assisted students in managing their Git repositories.</p>
          </div>,
          <div  className="CS-duties">
            <p>Participated in code reviews</p>
          </div>,
      ],
    },
  ];
  
  return (
    
    <div className="experience-card">
      <h1 className="card-title">Experience</h1>
      <div className="experience-list">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h2 className="card-subtitle">{job.company}</h2>
            <h3 className="card-mini-title">{job.title}</h3>
            <ul className="duties">
              {job.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ExperienceCard };

/**
 * React component that renders the projects section of the website.
 * The projects section displays the user's projects, including
 * the name, role, and project duties.
 * @returns A ProjectCard component.
 */
function ProjectCard() {

  const projects = [
    {
      name: "Peer-to-Peer file sharing program (Java)",
      title: "Group Project",
      duties: [
          <div className="project-duties">
            <p>
              Led the design and implementation of a secure,
              peer-to-peer file sharing system with anonymized clients.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Developed the server-side responsible for client 
              authentication, message routing, and public key exchange.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Implemented full end-to-end encryption using RSA
              with secure public/private key exchange and encrypted message-
              key transmission
            </p>
          </div>,
      ],
    },
    {
      name: "VoIP Chat Program (Java)",
      title: "Group Project",
      duties: [
          <div className="project-duties">
            <p>
              Led a team in extending a client-server chat application to
              implement real-time Voice over IP (VoIP) calls and 
              voicenotes transmission using Java and JavaFX.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Developed the AudioSender class for capturing and 
              transmitting audio over UDP with sequencing for call quality.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Led debugging efforts across multi-threading,
              network transmission, and GUI integration issues.
            </p>
          </div>,
      ],
    },
    {
      name: "Reliable Blast User Datagram Protocol (Java)",
      title: "Group Project",
      duties: [
          <div className="project-duties">
            <p>
              Led a team in designing and implementing a file transfer 
              application comparing RBUDP and TCP performance.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Developed the Sender module to transmit files over both
              TCP and RBUDP protocols, handling packet creation, burst
              transmission, and TCP signaling.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Coordinated and conducted experiments measuring throughput
              packet loss handling, and performance variations with
              different packet sizes and burst sizes.
            </p>  
          </div>,
      ],
    },
    {
      name: "Client-Server Chat Program (Java)",
      title: "Group Project",
      duties: [
          <div className="project-duties">
            <p>
              Led a team in designing and implementing a client-server chat 
              application with real-time global and private messaging using 
              Java and JavaFX.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Designed and implemented the server-side (Server.java) 
              for a multi-client, single-server chat application.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Developed thread-safe connection handling using multi-
              threading.</p>
          </div>,
      ],
    },
    {
      name: "Braille-Afrikaans Translator (Java)",
      title: "Solo Project",
      duties: [
          <div className="project-duties">
            <p>
              Developed a Braille to Afrikaans translator.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Centered the design of the project around utilization of data 
              structures and algorithms for efficient lookup time.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              The translator includes building words using normal letters as 
              well using contracted braille characters.</p>
          </div>,
      ],
    },
    {
      name: "Obstacle Chess (Python)",
      title: "Solo Project",
      duties: [
          <div className="project-duties">
            <p>
              Developed a chess game with added obstacles such as walls & traps.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Centered the design of the project around Object-Oriented 
              Programming.
            </p>
          </div>,
          <div className="project-duties">
            <p> 
              Also added features like “build your board” which allows players 
              to build custom board scenarios and play from there,as well as 
              the ability for the computer to visually play out a moves list 
              you give it and allow you to play on from there.</p>
          </div>,
      ],
    },
  ];
  
  return (
    <div className="projects-card">
      <div className="card-header">
        <h1 className="card-title"> 
          Projects
        </h1>
        <h1>
          <VscGithubInverted /> <VscVscode /> <SiVim /> <FaPython /> <FaJava /> <SiC /> <IoLogoJavascript /> <BiLogoTypescript /> 
        </h1>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="card-subtitle">{project.name}</h2>
            <h3 className="card-mini-title">{project.title}</h3>
            <ul className="duties">
              {project.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProjectCard };

/**
 * React component that renders the certifications section of the website.
 * The certifications section displays the user's educational certifications,
 * including the name and title of each certification.
 * @returns A CertificationsCard component.
 */
function CertificationsCard() {
  const certifications = [
    {
      name: "Memorized the Quran",
      title: "Haafith ul-Qur'an",
    },
    {
      name: "Alimiyya in Islamic Studies",
      title: "Islamic Juror",
    },
    {
      name: "Bsc Computer Science",
      title: "Softwate Engineer",
    },
    {
      name: "NSc Senior Certificate",
      title: "Matriculant",
    },
  ]

  return (
    <div className="certifications-card">
      <h1 className="card-title">Certifications</h1>
      <div className="certification-list">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={index}>
            <h2 className="card-subtitle">{certification.name}</h2>
            <h3 className="card-mini-title">{certification.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CertificationsCard };

/**
 * WebsiteCard
 * 
 * A simple React component that displays the name
 * and tagline of this website, CodeX.
 * @returns A WebsiteCard component.
 */
function WebsiteCard() {

  return (
    <div className = "Website-card">
      <h1 className = "card-title"> CodeX </h1>
      <h2 className = "card-subtitle"> let them know... </h2>
    </div>
  );
}

export { WebsiteCard };
