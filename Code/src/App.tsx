import { useState } from "react";
import Login from "./Login/Login.tsx";
import Header from "./Header/Header.tsx";
import Background from "./Background/Background.tsx";
import Blogs from "./Blogs/Blogs.tsx";
import ProfileCard, { EducationCard, ExperienceCard, 
                    ProjectCard, CertificationsCard } from "./Cards/Cards.tsx";

/**
 * The main App component, which renders the entire website.
 */
function App() {
  const [section, setSection] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  /**
   * Gets called when the user clicks the "Save" button in editing mode inside ProfileCard.
   * Saves the ProfileCard data.
   */
  const handleSave = () => {
    setIsEditing(false);
    setSection("");
    {console.log("Editing mode:", isEditing)}
  };

  /**
   * Called when the user clicks the "Log In" button in the login page.
   * Sets the isLoggedIn state to true.
   */
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  /**
   * Called when the user clicks the "Log Out" button.
   */
  const handleLogout = () => {
    console.log("Inside handleLogout");
    setIsLoggedIn(false);
    setSection("");
    setIsEditing(false);
  }

  return (
    <>
      {!isLoggedIn &&
        <Login onLogin={handleLogin}/>
      }
      
      {isLoggedIn && (
        <> 
          <Background />
          <Header 
            onSectionChange={(sec) => {
              if (sec === "Log Out") {
                console.log("Logging out");
                handleLogout();
                return;
              }
              setSection(sec);
              setIsEditing(sec === "edit-profile");
            }} 
          />
          <div className="home-cards">
            <ProfileCard
              isEditing={isEditing}
              onSave={handleSave}
            />
            {section === "Education" && <EducationCard />}
            {section === "Experience" && <ExperienceCard />}
            {section === "Projects" && <ProjectCard />}
            {section === "Certifications" && <CertificationsCard />}
            {section === "Posts" && <Blogs />}
          </div>
        </>
      )}
      
    </>
  );
}

export default App;