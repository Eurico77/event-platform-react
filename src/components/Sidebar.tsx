import { gql, useQuery } from '@apollo/client';
import Lesson from './Lesson';


const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;

interface GetLessonsResponse {
  lessons: {
    id: string
    slug: string
    title: string
    availableAt: string
    lessonType: string
  }[]

}

export default function Sidebar() {
  const { data } = useQuery<GetLessonsResponse>(GET_LESSONS_QUERY);

  return (
    <aside className='w-[438px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType === 'live' ? 'live' : 'class'}
          />
        ))}
      </div>
    </aside>
  );
}
