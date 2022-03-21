import { Typography, useMediaQuery } from "@mui/material";

interface PostAuthorLineProps {
	authorName: Author["Name"];
	authorUsername: Author["Username"];
	authorExpertise: Author["Expertise"];
	postedTime: Post["Time"];
}

const PostAuthorLine = ({
	authorName,
	authorUsername,
	authorExpertise,
	postedTime,
}: PostAuthorLineProps) => {
	const isMobile = useMediaQuery("(max-width: 500px)");

	return (
		<Typography>
			<strong>{authorName}</strong>
			&nbsp;@{authorUsername}
			{isMobile ? null : <> &bull; {authorExpertise}</>}
			&nbsp;&bull; {postedTime}
		</Typography>
	);
};

export default PostAuthorLine;
