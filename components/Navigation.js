import Link from 'next/link'

const Navigation = (props) => {

  return (
    <nav className="app-navigation">
      <Link href="/"><a>Home</a></Link>
      <Link href="/catalog"><a>Catalog</a></Link>
      <Link href="/support"><a>Support</a></Link>
    </nav>
  );
}

export default Navigation;