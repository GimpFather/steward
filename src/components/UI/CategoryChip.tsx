import { Icon, Stack, Typography, useTheme } from "@mui/material";
import type { Category } from "../../api/types";
import { getCategoryColor, getCategoryIcon } from "../../utils";

type CategoryChipProps = {
   category: Category;
   withoutLabel?: boolean;
};

const CategoryChip = ({ category, withoutLabel }: CategoryChipProps) => {
   const { palette } = useTheme();

   const label = category;
   const icon = getCategoryIcon(category);
   const color = getCategoryColor(category);

   return (
      <Stack
         gap={1}
         direction="row"
         alignItems="center"
         sx={{
            paddingX: 1,
            paddingY: 0.25,
            border: `2px solid ${palette.primary.main}`,
            borderRadius: "16px",
            backgroundColor: color,
            width: "fit-content",
         }}
      >
         <Icon sx={{ fontSize: 28 }}>{icon}</Icon>
         {!withoutLabel && <Typography variant="emphasizedBodyLarge">{label}</Typography>}
      </Stack>
   );
};

export default CategoryChip;
