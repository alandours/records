import { Icon } from "@/components/Icon";
import { Icons } from "@/constants";

import { Links } from "./styles";

export const SocialLinks = () => (
  <Links>
    <a
      href="https://www.instagram.com/alansrecords"
      rel="noopener noreferrer"
      target="_blank"
      title="Instagram"
      aria-label="Instagram"
    >
      <Icon name={Icons.instagram} size="1.5rem" />
    </a>
    <a
      href="https://www.github.com/alandours"
      rel="noopener noreferrer"
      target="_blank"
      title="Github"
      aria-label="Github"
    >
      <Icon name={Icons.github} size="1.5rem" />
    </a>
  </Links>
);
