import { Stack } from "@mui/material";
import PostActionBar from "./PostActionBar";
import PostContent from "./PostContent";

const SubPost = ({ post: { props } }: any) => {
	return (
		<Stack>
			<PostContent {...props} isSubPost={true} />
			<PostActionBar {...props} />
		</Stack>
	);
};

export default SubPost;
