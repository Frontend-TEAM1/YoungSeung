import { useEffect, useRef } from 'react';

function Q3components({ count, setCount }) {
  useEffect(() => {
    const Time = setInterval(() => {
      setCount((prev)=>prev+1);
    }, 1000);

    return () => {
      clearInterval(Time);
      setCount(0);
    };
  }, []);
  return (
    <>
      <div> πββοΈ μ€λκΈ° ... ing </div>
    </>
  );
}
export default Q3components;
