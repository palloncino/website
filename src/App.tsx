import Header from './components/Header';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { useEffect, useRef } from 'react';
import { debounce } from './utils/debounce';
import { isElementInViewport } from './utils/isElementInViewPort';

function App() {

  const containerRef = useRef(null)

  useEffect(() => {

    const Header = document.getElementById('Header');
    const FirstPage = document.getElementById('FirstPage');
    const SecondPage = document.getElementById('SecondPage');

    const scrollableContainer: any = containerRef.current;

    const handleScroll = debounce((e: WheelEvent) => {

      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

      if (scrollDirection === 'down') {

        if (isElementInViewport('Header') && FirstPage) {
          FirstPage.scrollIntoView({ behavior: 'smooth' });
        } else if (isElementInViewport('FirstPage') && SecondPage) {
          SecondPage.scrollIntoView({ behavior: 'smooth' });
        }

      } else {

        if (isElementInViewport('SecondPage') && FirstPage) {
          FirstPage.scrollIntoView({ behavior: 'smooth' });
        } else if (isElementInViewport('FirstPage') && Header) {
          Header.scrollIntoView({ behavior: 'smooth' });
        }
        
      }

    }, 200,);

    const handleKeyDown = (e: KeyboardEvent) => {

      if (e.key === 'ArrowDown') {

        if (isElementInViewport('Header') && FirstPage) {
          FirstPage.scrollIntoView({ behavior: 'smooth' });
        } else if (isElementInViewport('FirstPage') && SecondPage) {
          SecondPage.scrollIntoView({ behavior: 'smooth' });
        }

      } else if (e.key === 'ArrowUp') {

        if (isElementInViewport('SecondPage') && FirstPage) {
          FirstPage.scrollIntoView({ behavior: 'smooth' });
        } else if (isElementInViewport('FirstPage') && Header) {
          Header.scrollIntoView({ behavior: 'smooth' });
        }
        
      }

    };

    scrollableContainer.addEventListener('wheel', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      scrollableContainer.removeEventListener('wheel', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [])

  return (
    <div ref={containerRef}>
      <Header />
      <FirstPage />
      <SecondPage />
    </div>

  );
}

export default App;