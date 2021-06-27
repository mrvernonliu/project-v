import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import {fab, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faArrowDown, fas, faTools} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faLinkedin);
library.add(fab, faGithub);
library.add(fas, faArrowDown);
library.add(fas, faTools);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
