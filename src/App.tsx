import Header from './components/Header';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { useEffect, useRef } from 'react';
import { debounce } from './utils/debounce';
import { isElementInViewport } from './utils/isElementInViewPort';

function App() {

  const containerRef = useRef(null)

  useEffect(() => {

    const scrollableContainer: any = containerRef.current;

    const handleScroll = debounce((e: WheelEvent) => {

      console.log(1);

      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

      const Header = document.getElementById('Header');
      const FirstPage = document.getElementById('FirstPage');
      const SecondPage = document.getElementById('SecondPage');

      isElementInViewport('Header')

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

    scrollableContainer.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      scrollableContainer.removeEventListener('wheel', handleScroll);
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