import 'styles/index.css';
import Shell from '../components/Shell';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Shell>
        <div className="text-xl">
          <Component {...pageProps} />
        </div>
      </Shell>
    </div>
  );
}

export default MyApp;
