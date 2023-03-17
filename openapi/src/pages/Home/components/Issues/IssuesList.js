import { Link } from 'react-router-dom';
import Issue from './Issue/Issue';

function IssueList({ issues }) {
	// console.log(issues.length);
	return (
		issues &&
		issues.map((issue, idx) => (
			<Link key={idx} to={`/detail/${issue.id}`}>
				<Issue issue={issue} />
			</Link>
		))
	);
}

export default IssueList;
