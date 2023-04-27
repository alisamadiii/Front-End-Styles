import { IconType } from "react-icons";

// Icons
import { AiOutlineHome } from "react-icons/ai";

type LINKSTypes = {
  link: number;
  name: string;
  icon: IconType;
  href: string;
}[];

export const LINKS: LINKSTypes = [
  {
    link: 1,
    name: "Home",
    icon: AiOutlineHome,
    href: "#",
  },
  {
    link: 2,
    name: "Home",
    icon: AiOutlineHome,
    href: "#",
  },
  {
    link: 3,
    name: "Home",
    icon: AiOutlineHome,
    href: "#",
  },
];
