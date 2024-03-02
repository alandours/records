import { ReactNode } from "react";

import { getReleaseUrl } from "@/utils";

type ReleaseLinkProps = {
  id: number;
  children: ReactNode;
};

export const ReleaseLink = ({ id, children }: ReleaseLinkProps) => (
  <a href={getReleaseUrl(id)} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
