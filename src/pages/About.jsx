import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <main id="about">
      <div className="container">
        <div className="row about__row">
          <figure>
            <img src={about} alt="" className="about__img" />
          </figure>
          <h2 className="about__header">About</h2>
          <p className="about__para">
            Hey, it's Ethan! <span className="blue">Champions</span> is a fully
            dynamic e-commerce app inspired by the popular online video game,
            League of Legends. Originally designed to be a platform for
            purchasing online books, <span className="blue">Champions</span> has
            turned into one of my favorite passion projects after revamping the
            theme to be based around recruiting League characters for one's
            collection.
          </p>
          <br />
          <p className="about__para">
            I had a lot of fun working on this project and spending many hours
            improving upon my knowledge of JavaScript and React. To learn more
            about this app and its features, you can visit its{" "}
            <a href="https://github.com/ethansalonga/champions-react" target="_blank">
              repository
            </a>. You can also visit my <a href="https://github.com/ethansalonga" target="_blank">GitHub</a> to learn more about me and view some of my other projects. Thanks for stopping by! And never forget, as a young
            hextech scientist once said:
          </p>
          <p className="about__quote">"I know it sounds impossible, but when have we ever let that stop us?" Jayce Talis</p>
        </div>
      </div>
    </main>
  );
};

export default About;
