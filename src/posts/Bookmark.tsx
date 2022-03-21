import { IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkFilledIcon from "@mui/icons-material/Bookmark";

interface BookmarkProps {
	isBookmarked: Post["Bookmarked"];
}

const Bookmark = ({ isBookmarked }: BookmarkProps) => {
	return (
		<IconButton
			color={isBookmarked ? "success" : "inherit"}
			sx={{ ml: "auto" }}
		>
			{isBookmarked ? <BookmarkFilledIcon /> : <BookmarkBorderIcon />}
		</IconButton>
	);
};

export default Bookmark;
