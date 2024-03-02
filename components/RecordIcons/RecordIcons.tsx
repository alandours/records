import { ReleaseFormat } from "@/types";
import { getRecordColor } from "@/utils";

import { AllMediaIcon, BoxsetIcon, CdIcon, VinylIcon } from "./styles";

type RecordIconsProps = {
  format: ReleaseFormat;
};

const renderIcon = (format: ReleaseFormat) => {
  switch (format.name.toLowerCase().replace(" ", "")) {
    case "cd":
      return <CdIcon />;
    case "boxset":
      return <BoxsetIcon />;
    case "allmedia":
      return <AllMediaIcon>i</AllMediaIcon>;
    default:
      return <VinylIcon color={getRecordColor(format)} />;
  }
};

export const RecordIcons = ({ format }: RecordIconsProps) => (
  <div className="flex">
    {[...Array(Number(format.qty))].map((_, index) => renderIcon(format))}
  </div>
);
