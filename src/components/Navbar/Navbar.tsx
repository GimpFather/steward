import { Stack, useTheme } from "@mui/material";
import {
	ChalkboardIcon,
	ChartBarIcon,
	MoneyIcon,
	XIcon,
} from "@phosphor-icons/react";
import NavbarPageIcon from "./NavbarPageIcon";

const Navbar = () => {
	const { palette } = useTheme();

	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			sx={{
				padding: 2,
				backgroundColor: palette.accent[100],
				border: `2px solid ${palette.primary.main}`,
				borderRadius: "16px",
			}}
		>
			<Stack direction="row" alignItems="center" gap={1}>
				<NavbarPageIcon icon={<ChalkboardIcon size={28} />} href="/" />
				<NavbarPageIcon icon={<MoneyIcon size={28} />} href="/payments" />
				<NavbarPageIcon
					icon={<ChartBarIcon size={28} />}
					href="/stats"
					disabled
				/>
			</Stack>
			<Stack direction="column" alignItems="center" gap={1}>
				<NavbarPageIcon icon={<XIcon size={28} />} href="/logout" disabled />
			</Stack>
		</Stack>
	);
};

export default Navbar;
