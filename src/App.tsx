import Header from './components/Header';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { useEffect, useRef } from 'react';
import { debounce } from './utils/debounce';

function App() {

  const containerRef = useRef(null)

  useEffect(() => {

    const scrollableContainer: any = containerRef.current;

    const handleScroll = debounce((e: WheelEvent) => {

      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

      const FirstPage = document.getElementById('FirstPage');

      if (FirstPage && scrollDirection === 'down') {
        FirstPage.scrollIntoView({ behavior: 'smooth' });
      }

    }, 200);

    scrollableContainer.addEventListener('wheel', handleScroll);

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