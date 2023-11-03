import { Fragment } from "react";

import { Icon } from "@/components/Icon";
import { Icons } from "@/constants/icons";
import { getRecordColor } from "@/utils";
import type { ReleaseFormat } from "@/types";

import { AllMediaIcon, IconsContainer, VinylIcon } from "./styles";

type RecordIconsProps = {
  format: ReleaseFormat;
};

const renderIcon = (format: ReleaseFormat) => {
  switch (format.name.toLowerCase().replace(" ", "")) {
    case "cd":
      return <Icon name={Icons.cd} size="1.125rem" />;
    case "boxset":
      return <Icon name={Icons.boxset} />;
    case "allmedia":
      return <AllMediaIcon>i</AllMediaIcon>;
    default:
      return <VinylIcon color={getRecordColor(format)} />;
  }
};

export const RecordIcons = ({ format }: RecordIconsProps) => (
  <IconsContainer>
    {[...Array(Number(format.qty))].map((_, index) => (
      <Fragment key={index}>{renderIcon(format)}</Fragment>
    ))}
  </IconsContainer>
);
