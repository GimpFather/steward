import { Container, Stack, Typography, useTheme } from "@mui/material";
import { CoinIcon, MoneyWavyIcon, ReceiptIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import NavbarChip from "./NavbarChip";

const Navbar = () => {
	const { palette } = useTheme();
	const navigate = useNavigate();
	const location = useLocation();

	const [activeChip, setActiveChip] = useState<string>(
		location.pathname.split("/")[1],
	);

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
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Stack direction="row" alignItems="center" gap={0.75}>
					<CoinIcon color={palette.primary.main} size={28} />
					<Typography variant="headingLarge">Steward</Typography>
				</Stack>
				<Stack direction="row" alignItems="center" gap={1}>
					<NavbarChip
						icon={<MoneyWavyIcon size={28} color={palette.primary.main} />}
						label="Dashboard"
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
				</Stack>
			</Stack>
		</Container>
	);
};

export default Navbar;
