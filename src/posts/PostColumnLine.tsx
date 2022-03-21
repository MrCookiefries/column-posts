import { Typography, Stack } from "@mui/material";
import LogoIcon from "@mui/icons-material/CurrencyLira";
import Bookmark from "./Bookmark";

interface PostColumnLineProps {
	isBookmarked: Post["Bookmarked"];
}

const PostColumnLine = ({ isBookmarked }: PostColumnLineProps) => (
	<Stack direction="row" alignItems="center">
		<LogoIcon />
		<Typography>Column name</Typography>
		<Bookmark isBookmarked={isBookmarked} />
	</Stack>
);
export default PostColumnLine;
