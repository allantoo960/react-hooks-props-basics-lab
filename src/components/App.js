import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import user data
import user from "../data/user";
console.log(user);

function App() {
  const user = {
    name: "Liza",
    city: "New York",
    bio: "I made this!",
    color: "firebrick",
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    },
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
