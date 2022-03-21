import InnerPost from "./InnerPost";
import QuoteIcon from "@mui/icons-material/FormatQuoteOutlined";

interface QuoteProps {
	author: Quote["Author"];
	quote: Quote["Text"];
}

const Quote = ({ author, quote }: QuoteProps) => (
	<InnerPost title={quote} tagline={`-${author}`} Icon={QuoteIcon} />
);

export default Quote;
