import Embers from "./components/Embers";
import HeartBurst from "./components/HeartBurst";
import MusicToggle from "./components/MusicToggle";
import Hero from "./components/Hero";
import Notes from "./components/Notes";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import LoveLetter from "./components/LoveLetter";
import Closing from "./components/Closing";

export default function App() {
  return (
    <>
      <Embers />
      <HeartBurst />
      <MusicToggle />

      <main>
        <Hero />
        <Notes />
        <Story />
        <Gallery />
        <LoveLetter />
        <Closing />
      </main>
    </>
  );
}
