import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      alt="innocent"
      src="https://media.licdn.com/dms/image/D4D35AQGB83ycM_1xBQ/profile-framedphoto-shrink_200_200/0/1691998028340?e=1699012800&v=beta&t=jbBqHshsk1etHE6hDHmk8sBxoqnkb6DnVYEKSmJIg0M"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>INNOCENT UDO</h1>
      <p>
        Greetings! I'm Innocent Udo, a results-driven Software Engineer with an
        unwavering passion for crafting efficient and scalable applications. My
        expertise lies in Java, SpringBoot, Hibernate, MySQL, PostgreSQL, and
        REST API development. I thrive in Agile environments, leveraging
        teamwork, effective communication, and leadership to deliver exceptional
        solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="React" emoji="G" color="blue" />
      <Skill skill="HTML+CSS" emoji="T" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
