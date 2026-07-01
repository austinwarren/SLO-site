import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Music from './pages/Music';
import Shows from './pages/Shows';
import Gallery from './pages/Gallery';
import History from './pages/History';

const routeSeo: Record<
  string,
  {title: string; description: string; keywords: string}
> = {
  '/': {
    title: 'Satin Love Orchestra | Portland & Eugene Disco Funk Band',
    description:
      'Satin Love Orchestra is a Portland and Eugene, Oregon disco funk band bringing live 70s dance music, funk, and disco energy to weddings, festivals, venues, and private events.',
    keywords:
      'Portland band, Eugene band, Oregon band, disco band, funk band, disco funk band, live music Oregon, dance band Oregon, Portland disco band, Eugene disco band',
  },
  '/playlist': {
    title: 'Playlist | Satin Love Orchestra Disco & Funk Band',
    description:
      'Explore Satin Love Orchestra setlist favorites, from classic funk grooves to disco dance-floor anthems performed live across Portland, Eugene, and Oregon.',
    keywords:
      'disco playlist, funk playlist, disco funk band, Portland music, Eugene music, Oregon live music, 70s dance music, funk songs, disco songs',
  },
  '/booking': {
    title: 'Booking | Satin Love Orchestra Oregon Event Band',
    description:
      'Book Satin Love Orchestra for weddings, festivals, corporate events, and private parties in Portland, Eugene, and throughout Oregon.',
    keywords:
      'book band Oregon, Portland wedding band, Eugene wedding band, event band Oregon, private party band, corporate event band, disco funk band booking',
  },
  '/gallery': {
    title: 'Gallery | Satin Love Orchestra Live in Oregon',
    description:
      'View live photos of Satin Love Orchestra bringing disco, funk, and 70s dance music to Portland, Eugene, and Oregon events.',
    keywords:
      'band gallery, live band photos, Portland band photos, Eugene band photos, Oregon music, disco band live, funk band live',
  },
  '/history': {
    title: 'History | Satin Love Orchestra Portland Eugene Oregon',
    description:
      'Learn the story behind Satin Love Orchestra, a Portland and Eugene disco funk band dedicated to the spirit of live 70s music in Oregon.',
    keywords:
      'band history, Portland band, Eugene band, Oregon band, disco funk band, 70s tribute band, live music Oregon',
  },
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertJsonLd(id: string, schema: Record<string, unknown>) {
  let element = document.head.querySelector<HTMLScriptElement>(`#${id}`);
  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(schema);
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = routeSeo[pathname] ?? routeSeo['/'];
    const canonicalUrl = new URL(pathname, window.location.origin).toString();
    const imageUrl = new URL(
      `${import.meta.env.BASE_URL}images/home%20page/cover.jpg`,
      window.location.origin,
    ).toString();

    document.title = seo.title;
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: seo.keywords,
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });

    upsertJsonLd('satin-love-structured-data', {
      '@context': 'https://schema.org',
      '@type': 'MusicGroup',
      name: 'Satin Love Orchestra',
      genre: ['Disco', 'Funk', 'Disco Funk', '70s Dance Music'],
      description: seo.description,
      url: canonicalUrl,
      image: imageUrl,
      email: 'booking@satinloveorchestra.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Portland',
        addressRegion: 'OR',
        addressCountry: 'US',
      },
      areaServed: [
        'Portland, Oregon',
        'Eugene, Oregon',
        'Oregon',
      ],
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <RouteSeo />
      <div className="min-h-screen flex flex-col font-sans selection:bg-retro-pink selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Music />} />
            <Route path="/booking" element={<Shows />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
