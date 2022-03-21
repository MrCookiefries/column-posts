import { Stack, Button, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDownOutlined";
import HeartBrokenIcon from "@mui/icons-material/HeartBrokenOutlined";
import AddCommentIcon from "@mui/icons-material/AddCommentOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";

interface PostActionBarProps {
	upvoteCount: Count["Upvote"];
	downvoteCount: Count["Downvote"];
	distrustCount: Count["Distrust"];
	commentCount?: number;
}

const PostActionBar = ({
	upvoteCount,
	downvoteCount,
	distrustCount,
	commentCount = Math.floor(Math.random() * 60) + 1,
}: PostActionBarProps) => {
	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Button color="inherit" startIcon={<ThumbUpIcon />}>
				{upvoteCount}
			</Button>
			<Button color="inherit" startIcon={<ThumbDownIcon />}>
				{downvoteCount}
			</Button>
			<Button color="inherit" startIcon={<HeartBrokenIcon />}>
				{distrustCount}
			</Button>
			<Button color="inherit" startIcon={<AddCommentIcon />}>
				{commentCount}
			</Button>
			<IconButton color="inherit">
				<MoreVertIcon />
			</IconButton>
		</Stack>
	);
};

export default PostActionBar;
