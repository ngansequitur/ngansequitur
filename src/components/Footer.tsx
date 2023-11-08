import Link from 'next/link'
import Image from 'next/image'
import LogoSecondary from '../../public/logo/ncs-logomark-light.svg'

export default function Footer() {
  return (
    <nav>
      <Link href="/">
        <Image
          src={LogoSecondary}
          alt="Company Logo"
          sizes="100vw"
          style={{
            width: '150px',
            height: 'auto',
          }}
        />
      </Link>
    </nav>
  )
}