import React, { useState } from "react";
import { WebsiteCard } from "../Cards/Cards.tsx";

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

/**
 * A navigation bar with buttons to change the section displayed.
 * @param onSectionChange called with the name of the section to change to
 * @returns A navigation bar with buttons to change the section displayed
 */
function Header({ onSectionChange }: HeaderProps) {

  const [more, setMore] = useState<string>("");
	const [profileOption, setProfileOption] = useState("");

  /**
   * Called when the user changes the "More" dropdown.
   * Sets the local state to the selected value.
   * @param event The change event
   */
  function handleMoreChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setMore(event.target.value);
  }
  
  /**
   * Called when the user changes the "Profile" dropdown.
   * Sets the local state to the selected value.
   * If the selected value is "Edit Profile", calls onSectionChange with "edit-profile".
   * If the selected value is "Log Out", calls onSectionChange with "Log Out".
   * @param event The change event
   */
	const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setProfileOption(value);
		if (value === "Edit Profile") {
			console.log("Editing profile");
			onSectionChange("edit-profile");
		} else if (value === "Log Out") {
			console.log("Logging out");
      onSectionChange("Log Out");
		}

    setProfileOption("");
		}

  return (
    <div className="header">
      <WebsiteCard />
      <nav className="nav-bar">
        <div className="profile-button">
          <button>Profile</button>
          <select 
						className="profile-option"
						value={profileOption}
						onChange={handleProfileChange}
					>
						<option value="" disabled hidden> </option>
						<option className= "edit-profile" value="Edit Profile">Edit Profile</option>
						<option className= "log-out" value="Log Out">Log Out</option>
					</select>
        </div>
       
        <div>
          <button onClick={() => onSectionChange("home")}>Home</button>
        </div>

        <div>
          <button onClick={() => onSectionChange("Education")}>Education</button>
        </div>

        <div>
          <button onClick={() => onSectionChange("Experience")}>Experience</button>
        </div>

        <div>
          <button onClick={() => onSectionChange("Posts")}>Posts</button>
        </div>

        <div className="more-button">
          <button>More</button>
          <select
            className="more-option"
            value={more}
            onChange={handleMoreChange}
          >
            <option value="" disabled hidden> </option>
            <option onClick={() => onSectionChange("Projects")}>Projects</option>
            <option onClick={() => onSectionChange("Certifications")}>Certifications</option>
          </select>
        </div>

      </nav>
    </div>
  );
}

export default Header;
