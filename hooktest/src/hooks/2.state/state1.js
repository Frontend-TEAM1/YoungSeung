import { useRef, useState } from 'react';
import PlayListMock from '../../__mock__/playList.json';

function State1() {
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  // 스테이트로 input값을 해줄 필요가없다
  // 실시간으로 랜더링을 해줄이유가 없음(불필요한 랜더링이 발생)
  // const [titleInput, setTitleInput] = useState('');
  // const [artistInput, setArtistInput] = useState('');
  const titleValue = useRef('');
  const artistValue = useRef('');

  const onChangeInputTitle = (e) => {
    // 기존의 onChange를 통한 setInput은 불필요한 렌더링이 일어난다.
    // setTitleInput(e.target.value);
    // console.log(titleValue.current.value)
  };
  
  const onChangeInputArtist = (e) => {
    // 기존의 onChange를 통한 setInput은 불필요한 렌더링이 일어난다.
    // setArtistInput(e.target.value);
    // console.log(artistValue.current.value)
  };

  const onClickAddBtn = () => {
    const title = titleValue.current.value;
    const signer = artistValue.current.value;
    if (!title || !signer) return;
    const newObj = {
      title,
      signer,
    };
    setPlayList([...playList, newObj]);
  };

  const onClickDeleteBtn = () => {
    const item = playList.findIndex(
      (item) => item.title.toLowerCase() === titleValue.current.value.toLowerCase()
    );
    if (item === -1) return;
    playList.splice(item, 1);
    setPlayList([...playList]);
  };
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log('PlayListMock.playlist', PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {playList.map((item) => {
          return (
            <li>
              <h3>{item.title}</h3>
              <p>{item.signer}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <p>
          곡명 : <input ref={titleValue} />
        </p>
        <p>
          가수/작곡 : <input ref={artistValue} />
        </p>
        <p>
          <button onClick={onClickAddBtn}>추가</button>
          <button onClick={onClickDeleteBtn}>삭제</button>
        </p>
      </div>
    </>
  );
}
export default State1;
