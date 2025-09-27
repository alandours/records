import { Fragment } from "react";

import { Icon } from "@/components/Icon";
import { Icons } from "@/constants";
import { formatFreeText, getRecordColor } from "@/utils";
import type { ReleaseFormat } from "@/types";

import { AllMediaIcon, BoxsetIcon, IconsContainer, VinylIcon } from "./styles";

type RecordIconsProps = {
  format: ReleaseFormat;
  className?: string;
};

const renderIcon = (format: ReleaseFormat, className?: string) => {
  switch (format.name.toLowerCase().replace(" ", "")) {
    case "cd":
      return <Icon name={Icons.cd} size="1.1rem" className={className} />;
    case "boxset":
      return <BoxsetIcon name={Icons.boxset} className={className} />;
    case "allmedia":
      return <AllMediaIcon>i</AllMediaIcon>;
    default:
      return (
        <VinylIcon
          color={getRecordColor(format)}
          className={className}
          title={formatFreeText(format.text || "", false, true)}
        />
      );
  }
};

export const RecordIcons = ({ format, className }: RecordIconsProps) => (
  <IconsContainer>
    {[...Array(Number(format.qty))].map((_, index) => (
      <Fragment key={index}>{renderIcon(format, className)}</Fragment>
    ))}
  </IconsContainer>
);
