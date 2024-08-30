import { ReactNode } from "react";

import { getReleaseUrl } from "@/utils";

import { Link } from "./styles";

type ReleaseLinkProps = {
  id: number;
  span?: number;
  children: ReactNode;
};

export const ReleaseLink = ({ id, span = 1, children }: ReleaseLinkProps) => (
  <Link
    // href={getReleaseUrl(id)}
    href={`/record/${id}`}
    // target="_blank"
    // rel="noopener noreferrer"
    span={span}
  >
    {children}
  </Link>
);
