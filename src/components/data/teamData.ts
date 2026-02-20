
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Akshay Kumar Ankalagi",
    role: "Founder & CEO",
    image: "/lovable-uploads/be98e5e5-99ac-4c7b-ac30-866513171c74.png",
    social: {
      linkedin: "https://www.linkedin.com/in/akshaykumar-ankalagi-10b37933a",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Manoj Relekar",
    role: "CTO",
    image: "/lovable-uploads/70b40e32-bd68-4d8b-a372-025f2489b8df.png",
    social: {
      linkedin: "https://www.linkedin.com/in/manojrelekar3/",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "Vaibhava BG",
    role: "Lead Developer",
    image: "/lovable-uploads/801e4b6c-582c-475b-b9de-c4a3d531051f.png",
    social: {
      linkedin: "https://www.linkedin.com/in/vaibhav-b-g-284b63346",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
];

export default teamData;
