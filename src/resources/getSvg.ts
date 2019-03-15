import discord from './svgs/discord.svg';
import github from './svgs/github.svg';
import instagram from './svgs/instagram.svg';
import linkedin from './svgs/linkedin.svg';
import meetup from './svgs/meetup.svg';
import twitter from './svgs/twitter.svg';
import youtube from './svgs/youtube.svg';

export default function getSvg(social: string) {
  let svg = '';
  switch (social) {
    case 'twitter':
      svg = twitter;
      break;
    case 'instagram':
      svg = instagram;
      break;
    case 'linkedin':
      svg = linkedin;
      break;
    case 'github':
      svg = github;
      break;
    case 'youtube':
      svg = youtube;
      break;
    case 'discord':
      svg = discord;
      break;
    case 'meetup':
    default:
      svg = meetup;
  }
  return svg;
}
