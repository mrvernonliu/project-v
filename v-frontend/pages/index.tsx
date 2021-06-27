import Head from 'next/head'
import SplashScreen from "../components/portfolio/splashscreen/Splash";
import AboutMe from "../components/portfolio/aboutme/AboutMe";
import ExperienceView from "../components/portfolio/experiences/ExperienceView";
import {InferGetStaticPropsType} from "next";

export default function Home({experiences}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          <div className={"responsive-container light-theme"}>
              <div className={"responsive-content"}>
                  <br />
                  <br />
                  <AboutMe />
                  <br />
                  <br />
                  <ExperienceView experiences={experiences}/>
              </div>
          </div>
      </div>
  )
}

export async function getStaticProps() {
    console.log('fetching experiences')
    const res = await fetch("http://localhost:8080/experiences")
    console.log(res)
    const experiences = await res.json()
    return {
        props: {
            experiences,
        },
    }
}
