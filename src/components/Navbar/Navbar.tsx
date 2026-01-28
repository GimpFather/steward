import { Container, Stack, Typography, useTheme } from "@mui/material";
import {
   BrainIcon,
   CoinIcon,
   MoneyWavyIcon,
   ReceiptIcon,
   StackPlusIcon,
   UploadIcon,
} from "@phosphor-icons/react";
import CustomButton from "../UI/CustomButton";
import NavbarChip from "./NavbarChip";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
   const { palette } = useTheme();
   const navigate = useNavigate();
   const location = useLocation();

   const [activeChip, setActiveChip] = useState<string>(location.pathname.split("/")[1]);

   const handleChipClick = (label: string) => {
      setActiveChip(label);
      if (label === "") {
         navigate("/");
      } else {
         navigate(`/${label}`);
      }
   };

   return (
      <Container maxWidth="md" sx={{ padding: 2 }}>
         <Stack gap={1}>
            <Stack
               gap={1}
               direction="row"
               justifyContent="space-between"
               alignItems="center"
               sx={{ overflowX: "auto" }}
            >
               <Stack direction="row" alignItems="center" gap={0.75}>
                  <CoinIcon color={palette.primary.main} size={28} />
                  <Typography variant="headingLarge">Steward</Typography>
               </Stack>
               <Stack direction="row" alignItems="center" gap={1}>
                  <CustomButton color="primary" icon={<UploadIcon />}>
                     Import
                  </CustomButton>
                  <CustomButton color="primary" icon={<StackPlusIcon />}>
                     Add payment
                  </CustomButton>
               </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} sx={{ overflowX: "auto" }}>
               <NavbarChip
                  icon={<MoneyWavyIcon size={28} color={palette.primary.main} />}
                  label="Expenses"
                  onClick={() => {
                     handleChipClick("");
                  }}
                  active={activeChip === ""}
               />
               <NavbarChip
                  icon={<ReceiptIcon size={28} color={palette.primary.main} />}
                  label="Payments"
                  onClick={() => {
                     handleChipClick("payments");
                  }}
                  active={activeChip === "payments"}
               />
               <NavbarChip
                  icon={<BrainIcon size={28} color={palette.primary.main} />}
                  label="Deep dive"
                  onClick={() => {
                     handleChipClick("deep-dive");
                  }}
                  active={activeChip === "deep-dive"}
               />
            </Stack>
         </Stack>
      </Container>
   );
};

export default Navbar;
