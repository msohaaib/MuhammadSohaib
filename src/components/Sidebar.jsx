import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const menu = [
    { id: "home", icon: "bi-house", label: "Home" },
    { id: "about", icon: "bi-person", label: "About" },
    { id: "resume", icon: "bi-file-earmark", label: "Resume" },
    { id: "portfolio", icon: "bi-images", label: "Portfolio" },
    { id: "services", icon: "bi-stack", label: "Services" },
    { id: "contact", icon: "bi-envelope", label: "Contact" },
  ];

  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        {menu.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${active === item.id ? "active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            <i className={`bi ${item.icon}`}></i> {item.label}
          </li>
        ))}
      </ul>

      <div className="socials">
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>
    </div>
  );
}
