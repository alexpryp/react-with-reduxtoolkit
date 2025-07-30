import { TPerson } from "@/types/common";


export const getImageUrl = (person: TPerson): string => {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}
