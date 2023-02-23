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
      <div> 🏃‍♂️ 줄넘기 ... ing </div>
    </>
  );
}
export default Q3components;
