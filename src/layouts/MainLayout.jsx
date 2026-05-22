import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { ScrollProgress } from '../components/ui/ScrollProgress';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
};
