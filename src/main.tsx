import './index.scss'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WebFontLoader from 'webfontloader';
import { RevolvingDot, RotatingLines } from 'react-loader-spinner';

const LoadingComponent = () => <div className='flex justify-center items-center h-full w-full fixed '>
  <RotatingLines
  strokeColor="lightgreen"
  strokeWidth="5"
  animationDuration="0.75"
  width="50"
  visible={true}
/>
</div>

const Main = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
   WebFontLoader.load({
      google: {
        families: ['Overlock:400,700,900', 'Amaranth:400,700']
      },
      active() {
        setFontsLoaded(true);
      },
    })
  }, []);

  return (
    <React.StrictMode>
      {fontsLoaded ? <App /> : <LoadingComponent />}
    </React.StrictMode>
  );
};
const root = document.getElementById('root') as HTMLElement;
const existingRoot = ReactDOM.createRoot(root);

if (existingRoot.render) {
  existingRoot.render(<Main />);
}

