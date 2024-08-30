"use client";

import { useEffect, useState } from "react";

import { Image } from "./styles";

interface RecordImageProps {
  title: string;
  image: string;
  fallbackImage: string;
  size: number;
  list?: boolean;
}

export const RecordImage = ({
  title,
  image,
  fallbackImage,
  size,
  list = false,
}: RecordImageProps) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (imageError) {
      timeout = setTimeout(() => {
        setImageError(false);
      }, 1000 * 60);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [imageError]);

  return (
    <Image
      src={imageError ? fallbackImage : image}
      alt={`${title} album cover`}
      width={size}
      height={size}
      onError={() => setImageError(true)}
      $blur={imageError}
      $list={list}
    />
  );
};
