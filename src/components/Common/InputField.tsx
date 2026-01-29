import InputAdornment from "@mui/material/InputAdornment";
import InputBase, { type InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { memo } from "react";

const InputFieldBase = styled(InputBase)(({ theme }) => ({
	padding: "8px 12px",
	border: `2px solid ${theme.palette.primary.main}`,
	borderRadius: "16px",
	backgroundColor: theme.palette.accent[100],
	color: theme.palette.primary.main,
	"& .MuiInputBase-input": {
		...theme.typography.emphasizedBodyLarge,
		padding: 0,
	},
	"& .MuiInputBase-input::placeholder": {
		opacity: 1,
		color: theme.palette.accent[700],
	},
}));

const InputFieldAdornment = styled(InputAdornment)(
	({ theme, position, onClick }) => ({
		color: theme.palette.common.black,
		...(position === "start" && {
			marginLeft: 0,
		}),
		...(position === "end" && {
			marginRight: 0,
		}),
		...(onClick && {
			cursor: "pointer",
		}),
	}),
);

type Adornment = {
	position: "start" | "end";
	icon: React.ReactNode;
	onClick?: () => void;
};

type InputFieldProps = InputBaseProps &
	InputBaseProps & {
		adornment?: Adornment;
	};

const InputField = ({ adornment, ...props }: InputFieldProps) => {
	return (
		<InputFieldBase
			{...(adornment && {
				...(adornment.position === "start" && {
					startAdornment: (
						<InputFieldAdornment
							position="start"
							{...(adornment.onClick && { onClick: adornment.onClick })}
						>
							{adornment.icon}
						</InputFieldAdornment>
					),
				}),
				...(adornment.position === "end" && {
					endAdornment: (
						<InputFieldAdornment
							position="end"
							{...(adornment.onClick && { onClick: adornment.onClick })}
						>
							{adornment.icon}
						</InputFieldAdornment>
					),
				}),
			})}
			{...props}
		/>
	);
};

export default memo(InputField);
