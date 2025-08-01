import { getImageUrl } from "@/helpers/utils";
import { TAvatarProps, TCardProps } from "@/types/common";
import '@/components/profile/Profile2.css';

function Avatar({ 
  person,
  size 
}: TAvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }: TCardProps) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile2() {
  return (
    <Card>
      <Avatar 
        size={100}
        person={{
          name:'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
