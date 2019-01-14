const appConfig = {
  firebaseSettings: {
    meetupCloudFunctionUrl:
      'https://us-central1-gdgvancouver-e7a28.cloudfunctions.net/meetupEventsApi',
  },
  palette: {
    primary: {
      main: '#4285F4',
    },
    secondary: {
      main: '#EA4335',
    },
  },
  meetupName: 'GDG Cloud Vancouver',
  meetupUrl: 'https://www.meetup.com/GDGCloudVancouver/',
  logo: '/gdgcloud.svg',
  navigationItems: [
    {
      type: 'BUTTON',
      icon: 'home',
      title: 'Home',
      slug: `/`,
    },
    {
      type: 'BUTTON',
      icon: 'event',
      title: 'Events',
      slug: '/upcoming-events',
    },
    {
      type: 'BUTTON',
      icon: 'collections',
      title: 'Photos',
      slug: '/photos',
    },
    {
      type: 'BUTTON',
      icon: 'info',
      title: 'About Us',
      slug: '/about',
    },
    {
      type: 'BUTTON',
      icon: 'live_help',
      title: 'Resources',
      slug: '/resources',
    },
    {
      type: 'BUTTON',
      src: '/wtm.svg',
      title: 'WomenTechmakers',
      href: 'https://wtmgdgvancouver.com/',
    },
  ],
  aboutUsDescription:
    'GDG Cloud Vancouver is local community-ran meetup for developers interested in resources and technology from Google Developers. We focus on Google Cloud Platform and Open Source technologies that are part of it.',
  organizers: [
    {
      name: 'Davey Edwards',
      description:
        'Davey is obsessed with learning and building new things.  His primary focus right now is excelling his ability to build planetary scale applications with Google Cloud Platform, React, Apollo, and GraphQL using TypeScript.  Some other interests include video creation, biohacking, 3d modeling, physically building things, and manufacturing.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fdaveypart2.jpg?alt=media&token=4ceeb18f-d617-4b49-8942-f32590148192',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/daveyedwards',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/daveysworlds/',
        },
        {
          name: 'Github',
          url: 'https://github.com/DaveyEdwards',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/davey-edwards-a22412137/',
        },
      ],
    },
    {
      name: 'Kyle Ahn',
      description:
        'Kyle Ahn is always interested in learning and trying out new things, solving challenges, meeting new people, getting help and helping people in need. All of which made him join GDGCV. He does legwork, deals with venue, sponsorship and MC the events. In his free time, he looks at kitten gifs.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fkyle2.jpg?alt=media&token=951c2cdb-3e2a-4be8-b327-ae31a99efb4f',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/yyssahn',
        },
        {
          name: 'Github',
          url: 'https://github.com/yyssahn/',
        },
        {
          name: 'Website',
          url: 'yoonsungahn.net',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/yoonsungahn/',
        },
      ],
    },
    {
      name: 'Piyali Dey',
      description:
        'Piyali has been involved with Google Developers Group since early 2017 and has served as an organizer for both GDG Silicon Valley and GDG Cloud Vancouver. At present, she is also leading Google’s WomenTechmakers program in Vancouver, BC area. Piyali is a passionate speaker, mentor and community builder.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fpiyali2.jpg?alt=media&token=77b657c3-7847-4c2d-9456-a1ae01b3d69c',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/piyalidey_WTM',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/piyalidey/',
        },
      ],
    },
    {
      name: 'Samuel Baruffi',
      description: 'Hes thinking about it...',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fsam.jpg?alt=media&token=24a827e5-3751-4506-baf5-fff5b3a4951e',
      actions: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/SamuelBaruffi',
        },
        {
          name: 'Github',
          url: 'https://github.com/samuelbaruffi',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/samuelbaruffi/',
        },
      ],
    },
  ],
  socialMedias: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/gdgvancouver',
      src: '/src/resources/twitter',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/gdgcloudvancouver/',
      src: '/src/resources/instagram',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/google-developer-group-vancouver',
      src: '/src/resources/linkedin',
    },
    {
      title: 'Meetup',
      url: 'https://www.meetup.com/GDGCloudVancouver/',
      src: '/src/resources/linkedin',
    },
  ],
};

export default appConfig;
