interface PostAuthorPhotoProps {
	authorImage: Author["Image"];
	authorName: Author["Name"];
}

const PostAuthorPhoto = ({ authorImage, authorName }: PostAuthorPhotoProps) => {
	return (
		<img
			style={{ borderRadius: "40%" }}
			width="50px"
			height="auto"
			src={authorImage}
			alt={authorName}
		/>
	);
};

export default PostAuthorPhoto;
