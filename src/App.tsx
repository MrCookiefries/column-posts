import { ThemeProvider, Typography, Stack, Box } from "@mui/material";
import theme from "./theme";
import Post from "./posts/Post";
import { v4 as genId } from "uuid";
import authorImage from "./assets/authorImage.jpg";

const App = () => {
	const posts = [
		<Typography variant="h2">Text Post</Typography>,
		<Post
			id={genId()}
			postText="Text of the post"
			postedTime="time"
			authorName="Max Robinson"
			authorUsername="maxbearcodes"
			authorExpertise="coding"
			authorImage={authorImage}
			isBookmarked={false}
			upvoteCount={39}
			downvoteCount={24}
			distrustCount={25}
			postType="text"
			isStacked={false}
		/>,
		<Typography variant="h2">Quote Post</Typography>,
		<Post
			id={genId()}
			postText="Text of the post"
			postedTime="time"
			authorName="Max Robinson"
			authorUsername="maxbearcodes"
			authorExpertise="coding"
			authorImage={authorImage}
			isBookmarked={true}
			upvoteCount={39}
			downvoteCount={24}
			distrustCount={25}
			postType="quote"
			isStacked={false}
			author="Author name"
			quote="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
		/>,
		<Typography variant="h2">Prediction Post</Typography>,
		<Post
			id={genId()}
			postText="Text of the post"
			postedTime="time"
			authorName="Max Robinson"
			authorUsername="maxbearcodes"
			authorExpertise="coding"
			authorImage={authorImage}
			isBookmarked={false}
			upvoteCount={39}
			downvoteCount={24}
			distrustCount={25}
			postType="prediction"
			isStacked={false}
			expirationDate="Oct. 22, 2021 at 09:00am"
			isExpired={true}
			betAmount={100}
		/>,
	];

	return (
		<ThemeProvider theme={theme}>
			<Stack spacing={6}>
				<Typography variant="h1">Column Posts</Typography>
				{posts.map((p, i) => (
					<Box key={i}>{p}</Box>
				))}
				<Typography variant="h2">Stacked Post</Typography>,
				<Post
					id={genId()}
					postText="Text of the post"
					postedTime="time"
					authorName="Max Robinson"
					authorUsername="maxbearcodes"
					authorExpertise="coding"
					authorImage={authorImage}
					isBookmarked={false}
					upvoteCount={39}
					downvoteCount={24}
					distrustCount={25}
					postType="text"
					isStacked={true}
					childPosts={[posts[3], posts[5]]}
				/>
			</Stack>
		</ThemeProvider>
	);
};

export default App;
