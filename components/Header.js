import Link from 'next/link';
import Nav from './Nav';    

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Site Logo</Link>
      </div>
      <div className="sup-bar">
        <p> Search </p>
      </div>
      <Nav />
    </header>
  );
}
