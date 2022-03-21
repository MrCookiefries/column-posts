import { SvgIconComponent } from "@mui/icons-material";
import { Stack, Box, Typography } from "@mui/material";

interface SubPostProps {
	title: string;
	tagline: string;
	Icon: SvgIconComponent;
}

const InnerPost = ({ title, tagline, Icon }: SubPostProps) => (
	<Stack
		direction="row"
		alignItems="flex-start"
		spacing={2}
		sx={{
			border: 2,
			borderRadius: 3,
			borderColor: "lightGray",
			my: 1,
			mr: 1,
			p: 2,
		}}
	>
		<Box>
			<Box
				sx={{
					color: "background.paper",
				}}
			>
				<Icon sx={{ bgcolor: "success.main" }} color="inherit" />
			</Box>
		</Box>
		<Box>
			<Typography variant="subtitle1">
				<strong>{title}</strong>
			</Typography>
			<Typography color="success.main">{tagline}</Typography>
		</Box>
	</Stack>
);

export default InnerPost;
