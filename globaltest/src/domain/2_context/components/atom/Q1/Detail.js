import ContextQ1Detail2 from './Detail2';

const ContextQ1Detail = ({ onSetModalChange, text }) => {
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={onSetModalChange}>{text}</button>
      <ContextQ1Detail2 text={text} onSetModalChange={onSetModalChange} />
    </>
  );
};
export default ContextQ1Detail;
