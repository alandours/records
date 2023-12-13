import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export enum Icons {
  instagram,
  github,
}

export const icons = {
  [Icons.instagram]: FaInstagram,
  [Icons.github]: FaGithub,
};
