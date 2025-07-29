import { TPerson } from "@/types/common";


export const getImageUrl = (person: TPerson, size: number = 100): string => {
  return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}
