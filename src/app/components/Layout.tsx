import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import WhatsAppFloat from './ui/whatsAppFloat ';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
