import Head from 'next/head'
import SplashScreen from "../components/portfolio/splashscreen/Splash";
import AboutMe from "../components/portfolio/aboutme/AboutMe";
import ExperienceView from "../components/portfolio/experiences/ExperienceView";
import {InferGetStaticPropsType} from "next";
import LanguageView from "../components/portfolio/languages/LanguageView";

import styles from "../styles/Index.module.scss"
import Footer from "../components/portfolio/footer/Footer";
import ProjectView from "../components/portfolio/projects/ProjectView";

export default function Home({experiences, languages, projects}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      <div>
          <Head>
              <title>Vernon Portfolio</title>
              <meta name="description" content="Vernon Liu - Software Engineering Portfolio" />
              <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
              <link rel="icon" href="/favicon.ico" />
              {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
              {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}
              {/*<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />*/}
          </Head>
          <SplashScreen />
          <div className={"responsive-container"}>
              <div className={"responsive-content"}>
                  <AboutMe />
                  <ExperienceView experiences={experiences} />
                  <LanguageView languages={languages} />
                  {/* PLACEHOLDER */}
                  <div>
                      <h2>Education</h2>
                      <p>Praesent eu sapien finibus, convallis enim at, posuere erat. Sed pellentesque iaculis erat, non condimentum ante commodo vitae. Aliquam erat volutpat. Integer orci risus, tincidunt dapibus lacinia feugiat, viverra in purus. Duis ut lacus porta quam consectetur tempor id nec leo. Curabitur cursus est vel dapibus ultrices. Integer tristique sit amet nisi vel blandit. Duis porta a arcu eu interdum. Nam dignissim, sem non luctus vulputate, ante sem fermentum lectus, non porta quam nisl sed nisi.</p>
                  </div>
                  <ProjectView  projects={projects}/>

              </div>
          </div>
          <Footer />
      </div>
  )
}

export async function getStaticProps() {
    const [experiences, languages, projects] = await Promise.all(
        [
            fetch("http://localhost:8080/experiences").then((res) => res.json()),
            fetch("http://localhost:8080/languages").then((res) => res.json()),
            fetch("http://localhost:8080/projects").then((res) => res.json())
        ]
    )

    return {
        props: {
            experiences,
            languages,
            projects
        },
    }
}
