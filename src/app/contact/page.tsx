// contact landing page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <>
      <h1> Contact me </h1>
      <p> I'd love to hear from you. Want to reach out, you can contact me on the following profiles</p>
      <ul>
        <li>
          <a href="https://github.com/itsngansense"><FontAwesomeIcon icon={faGithub}/> github</a>
        </li>
        <li>
          <a href="https://instagram.com/ngansequitur"><FontAwesomeIcon icon={faInstagram}/> instagram</a>
        </li>
        <li>
          <a href="https://dribbble.com/ngansequitur"><FontAwesomeIcon icon={faDribbble}/> dribbble</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/ngansequitur"><FontAwesomeIcon icon={faLinkedin}/> linkedin</a>
        </li>
      </ul>

      <form>
        <input type="text" placeholder="first and last name" />
        <input type="email" placeholder="email address"  />
        <input type="text" placeholder="subject" />
        <textarea id="message" rows="15" cols="65" placeholder="your message"></textarea>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}
