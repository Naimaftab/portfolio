import { Palette, Figma, Users, Code } from "lucide-react";

export const skills = [
  {
    name: "Design UX/UI",
    icon: Palette,
    items: ["ADOBEXD", "Wireframing", "Prototyping", "User Testing"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Outils Design",
    icon: Figma,
    items: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "TailwindCSS",
      "Bootstrap",
      "NEXTUI",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Recherche UX",
    icon: Users,
    items: ["User Research", "Personas"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Developpement web",
    icon: Code,
    items: ["HTML", "CSS", "JS", "REACTJS", "PostgreSQL", "Symfony"],
    color: "from-yellow-500 to-teal-500",
  },
];
