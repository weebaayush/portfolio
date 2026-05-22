import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </MainLayout>
  );
}

export default App;
