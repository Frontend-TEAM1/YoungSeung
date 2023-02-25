import ContextQ2Form2 from './Form2';

const ContextQ2Form = ({ onAddUserList, onAddIsEditUserList }) => {
  const onSubmitBtn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickName = e.target.nickName.value;
    if(!name || !nickName) return;
    onAddUserList(name, nickName);
  };
  return (
    <form onSubmit={onSubmitBtn}>
      <h1>Q2Form</h1>
      <input name="name" placeholder="name" />
      <input name="nickName" placeholder="nick-name" />
      <button>추가</button>
      <ContextQ2Form2 onAddIsEditUserList={onAddIsEditUserList} />
    </form>
  );
};
export default ContextQ2Form;
