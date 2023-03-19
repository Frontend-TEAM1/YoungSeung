import LoadPage from 'components/Loading/loading';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IssueDetail from './IssueDetail/issueDetail';

function DetailPage() {
	const { id } = useParams();
	// const [issue, setIssue] = useState();
	const issues = useSelector(state => state.issue.issues);
	const loading = useSelector(state => state.issue.getTodoState.loading);
	const issue = issues.find(item => item.id == id);

	useEffect(() => {}, []);
	return (
		<>
			{loading && <LoadPage />}
			<IssueDetail issue={issue} />
		</>
	);
}

export default DetailPage;
