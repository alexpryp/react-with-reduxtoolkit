import { ReactNode } from "react";

export type TPerson = {
  name: string;
  imageId: string
}

export type TAvatarProps = {
  person: TPerson;
  size: number;
}

export type TCardProps = {
  children: ReactNode;
}
