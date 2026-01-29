import { Stack, Typography } from "@mui/material";
import { DotOutlineIcon } from "@phosphor-icons/react";
import type { Payment } from "../../api/types";
import { formatDate, getPriceSyntax } from "../../utils";
import CustomChip from "./CustomChip";

type PaymentRecordProps = {
	payment: Payment;
};

const PaymentRecord = ({ payment }: PaymentRecordProps) => {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
			}}
		>
			<Stack direction="row" gap={1}>
				<CustomChip category={payment.category} withoutLabel />
				<Typography variant="emphasizedBodyExtraLarge">{`${payment.title}`}</Typography>
			</Stack>
			<Stack direction="row" alignItems="center">
				<Stack direction="row" alignItems="center" gap={1}>
					<Typography
						variant="emphasizedBodyLarge"
						sx={{ minWidth: "100px", textAlign: "right" }}
					>
						{getPriceSyntax(payment.amount)}
					</Typography>
					<DotOutlineIcon size={24} />
					<Typography
						variant="emphasizedBodyLarge"
						sx={{ minWidth: "86px", textAlign: "left" }}
					>
						{formatDate(payment.date)}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default PaymentRecord;
