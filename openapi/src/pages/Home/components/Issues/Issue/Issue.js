import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function Issue({ issue }) {
	// console.log(issue);
	return (
		<S.IssueWrapper>
			<S.IssueHeader>
				<div>{issue.id}</div>
				<div>{issue.title}</div>
				<div>{issue.comments}</div>
			</S.IssueHeader>
			<S.IssueContent>
				<div>{issue.body}</div>
			</S.IssueContent>
			<S.IssueFooter>
				<div>{issue.user.login}</div>
				<div>{issue.created_at}</div>
			</S.IssueFooter>
		</S.IssueWrapper>
	);
}

export default Issue;

const IssueWrapper = styled.div`
	border: 1px solid black;
`;

const IssueHeader = styled.div`
	${flexCenter}
	justify-content: space-between;
	margin: ${({ theme }) => theme.margin.xLarge};
`;

const IssueContent = styled.div``;

const IssueFooter = styled.div`
	${flexCenter}
	justify-content: flex-end;
	margin: ${({ theme }) => theme.margin.xLarge};
`;

const S = {
	IssueWrapper,
	IssueHeader,
	IssueContent,
	IssueFooter,
};
