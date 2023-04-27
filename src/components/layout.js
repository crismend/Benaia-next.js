import HeaderMenu from './navigation'
import { links } from './nav-links'
import FooterLinks from './footer'

export default function Layout ({ children }) {
  return (
    <>
      <HeaderMenu links={links} />
      {children}
      <FooterLinks />
    </>
  )
}