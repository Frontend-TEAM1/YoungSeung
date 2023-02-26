const PostForm = ({ onAddPost }) => {

  const onContentSubmitBtn = (e) => {
    // 1. 이벤트 받고 폼의 기본성질 preventDefault()로 막기
    // 2. title과 content받아서 매개변수로 넘겨주기
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    onAddPost(title, content)
  }

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={onContentSubmitBtn}>
        <label>
          <input type="text" name="title" placeholder="제목" />
        </label>
        <label>
          <input type="text" name="content" placeholder="내용" />
        </label>
        <button type="submit">추가</button>
      </form>
    </>
  );
};
export default PostForm;
