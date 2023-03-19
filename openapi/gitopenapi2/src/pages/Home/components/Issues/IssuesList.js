import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Issue from './Issue/Issue';

function IssueList({ issues }) {
	// console.log(issues.length);
	return (
		issues &&
		issues.map((issue, idx) => (
			<S.StyledLink key={idx} to={`/detail/${issue.id}`}>
				<Issue issue={issue} />
			</S.StyledLink>
		))
	);
}

export default IssueList;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.black};
`;
const S = {
	StyledLink,
};
