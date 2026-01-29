import {
	AirplaneTakeoffIcon,
	CakeIcon,
	GiftIcon,
	HouseLineIcon,
	InvoiceIcon,
	LampIcon,
	NeedleIcon,
	PackageIcon,
	PantsIcon,
	PiggyBankIcon,
	PillIcon,
	PizzaIcon,
	PopcornIcon,
	TrashIcon,
	TreePalmIcon,
	WalletIcon,
	WineIcon,
} from "@phosphor-icons/react";
import { format } from "date-fns";
import type { Category, CategoryType } from "./api/types";

export const getCategoryType = (category: Category): CategoryType => {
	switch (category) {
		case "Clothes":
			return "want";
		case "Hosuehold & Groceries":
			return "need";
		case "Entertainment":
			return "want";
		case "Wasted Money":
			return "waste";
		case "Home Decor":
			return "want";
		case "Drug Store":
			return "need";
		case "Monthly Expenses":
			return "need";
		case "Going Out":
			return "want";
		case "Take out":
			return "want";
		case "Travel":
			return "want";
		case "Savings & Investments":
			return "investment";
		case "Treat":
			return "want";
		case "Holiday":
			return "want";
		case "Tattoo":
			return "want";
		case "Gifts":
			return "want";
		default:
			return "need";
	}
};

export const getCategoryIcon = (category: Category): React.ReactNode => {
	switch (category) {
		case "Clothes":
			return <PantsIcon />;
		case "Hosuehold & Groceries":
			return <HouseLineIcon />;
		case "Entertainment":
			return <PopcornIcon />;
		case "Wasted Money":
			return <TrashIcon />;
		case "Home Decor":
			return <LampIcon />;
		case "Drug Store":
			return <PillIcon />;
		case "Monthly Expenses":
			return <InvoiceIcon />;
		case "Going Out":
			return <WineIcon />;
		case "Take out":
			return <PizzaIcon />;
		case "Travel":
			return <AirplaneTakeoffIcon />;
		case "Savings & Investments":
			return <PiggyBankIcon />;
		case "Treat":
			return <CakeIcon />;
		case "Holiday":
			return <TreePalmIcon />;
		case "Tattoo":
			return <NeedleIcon />;
		case "Gifts":
			return <GiftIcon />;
		case "Income":
			return <WalletIcon />;
		default:
			return <PackageIcon />;
	}
};

export const getCategoryColor = (category: Category): string => {
	switch (category) {
		case "Clothes":
			return "#C6A6C3";

		case "Hosuehold & Groceries":
			return "#A9D4D8";

		case "Entertainment":
			return "#E4A3B5";

		case "Wasted Money":
			return "#E6A3A3";

		case "Home Decor":
			return "#CFC39A";

		case "Drug Store":
			return "#F0C6D6";

		case "Monthly Expenses":
			return "#E6CF7A";

		case "Going Out":
			return "#C2A9E1";

		case "Take out":
			return "#F2B6A0";

		case "Travel":
			return "#B6C4E9";

		case "Savings & Investments":
			return "#A9D3B3";

		case "Treat":
			return "#D8B6E3";

		case "Holiday":
			return "#FFD6A1";

		case "Tattoo":
			return "#AEB1C7";

		case "Gifts":
			return "#FFF3A6";

		case "Income":
			return "#9ECE6A";

		default:
			return "#32344A";
	}
};

export const getPriceSyntax = (amount: number): string => {
	return `${amount.toFixed(2)}zł`;
};

export const formatDate = (date: string): string => {
	return format(new Date(date), "dd/MM/yyyy");
};
