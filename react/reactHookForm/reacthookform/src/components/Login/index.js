import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm();
  const onsubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="test@email.com"
        {...register('email')}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="****************"
        {...register('password')}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;

/* 
 {...register('username', {
          required: '이름 입력',
          minLength: {
            message: '5글자 이상',
            value: 5,
          },
*/
