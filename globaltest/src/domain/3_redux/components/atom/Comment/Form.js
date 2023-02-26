const CommentForm = ({ post, onAddComment }) => {
  const onSubmitCommentBtn = (e) => {
    e.preventDefault();
    const id = post.id
    const nickName = e.target.name.value;
    const content = e.target.content.value;
    onAddComment(id, nickName, content);
  }
  return (
    <form onSubmit={onSubmitCommentBtn}>
      <label>
        <input type="text" name="name" placeholder="이름" />
      </label>
      <label>
        <input type="text" name="content" placeholder="내용" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default CommentForm;
