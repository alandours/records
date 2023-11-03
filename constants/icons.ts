import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { IoGridSharp } from "@react-icons/all-files/io5/IoGridSharp";
import { FaList } from "@react-icons/all-files/fa/FaList";
import { GoArrowUp } from "@react-icons/all-files/go/GoArrowUp";
import { GoArrowDown } from "@react-icons/all-files/go/GoArrowDown";
import { FiBox } from "@react-icons/all-files/fi/FiBox";
import { GiCompactDisc } from "@react-icons/all-files/gi/GiCompactDisc";

export enum Icons {
  instagram,
  github,
  grid,
  list,
  asc,
  desc,
  boxset,
  cd,
}

export const icons = {
  [Icons.instagram]: FaInstagram,
  [Icons.github]: FaGithub,
  [Icons.grid]: IoGridSharp,
  [Icons.list]: FaList,
  [Icons.asc]: GoArrowUp,
  [Icons.desc]: GoArrowDown,
  [Icons.boxset]: FiBox,
  [Icons.cd]: GiCompactDisc,
};
