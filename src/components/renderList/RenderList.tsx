import { people } from '@/mockData/data';
import { getImageUrl } from '@/helpers/utils'
import '@/components/renderList/RenderList.css'

export default function RenderList() {
  const listItems = people.map(person => 
    <li key={person.id} className='scientistCard'>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        className='circleImg'
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );   
}
