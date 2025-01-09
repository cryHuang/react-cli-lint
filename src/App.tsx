import { lazy, useState } from 'react';
import '@/index.css';
import React from 'react';

const LazyDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyDemo" */
      /*webpackPrefetch: true*/
      './component/lazyDemo'
    )
);

type aType = string;
const App = () => {
  const [showLazy, setShowLazy] = useState(false);
  const a: aType = 100;
  console.log(a);
  return (
    <div className='container'>
      <button
        onClick={() => {
          setShowLazy(pre => !pre);
        }}
      >
        懒加载
      </button>
      {showLazy && <LazyDemo />}
    </div>
  );
};
export default App;
