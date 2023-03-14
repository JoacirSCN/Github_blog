import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/JoacirSCN.png" />
      <ProfileDetails>
        <header>
          <h1>Joacir Sampaio</h1>

          <ExternalLink text="github" href />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            JoacirSCN
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Prazeres, Jaboatão dos Guararapes - PE
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
