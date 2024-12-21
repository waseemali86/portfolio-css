// Homepage.js
import "./Homepage.css"; // Importing the custom CSS file
import Image from "next/image";
import Project from "@/app/projects/page";
import Contact from "@/app/contact/page";
import About from "@/app/about/page";

function Homepage() {
  return (
    <main className="homepage-main">
      <div className="hero-section">
        {/* Left Side */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">{"I'm"}</span>
            <span className="name" >Waseem Junejo</span>
            <br />
            <span className="role"> Front-end</span>
            <span className="developer"> Developer</span>
          </h1>
          <p className="hero-description">
            Experienced front-end developer with a passion for developing and
            creating visually stunning and user-friendly websites and
            applications.
          </p>
          <div className="hero-buttons">
            <button className="btn hire-btn">HIRE ME</button>
            <button className="btn cv-btn">Download CV</button>
          </div>
        </div>
        {/* Right Side */}
        <div className="hero-image">
          <Image
            className="mobile-image"
            src="/images/Profile.jpg"
            alt="profile"
            width={150}
            height={200}
          />
         
        </div>
      </div>

      <About />

      {/* Services Section */}
      <div className="services-section">
        <h2 className="services-title">My Services</h2>
        <p className="services-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum
          maxime a doloribus suscipit natus? Nobis expedita sed eligendi sunt
          unde earum possimus, fugit enim perspiciatis totam.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <Image src="/images/coding.png" alt="coding" width={340} height={470} />
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">Blog, E-Commerce</p>
          </div>

          <div className="service-card">
            <Image
              src="/images/illustration.png"
              alt="UI/UX Design"
              width={340}
              height={470}
            />
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">Mobile App, Website Design</p>
          </div>

          <div className="service-card">
            <Image src="/images/game.png" alt="Game Design" width={340} height={470} />
            <h3 className="service-title">Game Design</h3>
            <p className="service-description">Character Design, Props & Objects</p>
          </div>

          <div className="service-card">
            <Image src="/images/Microphone.png" alt="Sound Design" width={340} height={470} />
            <h3 className="service-title">Sound Design</h3>
            <p className="service-description">Voice Over, Beat Making</p>
          </div>

          <div className="service-card">
            <Image
              src="/images/Photographer.png"
              alt="Photo Editing"
              width={340}
              height={470}
            />
            <h3 className="service-title">Photo Editing</h3>
            <p className="service-description">Portrait, Product Photo Editor</p>
          </div>

        </div>
      </div>

      <Project />
      <Contact />
    </main>
  );
}

export default Homepage;
