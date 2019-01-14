import instagram from './svgs/instagram.svg';
import linkedin from './svgs/linkedin.svg';
import meetup from './svgs/meetup.svg';
import twitter from './svgs/twitter.svg';

export default function getSvg(social: string) {
  let svg = '';
  switch (social) {
    case 'Twitter':
      svg = twitter;
      break;
    case 'Instagram':
      svg = instagram;
      break;
    case 'LinkedIn':
      svg = linkedin;
      break;
    case 'Meetup':
    default:
      svg = meetup;
  }
  return svg;
}
