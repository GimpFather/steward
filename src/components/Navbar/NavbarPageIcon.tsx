import { Box, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

type NavbarPageIconProps = {
	icon: React.ReactNode;
	href: string;
	disabled?: boolean;
};

const NavbarPageIcon = ({
	icon,
	href,
	disabled = false,
}: NavbarPageIconProps) => {
	const navigate = useNavigate();
	const { palette } = useTheme();

	const isActive = useLocation().pathname === href;

	const handleClick = () => {
		if (disabled || isActive) return;
		navigate(href);
	};

	const handleColor = () => {
		if (disabled) return palette.accent[400];
		return palette.primary.main;
	};

	return (
		<Box
			onClick={handleClick}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: handleColor(),
				cursor: disabled ? "not-allowed" : "pointer",
				...(isActive && {
					borderBottom: `2px solid ${palette.primary.main}`,
				}),
			}}
		>
			{icon}
		</Box>
	);
};

export default NavbarPageIcon;
