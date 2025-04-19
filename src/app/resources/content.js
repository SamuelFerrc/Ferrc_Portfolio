import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Samuel",
  lastName: "Ferreira",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Developer and Programmer",
  avatar: "/images/avatar.jpg",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese", "French", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I make some codes, and if I am feeling good I gonna make a world.
    </>
  ),
};

const social = [

  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SamuelLindao",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/samuelrxz/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:samuel.ferr@ferrc.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developer and Programmer</>,
  subline: (
    <>
      I'm Samuel, a developer and programmer from <InlineCode>BRAZIL</InlineCode>, with large experience in game and software development
      <br /> you will see everything about this on this website!
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Samuel is a developer and programmer with a passion for and involvement in the scientific world.
        Through processes of significance and logical understanding, he seeks to understand the world in his own way.
        His programming skills allow him to understand the world and also model it.
      </>
    ),
    images: [],

  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "State University of Santa Cruz (UESC)",
        timeframe: "2024 - 2025",
        role: "Scholarship Student Probex",
        achievements: [
          <>
            At UESC I was able to develop my academic and scientific skills aiming at an improvement
            in general development. Where through the scientific path it was possible to have a general
            improvement in life.
          </>,
        ],
        images: [],

      },
      {
        company: "GTS Path",
        timeframe: "2024 - 2024",
        role: "Virtual Reality Developer",
        achievements: [
          <>
            GTS was where I learned essential Unreal Engine skills and augmented reality development.
            A challenge that required the development of skills in the adverse areas of analytical
            geometry, physics and others.
          </>,
        ],
        images: [],

      },
      {
        company: "Dexioprotocol",
        timeframe: "2021 - 2023",
        role: "Unity Developer",
        achievements: [
          <>
            At Dexi I was able to learn about the crypto universe and develop essential skills for game
            development in Unity. I'm moving towards general good practices.
          </>,
        ],
        images: [],

      },
      {
        company: "Enigma Games Inc",
        timeframe: "2020 - 2020",
        role: "Unity Developer",
        achievements: [
          <>
            Enigma was where I took my steps into game development.
          </>,

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "State University of Santa Cruz",
        description: <>Computer Science.</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "C#",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],

      },
      {
        title: "C++",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],

      },
      {
        title: "Python",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],

      },
      {
        title: "Java",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],

      },
      {
        title: "Flutter",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],

      },
      {
        title: "Next.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],

      },

    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
