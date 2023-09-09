import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
// const a = user.links.linkedin;
// const b = user.links.github;

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Liza" city="New York" color="firebrick" />
      <About
        bio="I made this!"
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
      '
    </div>
  );
}

export default App;
