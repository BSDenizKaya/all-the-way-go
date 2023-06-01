import { Navbar, Footer } from "../components";
import Head from "next/head";

function About() {
  
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div id="about" className="mt-40">
            <div className="general-info relative -top-32">
              <h2 className="font-bold text-left text-xl">I'm Deniz Kaya, Web Developer</h2>
              <p className="part-text text-left mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum commodi nostrum quae ea accusantium. Laborum blanditiis reprehenderit enim nam exercitationem, itaque aut officia sapiente animi at velit sint saepe ipsum reiciendis ducimus! </p>
            </div>
              <div className="skills">
              <h4 className="font-semibold text-xl -mt-2 mb-5">Skills</h4>
                <div className="skill">
                  <h4 className="skill-title">HTML/CSS/JS</h4>
                  <div className="skill-tab">
                    <div className="skill-tab-comp w-11/12"></div>
                  </div>
                </div>
                <div className="skill">
                  <h4 className="skill-title">React.js</h4>
                  <div className="skill-tab">
                    <div className="skill-tab-comp w-8/12"></div>
                  </div>
                </div>
                <div className="skill">
                  <h4 className="skill-title">Python</h4>
                  <div className="skill-tab">
                    <div className="skill-tab-comp w-5/12"></div>
                  </div>
                </div>           
              </div>
          </div>
      <Footer />
    </>
  );
}

export default About;
