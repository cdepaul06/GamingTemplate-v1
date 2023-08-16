import { ESL1 } from "../assets";

const mainImage = {
  id: "ESL1-1",
  src: ESL1,
  alt: "ESL",
};

const navLinks = [
  {
    id: "Home",
    name: "Home",
    path: "/",
  },
  {
    id: "About",
    name: "About",
    path: "/about",
  },
  {
    id: "Teams",
    name: "Teams",
    path: "/teams",

    subNavLinks: [
      {
        id: "Counter-Strike",
        name: "Counter-Strike",
        path: "/teams/counter-strike",
      },
      {
        id: "Valorant",
        name: "Valorant",
        path: "/teams/valorant",
      },
      {
        id: "Rocket League",
        name: "Rocket League",
        path: "/teams/rocket-league",
      },
    ],
  },
  {
    id: "Merch",
    name: "Merch",
    path: "/merch",
  },
  {
    id: "Contact",
    name: "Contact",
    path: "/contact",
  },
];

export { mainImage, navLinks };
