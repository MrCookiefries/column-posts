import { Box, Stack, Paper } from "@mui/material";
import PostActionBar from "./PostActionBar";
import PostAuthorPhoto from "./PostAuthorPhoto";
import PostAuthorLine from "./PostAuthorLine";
import PostColumnLine from "./PostColumnLine";
import PostContent from "./PostContent";
import SubPost from "./SubPost";
import { v4 as genId } from "uuid";

// props every post has
interface BasePostProps {
	id: string;
	postText: Post["Text"];
	postedTime: Post["Time"];
	authorName: Author["Name"];
	authorUsername: Author["Username"];
	authorExpertise: Author["Expertise"];
	authorImage: Author["Image"];
	isBookmarked: Post["Bookmarked"];
	upvoteCount: Count["Upvote"];
	downvoteCount: Count["Downvote"];
	distrustCount: Count["Distrust"];
}

// additional props based on postType
type PostTypeProps =
	| {
			postType: "prediction";
			expirationDate: Prediction["ExpirationDate"];
			isExpired: Prediction["IsExpired"];
			betAmount: Prediction["BetAmount"];
	  }
	| { postType: "quote"; author: Quote["Author"]; quote: Quote["Text"] }
	| { postType: "text" };

// additional props based on isStacked
type IsStackedProps =
	| { isStacked?: false }
	| { isStacked?: true; childPosts: JSX.Element[] };

type PostProps = BasePostProps & PostTypeProps & IsStackedProps;

const Post = ({
	id,
	postText,
	postedTime,
	authorName,
	authorUsername,
	authorExpertise,
	authorImage,
	isBookmarked,
	upvoteCount,
	downvoteCount,
	distrustCount,
	postType,
	isStacked = false,
	...props
}: PostProps) => {
	const {
		expirationDate,
		isExpired,
		betAmount,
		author,
		quote,
		childPosts,
	}: any = props;

	return (
		<Stack
			id={id}
			component={Paper}
			elevation={4}
			direction="row"
			sx={{ maxWidth: "768px", p: 1 }}
		>
			<Stack alignItems="center">
				<PostAuthorPhoto authorImage={authorImage} authorName={authorName} />
			</Stack>
			<Box sx={{ flex: 1 }}>
				<PostColumnLine isBookmarked={isBookmarked} />
				<PostAuthorLine
					authorName={authorName}
					authorUsername={authorUsername}
					authorExpertise={authorExpertise}
					postedTime={postedTime}
				/>
				<PostContent
					postText={postText}
					postType={postType}
					expirationDate={expirationDate}
					isExpired={isExpired}
					betAmount={betAmount}
					author={author}
					quote={quote}
					isSubPost={false}
				/>
				<PostActionBar
					upvoteCount={upvoteCount}
					downvoteCount={downvoteCount}
					distrustCount={distrustCount}
				/>
				{Array.isArray(childPosts) ? (
					<Stack spacing={2} sx={{ mt: 2 }}>
						{childPosts.map((post: any) => (
							<SubPost key={genId()} post={post} />
						))}
					</Stack>
				) : null}
			</Box>
		</Stack>
	);
};

export default Post;
