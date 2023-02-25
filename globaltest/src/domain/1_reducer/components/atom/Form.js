const Q1Form = ({ onSubmit }) => {

  const onIngredientsAdd = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const price = e.target.price.value;

      // 값이 둘중에 하나라도 비어있으면 리턴
      if (!name || !price) return;

      onSubmit(name, price);

      // 추가후 inputValue 초기화
      e.target.name.value = '';
      e.target.price.value = '';
    }
  
  return (
    <form onSubmit={onIngredientsAdd}>
      <label>
        <input type="text" name="name" placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
