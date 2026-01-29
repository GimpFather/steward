import { Divider, Stack } from "@mui/material";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Fragment, useState } from "react";
import { PAYMENTS } from "../api/static";
import type { Payment } from "../api/types";
import BorderBox from "../components/Common/BorderBox";
import InputField from "../components/Common/InputField";
import PaymentRecord from "../components/Common/PaymentRecord";

const PaymentsPageView = () => {
	const [filteredPayments, setFilteredPayments] = useState<Payment[]>(PAYMENTS);

	const handleSearch = (filter: string) => {
		setFilteredPayments(
			PAYMENTS.filter((payment) =>
				payment.title.toLowerCase().includes(filter.toLowerCase()),
			),
		);
	};

	return (
		<Stack gap={2}>
			<InputField
				placeholder="Search for a payment"
				adornment={{
					position: "start",
					icon: <MagnifyingGlassIcon size={24} />,
				}}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<BorderBox outlined>
				<Stack gap={1}>
					{filteredPayments.map((payment) => (
						<Fragment key={payment.id}>
							<PaymentRecord payment={payment} key={payment.id} />
							<Divider />
						</Fragment>
					))}
				</Stack>
			</BorderBox>
		</Stack>
	);
};

export default PaymentsPageView;
