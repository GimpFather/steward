import { Stack, Typography, useTheme } from "@mui/material";
import type { Payment } from "../../api/types";
import CategoryChip from "../UI/CategoryChip";
import { formatDate, getPriceSyntax } from "../../utils";
import { DotOutlineIcon, PencilSimpleLineIcon } from "@phosphor-icons/react";

type PaymentRecipeProps = {
   payment: Payment;
};

const PaymentRecipe = ({ payment }: PaymentRecipeProps) => {
   const { palette } = useTheme();
   return (
      <Stack direction="row" justifyContent="space-between">
         <Stack direction="row" gap={1}>
            <CategoryChip category={payment.category} withoutLabel />
            <Typography variant="emphasizedBodyExtraLarge">{`${payment.title}`}</Typography>
         </Stack>
         <Stack direction="row" alignItems="center" >
            <Stack direction="row" alignItems="center" gap={1} >
               <Typography variant="emphasizedBodyLarge" sx={{ minWidth: '100px', textAlign: 'right' }}>{getPriceSyntax(payment.amount)}</Typography>
               <DotOutlineIcon size={24} />
               <Typography variant="emphasizedBodyLarge" sx={{ minWidth: '100px', textAlign: 'left' }}
               >{formatDate(payment.date)}</Typography>
            </Stack>
            <PencilSimpleLineIcon size={24} style={{ border: '2px solid', borderColor: palette.primary.main, borderRadius: '100%', padding: 2 }} />
         </Stack>
      </Stack>
   );
};

export default PaymentRecipe;
