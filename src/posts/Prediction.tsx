import InnerPost from "./InnerPost";
import PredictionIcon from "@mui/icons-material/OnlinePrediction";

interface PredictionProps {
	expirationDate: Prediction["ExpirationDate"];
	isExpired: Prediction["IsExpired"];
	betAmount: Prediction["BetAmount"];
}

const Prediction = ({
	expirationDate,
	isExpired,
	betAmount,
}: PredictionProps) => (
	<InnerPost
		title={`Bet Expire${isExpired ? "d" : "s"}: ${expirationDate}`}
		tagline={`I'm betting ${betAmount} points on this. Tap to enter your bet.`}
		Icon={PredictionIcon}
	/>
);

export default Prediction;
