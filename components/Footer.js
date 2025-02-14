import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.css'

export default function Footer() {
  return (
      <footer className={styles.footer}>
      <ul className={styles.socialMediaList}>
        <li>
          <a href="https://twitter.com/sbdevman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/saeidbabaei" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/sbdevman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://saeidbabaei.medium.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
      </ul>
      </footer>
  )
}
