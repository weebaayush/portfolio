import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Loader } from './components/ui/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate loading and give the cinematic loader time to shine
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <MainLayout>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </MainLayout>
      )}
    </>
  );
}

export default App;
