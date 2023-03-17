import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues } from 'reducer/issues';
import IssueList from './components/Issues/IssuesList';
import Pagination from './components/Pagination/pagination';
import SortIssues from './components/SortIssues/sortIssues';

// 총 이슈
const totalIssue = 200;
let pageArr = [];
let pageNum;

function HomePage() {
	const [perPage, setPerPage] = useState(10);
	const [offset, setOffset] = useState(1);

	const issues = useSelector(state => state.issue.issues);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIssues({ perPage, offset }));
		const totalPageNum = totalIssue / perPage;
		pageNum = new Array(totalPageNum).fill(null);
		pageNum = pageNum.map((item, index) => (item = index + 1));
		pageArr = [];
		for (let i = 0; i < totalPageNum; i += perPage) {
			pageArr.push(pageNum.slice(i, i + 10));
		}
	}, [perPage, offset]);
	console.log(pageArr);

	return (
		<>
			<SortIssues perPage={perPage} setPerPage={setPerPage} />
			<IssueList issues={issues} />
			<Pagination
				perPage={perPage}
				totalIssue={totalIssue}
				offset={offset}
				setOffset={setOffset}
				pageNum={pageNum}
			/>
		</>
	);
}

export default HomePage;
