import LoadPage from 'components/Loading/loading';
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
	const [sortState, setSortState] = useState('created');
	const [pageArrIndex, setPageArrIndex] = useState(0);
	const [pageArr, setPageArr] = useState(newArr);
	const [searchParams, setSearchParams] = useSearchParams();

	const issues = useSelector(state => state.issue.issues);
	const loading = useSelector(state => state.issue.getTodoState.loading);
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
	}, [perPage]);

	useEffect(() => {
		if (offset > 10 * (pageArrIndex + 1) && offset % 10 === 1)
			return setPageArrIndex(pageArrIndex + 1);

		if (offset <= 10 * pageArrIndex && offset % 10 == 0)
			return setPageArrIndex(pageArrIndex - 1);
		// setSearchParams({ perpage: perPage, page: offset, sort: sortState });
		// const paramOffset = parseInt(searchParams.get('page'));
		// console.log(paramOffset);
		// if (offset !== paramOffset) return setOffset(paramOffset);
		// const paramOffset = parseInt(searchParams.get('page'));
		// console.log(1);
		// if (offset !== paramOffset) return setOffset(paramOffset);
	}, [offset]);

	useEffect(() => {
		const paramOffSet = parseInt(searchParams.get('page'));
		if (offset === paramOffSet) return;
		setOffset(paramOffSet);
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
		const paramOffset = parseInt(searchParams.get('page'));
		setOffset(paramOffset + 1);
		setSearchParams({
			perpage: perPage,
			page: paramOffset + 1,
			sort: sortState,
		});
		// if (offset === paramOffset) return;
		// setOffset(paramOffset);
	};
	const onClickPrevPage = () => {
		const paramOffset = parseInt(searchParams.get('page'));
		setOffset(paramOffset - 1);
		setSearchParams({
			perpage: perPage,
			page: paramOffset - 1,
			sort: sortState,
		});
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
			{loading && <LoadPage />}
			{!loading && (
				<SortIssues
					perPage={perPage}
					onClickPerPage={onClickPerPage}
					sortState={sortState}
					onClickSortState={onClickSortState}
					searchParams={searchParams}
					setSearchParams={setSearchParams}
					setPerPage={setPerPage}
					setSortState={setSortState}
				/>
			)}
			{!loading && <IssueList issues={issues} />}
			{!loading && (
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
			)}
		</>
	);
}

export default HomePage;
