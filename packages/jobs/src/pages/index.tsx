import Banner from '../components/Banner';
import MostPopularJob from '../components/MostPopularJob';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/frontend-engineer">
        <a>FE</a>
      </Link>
      <Banner />
      <MostPopularJob />
    </div>
  );
}
