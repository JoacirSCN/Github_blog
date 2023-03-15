import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from '../../styled'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          href="#"
        />
        <ExternalLink text="Ver no Github" href="#" target="_black" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          JoacirSCN
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />6 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
