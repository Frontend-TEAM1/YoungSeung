import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import PageNumber from './PageNumber/PageNumber';

function Pagination({ perPage, totalIssue, offset, setOffset, pageNum }) {
	const onClickNextPage = () => {
		setOffset(offset + 1);
	};
	const onClickPrevPage = () => {
		setOffset(offset - 1);
	};

	const onClickTargetPage = e => {
		setOffset(Number(e.target.innerText));
	};
	console.log(pageNum);
	return (
		<S.Wrapper>
			<button>[맨처음]</button>
			{pageNum && (
				<>
					<button onClick={onClickPrevPage} disabled={offset === pageNum[0]}>
						[이전]
					</button>
					<S.PageNumWrapper>
						{pageNum.map((num, idx) => {
							return (
								<PageNumber
									key={idx}
									num={num}
									offset={offset}
									onClickTargetPage={onClickTargetPage}
								/>
							);
						})}
					</S.PageNumWrapper>
					<button
						onClick={onClickNextPage}
						disabled={offset === pageNum.length}
					>
						[다음]
					</button>
				</>
			)}
			<button>[맨끝]</button>
		</S.Wrapper>
	);
}
export default Pagination;

const Wrapper = styled.div`
	${flexCenter}
`;
const PageNumWrapper = styled.div`
	${flexCenter}
`;

const S = {
	Wrapper,
	PageNumWrapper,
};
