import { TPerson } from "@/types/common";


export const getImageUrl = (person: TPerson, size: number = 100): string => {
  console.log(size);
  return 'https://i.imgur.com/' + person.imageId + 's' + '.jpg';
}
