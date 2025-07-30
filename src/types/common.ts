import { ReactNode } from "react";

export type TPerson = {
  name: string,
  imageId: string
}

export type TAvatarProps = {
  person: TPerson,
  size: number,
}

export type TCardProps = {
  children: ReactNode,
}

export type TScientist = {
  id: number,
  name: string,
  profession: string,
  accomplishment: string,
  imageId: string
}

export type TArrayScientists = Array<TScientist>