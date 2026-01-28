import PageContainer from "../components/UI/PageContainer";
import type { Payment } from "../api/types";
import PaymentRecipe from "../components/Payments/PaymentRecipe";
import { Divider, Stack } from "@mui/material";
import InputField from "../components/UI/InputField";
import { useState } from "react";
import DailyComparisonCard from "../components/UI/DailyComparisonCard";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const PaymentsPageView = () => {
   const payments: Payment[] = [
      {
         id: 1,
         amount: 100,
         date: "2026-01-23",
         title: "Big Star",
         description: "Sydneey Sweeney Jeans",
         category: "Clothes",
         categoryType: "want",
      },
      {
         id: 2,
         amount: 24,
         date: "2026-01-24",
         title: "Pills",
         description: "Sydneey Sweeney Jeans",
         category: "Drug Store",
         categoryType: "want",
      },
      {
         id: 3,
         amount: 24,
         date: "2026-11-09",
         title: "Concert",
         description: "Concert",
         category: "Entertainment",
         categoryType: "want",
      },
      {
         id: 4,
         amount: 124,
         date: "2026-11-09",
         title: "Santa Clause Box",
         description: "Concert",
         category: "Gifts",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 124,
         date: "2026-11-09",
         title: "Pizzatopia",
         description: "Concert",
         category: "Going Out",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 124,
         date: "2026-11-09",
         title: "Spain",
         description: "Concert",
         category: "Holiday",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 124,
         date: "2026-11-09",
         title: "Zara Home",
         description: "Decor",
         category: "Home Decor",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 624,
         date: "2026-11-09",
         title: "Biedronka",
         description: "Biedronka",
         category: "Hosuehold & Groceries",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 3624,
         date: "2026-11-09",
         title: "Rent",
         description: "Rent",
         category: "Monthly Expenses",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 2000,
         date: "2026-11-09",
         title: "XTB",
         description: "XTB",
         category: "Savings & Investments",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 50,
         date: "2026-11-09",
         title: "McDonalds",
         description: "McDonalds",
         category: "Take out",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 2250,
         date: "2026-11-09",
         title: "Rent",
         description: "Adrian",
         category: "Tattoo",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 2,
         date: "2026-11-09",
         title: "Taxi",
         description: "Adrian",
         category: "Travel",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 52,
         date: "2026-11-09",
         title: "GamePass",
         description: "Adrian",
         category: "Wasted Money",
         categoryType: "want",
      },
      {
         id: 5,
         amount: 52,
         date: "2026-11-09",
         title: "Cookies",
         description: "Adrian",
         category: "Treat",
         categoryType: "want",
      },
   ];

   const [filteredPayments, setFilteredPayments] = useState<Payment[]>(payments);

   const handleSearch = (filter: string) => {
      setFilteredPayments(payments.filter((payment) => payment.title.toLowerCase().includes(filter.toLowerCase())));
   };

   return (
      <PageContainer>
         <Stack gap={2}>
            <InputField placeholder="Search for a payment" adornment={{ position: "start", icon: <MagnifyingGlassIcon size={24} /> }} onChange={(e) => handleSearch(e.target.value)} />
            <DailyComparisonCard
               outlined
            >
               <Stack gap={1}>
                  {filteredPayments.map((payment, index) => (
                     <>
                        <PaymentRecipe payment={payment} key={index} />
                        <Divider />
                     </>
                  ))}
               </Stack>
            </DailyComparisonCard>
         </Stack>
      </PageContainer >
   );
};

export default PaymentsPageView;
