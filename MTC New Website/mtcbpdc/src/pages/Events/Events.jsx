import React from 'react';
import './Events.css';
import vscodeWorkshopImage from '../../assets/vscode_workshop.jpg'; // Import the image for the VS Code Workshop
import introProgrammingImage from '../../assets/intro_programming.jpg'; // Import the image for the Introduction to Programming event
import matlabWorkshopImage from '../../assets/matlab_workshop.jpg'; // Import the image for the MATLAB Workshop event
import vsCodeWorkshopImage from '../../assets/vscode_workshop.jpg'; // Import the image for the VS Code Workshop event
import typingContestImage from '../../assets/typing_contest.jpg'; // Import the image for the Typing Contest event
import signQuestImage from '../../assets/signquest.jpg'; // Import the image for the SignQuest event
import thinkAIImage from '../../assets/thinkai.jpg'; // Import the image for the ThinkAI'23 event
import speakerSessionImage from '../../assets/speaker_session.jpg'; // Import the image for the Speaker Session with Professor Nick Pears event

const EventCard = () => {
  return (
    <div className="event-container">
      {/* Upcoming Event Section */}
      <p className="upcoming-event-title">Upcoming Event</p>
      <div className="event-card">
        <div className="event-info">
          <p className="event-title">VS CODE WORKSHOP</p>
          <p className="event-time">6:30 PM - 7:45 PM (ONLINE)</p>
          <p className="event-date">20th November, 2023</p>
          <a href="">
            <div className="event-button">Register Now</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={vscodeWorkshopImage} 
            alt="VS Code Workshop"
          />
        </div>
      </div>

      {/* Past Events Section */}
      <p className="past-event-title">Past Events</p>
      
      <div className="event-card past">
        <div className="event-info">
          <p className="event-title">How To Start Programming</p>
          <p className="event-description">
            The "How To Start Programming" workshop began with the MTC core council outlining the club's goals and upcoming events. The speakers then covered programming basics, highlighted BITS Pilani's offerings, and provided an introduction to competitive programming and open-source projects. Participants also received a curated list of resources to start learning their preferred languages.
          </p>
          <a href="https://www.instagram.com/reel/CwxdLidvP2h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <div className="event-button blue-button">Read More</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={introProgrammingImage} 
            alt="How To Start Programming"
          />
        </div>
      </div>

      <div className="event-card past">
        <div className="event-info">
          <p className="event-title">MATLAB Workshop</p>
          <p className="event-description">
            The “MATLAB Workshop” began with the two speakers introducing the UI of MATLAB and its basic syntax and functionalities. They moved on to talking about the data types, comments, arrays, linspace, matrix element-wise operations, and indexing. Next, they solved two sample problems that aimed to demonstrate problem-solving and plotting graphs in MATLAB.
          </p>
          <a href="https://www.instagram.com/p/CxDTqwDv-l0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <div className="event-button blue-button">Read More</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={matlabWorkshopImage} 
            alt="MATLAB Workshop"
          />
        </div>
      </div>

      <div className="event-card past">
        <div className="event-info">
          <p className="event-title">VS Code Workshop</p>
          <p className="event-description">
            The "VS Code" workshop kicked off with MTC's Heramb and Akash introducing the agenda and providing a brief overview of VS Code. They discussed programming, VS Code's features, customization tips, API integration, built-in AI tools, and shared resources to help participants get familiar with the VS Code environment.
          </p>
          <a href="https://www.instagram.com/p/Czv9N40NEYV/">
            <div className="event-button blue-button">Read More</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={vsCodeWorkshopImage} 
            alt="VS Code Workshop"
          />
        </div>
      </div>

      <div className="event-card past">
        <div className="event-info">
          <p className="event-title">Typing Contest</p>
          <p className="event-description">
            The Typing Contest, Microsoft Tech Club's flagship event, tested participants' auditory comprehension and typing speed in a Computer Lab. Participants had two hours to attempt the challenge, with the opportunity for two retries. Each hour featured four unique audio clips, and participants were evaluated on speed and accuracy. The competition had a total of 9 winners, with 3 winners from each hour.
          </p>
          <a href="https://www.instagram.com/p/Cxa9BRFvVWh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <div className="event-button blue-button">Read More</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={typingContestImage} 
            alt="Typing Contest"
          />
        </div>
      </div>

      <div className="event-card past">
        <div className="event-info">
          <p className="event-title">SignQuest</p>
          <p className="event-description">
            The MTC SignQuest is a promotional event for the ESL Global Summit Generative AI Competition, organized by MTC during the CINS 2023 conference at BITS Pilani Dubai Campus in hybrid mode. Held in the vending machine area, pairs of participants took part, with one answering quiz questions while the other used search skills to assist. The competition aimed to raise awareness of Emirati Sign Language and the Generative AI competition.
          </p>
          <a href="https://www.instagram.com/p/CyQ5r_ivx8Q/?utm_source=ig_web_copy_link">
            <div className="event-button blue-button">Read More</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={signQuestImage} 
            alt="SignQuest"
          />
        </div>
      </div>

      <div className="event-card past">
        <div className="event-info">
          <p className="event-title">ThinkAI'23</p>
          <p className="event-description">
            ThinkAI'23 sought to find students with AI-driven solutions to global challenges, providing mentorship for the 2024 Microsoft Imagine Cup. Fourteen out of 16 registered teams presented ideas in areas like sustainability, healthcare, and education to 8 judges. The winners were Team Tech Titans (Sanober Sarfaraz Ahmed and Harsh Garg) and Team IntelliTrack (Anurag Kumar Jha, Mohammed Husamuddin, Sstuti D Mehra, Abdul Rahmaan Ansari).
          </p>
          <a href="https://www.linkedin.com/posts/microsoft-tech-club_%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%BF%F0%9D%97%BC%F0%9D%98%80%F0%9D%97%BC%F0%9D%97%B3%F0%9D%98%81-%F0%9D%97%A7%F0%9D%97%B2%F0%9D%97%B0%F0%9D%97%B5-%F0%9D%97%96%F0%9D%97%B9%F0%9D%98%82%F0%9D%97%AF%F0%9D%98%80-%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B8%F0%9D%97%94%F0%9D%97%9C-activity-7140743739425153024-at_b?utm_source=share&utm_medium=member_desktop">
            <div className="event-button blue-button">Read More</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={thinkAIImage} 
            alt="ThinkAI'23"
          />
        </div>
      </div>

      <div className="event-card past">
        <div className="event-info">
          <p className="event-title">Speaker Session with Professor Nick Pears</p>
          <p className="event-description">
            The Microsoft Tech Club hosted a speaker session with Professor Nick Pears, a Computer Vision expert from the University of York. Attended by BITS Pilani Dubai Campus director Dr. Srinivasan Madapusi and Computer Science HoD Dr. Vijaykumar, the event covered AI, Cyber Security, and Professor Pears' work in craniofacial shape modeling, sparking discussions on the future of Computer Vision.
          </p>
          <a href="https://www.linkedin.com/posts/microsoft-tech-club_microsofttechclub-computervision-techinnovation-activity-7143636619009466368-QdG9?utm_source=share&utm_medium=member_desktop">
            <div className="event-button blue-button">Read More</div>
          </a>
        </div>
        <div className="event-image">
          <img
            src={speakerSessionImage} 
            alt="Speaker Session with Professor Nick Pears"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
