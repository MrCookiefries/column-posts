import { Typography, Stack } from "@mui/material";
import Prediction from "./Prediction";
import Quote from "./Quote";
import Bookmark from "./Bookmark";

// common props
interface BasePostContentProps {
	postText: Post["Text"];
	postType: Post["Type"];
	expirationDate: Prediction["ExpirationDate"];
	isExpired: Prediction["IsExpired"];
	betAmount: Prediction["BetAmount"];
	author: Quote["Author"];
	quote: Quote["Text"];
}

// additional props based on isSubPost
type IsSubPostProps =
	| { isSubPost?: false }
	| { isSubPost?: true; isBookmarked: Post["Bookmarked"] };

type PostContentProps = BasePostContentProps & IsSubPostProps;

const PostContent = ({
	postText,
	postType,
	expirationDate,
	isExpired,
	betAmount,
	author,
	quote,
	isSubPost,
	...props
}: PostContentProps) => {
	const { isBookmarked }: any = props;

	return (
		<>
			<Stack direction="row">
				<Typography sx={{ flex: 1 }}>{postText}</Typography>
				{isSubPost ? <Bookmark isBookmarked={isBookmarked} /> : null}
			</Stack>
			{postType === "prediction" ? (
				<Prediction
					expirationDate={expirationDate}
					isExpired={isExpired}
					betAmount={betAmount}
				/>
			) : postType === "quote" ? (
				<Quote author={author} quote={quote} />
			) : null}
		</>
	);
};

export default PostContent;
