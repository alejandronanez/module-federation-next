import RemoteComponent from "../components/RemoteComponent";

export default function Home() {
  return (
    <div>
      <h1>I am the shell</h1>
      <RemoteComponent scope="homepage" module="Greeting" />
    </div>
  );
}
