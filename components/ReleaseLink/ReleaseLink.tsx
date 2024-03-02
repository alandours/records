import { ReactNode } from "react";

import { getReleaseUrl } from "@/utils";

import { Link } from "./styles";

type ReleaseLinkProps = {
  id: number;
  children: ReactNode;
};

export const ReleaseLink = ({ id, children }: ReleaseLinkProps) => (
  <Link href={getReleaseUrl(id)} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);
