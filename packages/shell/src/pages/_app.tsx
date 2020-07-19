import 'styles/index.css';
import Shell from '../components/Shell';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Shell>
        <p className="text-xl">
          <Component {...pageProps} />
        </p>
      </Shell>
    </div>
  );
}

export default MyApp;
