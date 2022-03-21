type Count = {
	Upvote: number;
	Downvote: number;
	Distrust: number;
};
type Author = {
	Name: string;
	Image: string;
	Username: string;
	Expertise: string;
};
type Post = {
	Time: string;
	Bookmarked: boolean;
	Text: string;
	Type: "text" | "prediction" | "quote";
};
type Prediction = {
	ExpirationDate: string;
	IsExpired: boolean;
	BetAmount: number;
};
type Quote = {
	Author: string;
	Text: string;
};
