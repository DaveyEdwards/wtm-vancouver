const appConfig = {
  firebaseSettings: {
    meetupCloudFunctionUrl:
      'https://us-central1-gdgvancouver-e7a28.cloudfunctions.net/meetupEventsApi',
  },
  palette: {
    primary: {
      main: '#00897b',
      // main: '#00BFA5',
    },
    secondary: {
      main: '#4285F4',
    },
  },
  meetupName: 'Women Techmakers Vancouver',
  meetupUrl: 'https://www.meetup.com/GDGCloudVancouver/',
  logo: '/wtm.svg',
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
      icon: 'comment',
      title: 'Testimonials',
      slug: '/testimonials',
    },
    {
      type: 'BUTTON',
      icon: 'live_help',
      title: 'Resources',
      slug: '/resources',
    },
    {
      type: 'BUTTON',
      src: '/gdgcloud.svg',
      title: 'GDG Cloud',
      href: 'https://gdgvancouver.com/',
    },
  ],
  aboutUsDescription:
    'Women Techmakers Vancouver (Powered by Women Techmakers Google) aims to create a platform where women can share, empower and grow as a community. ',
  organizers: [
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
      name: 'Samuel Baruffi',
      description:
        'Samuel loves technology, he has been in the IT industry for 12+ years with experience in Infrastructure, Networking, and DevOps. For the last 4 years focusing on how to deliver fast quality code using a wide variety of tools and programming languages to apply the DevOps and Agile mindset in different corporations. Samuel is a cloud advocate, a fan of Kubernetes, microservices, serverless and of course GCP.  He loves meeting new people in the community and sharing experiences.',
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
          name: 'Instagram',
          url: 'https://www.instagram.com/samuelbaruffi/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/samuelbaruffi/',
        },
      ],
    },
  ],
  volunteers: [
    {
      name: 'Shreya Dey',
      description:
        "Shreya is a continuosly evolving marketer who is obsessed with sharing the meaningful stories behind brands with their audience. Her interests range from Google Ads and Analytics to application of Reggio-Inspired curriculum to encourage creativity among children. In her spare time, she can be found consuming science fiction and 80's music.",
      img: '',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/shreyaisms',
        },
      ],
    },
    {
      name: 'Nayeema',
      description: 'Coming soon...',
      img: '',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/shreyaisms',
        },
      ],
    },
  ],
  socialMedias: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/GWTMVancouver',
      iconSrc: 'twitter',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/gdgcloudvancouver/',
      iconSrc: 'instagram',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/google-developer-group-vancouver',
      iconSrc: 'linkedin',
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/channel/UCCgsik5HG_bNwE4HqaN-Pbg/videos',
      iconSrc: 'youtube',
    },
    {
      title: 'Discord',
      url: 'https://discordapp.com/invite/fVaDH6n',
      iconSrc: 'discord',
    },
    {
      title: 'GDG Twitter',
      url: 'https://twitter.com/gdgvancouver',
      iconSrc: 'twitter',
    },
    {
      title: 'Meetup',
      url: 'https://www.meetup.com/GDGCloudVancouver/',
      iconSrc: 'meetup',
    },
  ],
  testimonials: {
    speakers: [
      {
        name: 'Dr. Stella Lee',
        info: 'Director, Paradox Learning',
        img:
          'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/speakers%2Fstella.png?alt=media&token=2eb014be-8825-43c2-81be-bad81a4a5bdc',
        description:
          'The organizers are wonderful to work with! They worked with me diligently on the title of the event and are professionals through and through. The audience was fun, engaging, smart, and energetic. Lots of good questions and sharing of experiences. Inspiring all around. Thank you for being a great host, I appreciate you fostering a community of practice here in Vancouver.',
      },
      {
        name: 'Ruxandra Felic',
        info: 'Software Architect, Telus Digital',
        img:
          'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/speakers%2Fruxandra.png?alt=media&token=ef8119c4-204e-4b58-bae6-8b7aa1cf7e1f',
        description:
          'The audience was incredible, so encouraging, so supportive, so welcoming! And funny too. I easily managed to relax on the stage and just had a very open and enjoyable conversation with the public. Piyali did a fantastic job moderating the conversation and making sure the audience is constantly engaged. Keep up the amazing work!',
      },
      {
        name: 'Monika Mascitti',
        info: 'Director, People at BuildDirect Technologies',
        img:
          'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/speakers%2Fmonika.png?alt=media&token=98364c08-05e2-4608-9bb5-473a31931cb4',
        description:
          'It felt great to hear others share their experiences as well.   I don’t like events where you just sit and listen to a panel for an hour.  by inviting others to share stories after the panel share some info was really effective and created great genuine conversation within the room.  I liked the break out sessions afterwards which allowed others to continue to share that may not have in the larger group. Well done on the event!',
      },
      {
        name: 'Antonia Issa',
        info: 'Client Education Manager, Moz',
        img:
          'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/speakers%2Fantonia.png?alt=media&token=0c0de1fc-440b-4e8a-a268-1aa302fd38a2',
        description:
          'The audience was receptive and inviting. They engaged with the subject matter and we connected with laughter and profound moments. Participants created a safe environment that allowed their colleagues to be vulnerable, which resulted in moments of truth and beautiful moments of support and solidarity.',
      },
      {
        name: 'Nibeer Dewan',
        info: 'Associate Product Manager, FunctionPoint',
        img:
          'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/speakers%2Fnibeer.png?alt=media&token=9ea3dbab-b62f-42f4-85ec-620aa0ac9616',
        description:
          'It was a delightful experience. At the end, I felt a lot of gratitude for people who organize such events, since it helps not only participants but also speakers grow and learn. I made wonderful connections at that event. ',
      },
    ],
    attendees: [
      {
        description:
          'It was informative and fun and I got to meet cool people. It is another reminder that we’re all in this together and everyone experiences things differently – yet the same.',
        name: 'Elise Yohm',
      },
      {
        description:
          'Stories get you connected even if you do not know the person and give you a bigger picture about an issue.',
        name: 'Akshaya Rane',
      },
      {
        description:
          'We are together and we are here to help each other. I can feel I am not alone. And their stories are inspired. Thank you for gathering us and sharing your insights with us!',
        name: 'Mindly Li',
      },
      {
        description:
          'I have pushed myself to negotiate after attending one of the workshops and it has also helped me put myself out there, asking questions, investigating subjects; the events gave me the confidence to feel that my questions and my voice has value.',
        name: 'Severine',
      },
      {
        description:
          'The meetup was very well organized and I could see that you are really putting your heart into connecting women in Tech. It was awesome to see that you tackled such a sensitive topic as the imposter syndrome and gave everyone in the room a feeling of being in this together.',
        name: 'Sabine Langmann',
      },
      {
        description:
          'Hearing the stories from other women made me realize that I am not alone, that we all go through similar obstacles, and these obstacle can be overcome. You are awesome for organizing these events and providing an opportunity for the women in the Vancouver tech community to come together!',
        name: 'Samira G',
      },
      {
        description:
          'The impact of others’ stories is a shared understanding, an increased awareness of possibilities and an appreciation of diverse experiences. The event created space to connect and learn. In only a few hours, I gained invaluable career insights, skills and tools that I can apply directly. Thanks Piyali!',
        name: 'Natasha Wainwright',
      },
      {
        description:
          'The Meetups have impacted me in that I know I’m not alone in some of my challenges. There are many women and some men that are experiencing similar challenges and it is wonderful to connect, to share, to support one another to greater heights together.',
        name: 'Christine C.',
      },
    ],
  },
};

export default appConfig;
