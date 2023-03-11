import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    resetField,
  } = useForm();
  const onValid = (data) => {
    console.log(data)
  };
  const onInvalid = (error) => {
    console.log(error)
    resetField('password');
  };
  console.log(errors);

  console.log(watch('email'));
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        id="email"
        placeholder="test@email.com"
        {...register('email', {
          required: '이메일을 입력해주세요',
          minLength: { value: 5, message: '5글자이상 입력해주세요' },
        })}
      />
      {errors.email?.message}
      <input
        id="password"
        placeholder="****************"
        {...register('password', {
          required: '비밀번호 입력해주세요',
          minLength: { value: 5, message: '5글자 이상 입력해주세요' },
        })}
      />
      {errors.password?.message}
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
