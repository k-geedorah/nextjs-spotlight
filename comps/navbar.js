import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header>
      <div className='px-5 py-5'>
        <Link href='/'><img className='ml-16 absolute flex rounded-full  h-9 w-9' src='https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=75' /></Link>
        <nav className='flex justify-center'>
          <ul className='flex rounded-full  text-sm font-medium bg-zinc-800/90 text-zinc-200 ring-white/10 ring-1'>
            <li className={currentRoute === '/about' ? 'relative block px-3 py-2  text-teal-400' : 'relative block px-3 py-2 hover:text-teal-400'}>
              <Link href='/about'>About</Link>
            </li>
            <li className={currentRoute === '/articles' ? 'relative block px-3 py-2  text-teal-400' : 'relative block px-3 py-2 hover:text-teal-400'}>
              <Link href='/articles'>Articles</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;