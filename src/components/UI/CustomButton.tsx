import { memo } from "react";
import ButtonBase, { type ButtonBaseProps as ButtonBaseProps } from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import type { CustomColorOptions, CommonColors } from "@mui/material/styles";

type NBButtonProps = Omit<ButtonBaseProps, "color"> & {
   loading?: boolean;
   color?: CustomColorOptions;
   icon?: React.ReactNode;
   fullWidth?: boolean;
};

const CustomButtonBase = styled(ButtonBase)<{ color?: CustomColorOptions }>(({ theme, color }) => {
   const bodyColor = color ? (theme.palette[color] as CommonColors) : theme.palette.primary;
   const captionColor = color === "primary" ? theme.palette.common.white : theme.palette.common.dark;

   return {
      ...theme.typography.emphasizedBodyMedium,
      transition: "background-color 0.3s ease",
      padding: "0px 24px",
      position: "relative",
      height: 40,
      alignItems: "center",
      backgroundColor: bodyColor.main,
      color: captionColor,
      border: "0.094rem solid",
      borderColor: theme.palette.common.black,
      borderRadius: "16px",
      "&:hover": {
         backgroundColor: bodyColor.dark,
      },
      "&:active": {
         backgroundColor: bodyColor.light,
      },
      "&:disabled": {
         backgroundColor: theme.palette.accent[500],
         color: theme.palette.accent[200],
         borderColor: theme.palette.accent[800],
         cursor: "not-allowed",
      },
   };
});

const IconContainer = styled("span")(() => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   marginRight: 8,
   svg: {
      width: 24,
      height: 24,
   },
}));

const CustomButton: React.FC<NBButtonProps> = ({ children, loading, color, icon, disabled, fullWidth, ...props }) => {
   return (
      <CustomButtonBase disableRipple disabled={loading || disabled} color={color} {...props}>
         {icon && <IconContainer>{icon}</IconContainer>}
         {children}
      </CustomButtonBase>
   );
};

export default memo(CustomButton);
