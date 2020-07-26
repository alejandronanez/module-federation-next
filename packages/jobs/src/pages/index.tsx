import Banner from '../components/Banner';
import FeaturedJob from '../components/FeaturedJob';
import JobsList from '../components/JobsList';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/frontend-engineer">
        <a className="bg-blue-200 p-2">Go to Frontend Engineering</a>
      </Link>
      <Banner />
      <FeaturedJob />
      <JobsList />
    </div>
  );
}
