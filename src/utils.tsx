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
   WineIcon,
} from "@phosphor-icons/react";
import type { Category, CategoryType } from "./api/types";
import { format } from "date-fns";

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
      default:
         return <PackageIcon />;
   }
};

export const getCategoryColor = (category: Category): string => {
   switch (category) {
      case "Clothes":
         return "#C6A6C3"; // pastel plum

      case "Hosuehold & Groceries":
         return "#A9D4D8"; // pastel teal

      case "Entertainment":
         return "#E4A3B5"; // soft rose

      case "Wasted Money":
         return "#E6A3A3"; // pastel red (still warning)

      case "Home Decor":
         return "#CFC39A"; // soft olive

      case "Drug Store":
         return "#F0C6D6"; // blush pink

      case "Monthly Expenses":
         return "#E6CF7A"; // pastel gold

      case "Going Out":
         return "#C2A9E1"; // lavender night

      case "Take out":
         return "#F2B6A0"; // soft coral

      case "Travel":
         return "#B6C4E9"; // pastel indigo

      case "Savings & Investments":
         return "#A9D3B3"; // mint green

      case "Treat":
         return "#D8B6E3"; // candy lavender

      case "Holiday":
         return "#FFD6A1"; // soft amber

      case "Tattoo":
         return "#AEB1C7"; // dusty slate

      case "Gifts":
         return "#FFF3A6"; // pastel yellow

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
