import { Stack, useTheme } from "@mui/material";

type BorderBoxProps = {
	children: React.ReactNode;
	color?: string;
	outlined?: boolean;
};

const BorderBox = ({ children, color, outlined = false }: BorderBoxProps) => {
	const { palette } = useTheme();
	const leadingColor = color ?? palette.primary.main;

	return (
		<Stack
			gap={0.5}
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: outlined ? palette.accent[100] : leadingColor,
				borderRadius: "16px",
				padding: 2,
				color: outlined ? leadingColor : palette.common.white,
				border: `2px solid ${palette.primary.main}`,
			}}
		>
			{children}
		</Stack>
	);
};

export default BorderBox;
