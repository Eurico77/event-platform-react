import { CheckCircle, Lock  } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormate = format(props.availableAt, "EEEE' - 'd' de 'MMMM' - 'k'h'mm", {
    locale: ptBr
  })
  return (
    <a href='#'>
      <span className="text-gray-300">
        {availableDateFormate}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm flex items-center gap-2 text-blue-500 font-medium">
            <CheckCircle size={20} />
            Conteúdo iberado
          </span>
          ): (
            <span className="text-sm flex items-center gap-2 text-orange-500 font-medium">
            <Lock size={20} />
            Em breve
          </span>
          )}
       
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </a>
  );
}
