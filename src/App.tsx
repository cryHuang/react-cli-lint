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

const App = () => {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div className='container'>
      <button
        onClick={() => {
          setShowLazy(pre => !pre);
        }}
      >
        展示懒加载组件
      </button>
      {showLazy && <LazyDemo />}
    </div>
  );
};
export default App;
