import styled from 'styled-components';

function PageNumber({ num, offset, setOffset }) {
	const onClickTargetPage = e => {
		if (e.target.innerText === `[${num}]`) return;
		setOffset(Number(e.target.innerText));
	};
	return (
		<S.PageNum onClick={onClickTargetPage}>
			{num === offset ? `[ ${num} ]` : num}
		</S.PageNum>
	);
}
export default PageNumber;

const PageNum = styled.button`
	margin: ${({ theme }) => theme.margin.small};
`;

const S = {
	PageNum,
};
