import RemoteComponent from '../components/RemoteComponent';
import Shell from '../components/Shell';

export default function Home() {
  return (
    <div>
      <Shell>
        <p className="text-xl">
          I am just a shell application - I should not contain anything. I'm
          just a 🦪
        </p>
      </Shell>
    </div>
  );
}
