import Head from 'next/head'
import SplashScreen from "../components/portfolio/splashscreen/Splash";
import AboutMe from "../components/portfolio/aboutme/AboutMe";
import ExperienceView from "../components/portfolio/experiences/ExperienceView";
import {InferGetStaticPropsType} from "next";
import LanguageView from "../components/portfolio/languages/LanguageView";

export default function Home({experiences, languages}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      <div>
          <Head>
              <title>Vernon Portfolio</title>
              <meta name="description" content="Vernon Liu - Software Engineering Portfolio" />
              <link rel="icon" href="/favicon.ico" />
              {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
              {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}
              {/*<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />*/}
          </Head>
          <SplashScreen />
          <div className={"responsive-container"}>
              <div className={"responsive-content"}>
                  <br />
                  <br />
                  <AboutMe />
                  <br />
                  <br />
                  <ExperienceView experiences={experiences} />
                  <br />
                  <br />
                  <LanguageView languages={languages} />
                  <br />
                  <br />
              </div>
          </div>
      </div>
  )
}

export async function getStaticProps() {
    const [experiences, languages] = await Promise.all(
        [
            fetch("http://localhost:8080/experiences").then((res) => res.json()),
            fetch("http://localhost:8080/languages").then((res) => res.json())
        ]
    )

    return {
        props: {
            experiences,
            languages
        },
    }
}
