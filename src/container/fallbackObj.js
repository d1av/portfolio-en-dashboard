export const fallback = [
  {
    id: 31338,
    title: "Title",
    description: "Description",
    imgUrl: "Image URL",
    name: "Name",
    bgColor: "#ffffff",
    icon: "URL Icon",
    projectLink: "URL project",
    codeLink: "URL from github",
    tags: ["Tag1", "Tag2", "Tag3"],
    company: "Company",
    feedback: "Feedback",
    year: "Year",
    desc: "Desc",
    email: "email",
    message: "message",
    userName: "Username 1",
  },
  {
    id: 4241,
    title: "Title 2",
    description: "Description 2",
    imgUrl: "Image URL 2",
    name: "Name 2",
    bgColor: "#ffffff 2",
    icon: "URL Icon",
    projectLink: "URL project 2",
    codeLink: "URL from github 2",
    tags: ["Tag 1", "Tag2", "Tag3"],
    company: "Company 2",
    feedback: "Feedback 2",
    year: "Year 2",
    desc: "Desc 2",
    email: "email 2",
    message: "message 2",
    userName: "Username 2",
  },
  {
    id: 142342316,
    title: "Title 3",
    description: "Description 3",
    imgUrl: "Image URL 3",
    name: "Name 3",
    bgColor: "#ffffff 3",
    icon: "URL Icon 3",
    projectLink: "URL project 3",
    codeLink: "URL from github 3",
    tags: ["Tag 1", "Tag2", "Tag3"],
    company: "Company 3",
    feedback: "Feedback 3",
    year: "Year 3",
    desc: "Desc 3",
    email: "email 3",
    message: "message 3",
    userName: "Username 3",
  },
];

export const initialState = {
  title: false,
  description: false,
  imgUrl: false,
  name: false,
  bgColor: false,
  icon: false,
  projectLink: false,
  codeLink: false,
  tags: false,
  company: false,
  feedback: false,
  year: false,
  desc: false,
  email: false,
  message: false,
  ButtonSelected: "About",
};
export const aboutState = {
  ...initialState,
  title: true,
  description: true,
  imgUrl: true,
  ButtonSelected: "About",
  path: "portfolio/en/about",
};

export const initialStateValue = {
  title: "",
  description: "",
  imgUrl: "",
  name: "",
  bgColor: "",
  icon: "",
  projectLink: "",
  codeLink: "",
  tags: "",
  company: "",
  feedback: "",
  year: "",
  desc: "",
  email: "",
  message: "",
  path: "portfolio/en/about",
};
