import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getIssues } from 'reducer/issues';
import IssueList from './components/Issues/IssuesList';
import Pagination from './components/Pagination/pagination';
import SortIssues from './components/SortIssues/sortIssues';

// 총 이슈
const totalIssue = 200;
let newArr = [];
let pageNum;

function HomePage() {
	const [perPage, setPerPage] = useState(10);
	const [offset, setOffset] = useState(1);
	const [pageArrIndex, setPageArrIndex] = useState(0);
	const [pageArr, setPageArr] = useState(newArr);
	const [sortState, setSortState] = useState('created');
	const [searchParams, setSearchParams] = useSearchParams();

	const issues = useSelector(state => state.issue.issues);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(
			getIssues({
				perPage: searchParams.get('perpage'),
				offset: searchParams.get('page'),
				sortState: searchParams.get('sort'),
			}),
		);
	}, [searchParams]);

	useEffect(() => {
		const totalPageNum = totalIssue / perPage;
		pageNum = new Array(totalPageNum).fill(null);
		pageNum = pageNum.map((item, index) => (item = index + 1));

		if (newArr.length > 0) newArr = [];
		for (let i = 0; i < totalPageNum; i += perPage) {
			const slice = pageNum.slice(i, i + 10);
			newArr.push(slice);
		}
		setPageArr(newArr);
		setOffset(1);
		console.log(newArr);
	}, [perPage]);

	useEffect(() => {
		if (offset > 10 * (pageArrIndex + 1) && offset % 10 === 1)
			return setPageArrIndex(pageArrIndex + 1);

		if (offset <= 10 * pageArrIndex && offset % 10 == 0)
			return setPageArrIndex(pageArrIndex - 1);
	}, [offset]);

	const onClickPerPage = number => {
		setPerPage(number);
		setSearchParams({ perpage: number, page: offset, sort: sortState });
	};

	const onClickSortState = state => {
		setSortState(state);
		setSearchParams({ perpage: perPage, page: offset, sort: state });
	};

	const onClickNextPage = () => {
		setOffset(offset + 1);
		const page = parseInt(searchParams.get('page'));
		setSearchParams({ perpage: perPage, page: page + 1, sort: sortState });
	};
	const onClickPrevPage = () => {
		setOffset(offset - 1);
		const page = parseInt(searchParams.get('page'));
		setSearchParams({ perpage: perPage, page: page - 1, sort: sortState });
	};

	const onClickInit = () => {
		setOffset(pageNum[0]);
		setPageArrIndex(0);
	};

	const onClickLast = () => {
		setOffset(pageNum.length);
		setPageArrIndex(pageArr.length - 1);
	};
	return (
		<>
			<SortIssues
				perPage={perPage}
				onClickPerPage={onClickPerPage}
				sortState={sortState}
				onClickSortState={onClickSortState}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			<IssueList issues={issues} />
			<Pagination
				offset={offset}
				setOffset={setOffset}
				pageNum={pageNum}
				pageArr={pageArr}
				pageArrIndex={pageArrIndex}
				onClickNextPage={onClickNextPage}
				onClickPrevPage={onClickPrevPage}
				onClickInit={onClickInit}
				onClickLast={onClickLast}
			/>
		</>
	);
}

export default HomePage;
