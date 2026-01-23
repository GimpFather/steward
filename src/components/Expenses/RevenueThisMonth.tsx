import { Stack, Typography, useTheme } from "@mui/material"
import DailyComparisonCard from "../UI/DailyComparisonCard"
import { DotsThreeCircleIcon } from "@phosphor-icons/react"

const RevenueThisMonth = () => {
    const { palette } = useTheme()
    return (
        <DailyComparisonCard outlined color={palette.primary.main}>
            <Stack gap={1}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="headingMedium">Revenue this month</Typography>
                    <DotsThreeCircleIcon size={28} color={palette.primary.main} />
                </Stack>
                <Typography variant="headingExtraLarge">13 540.26zł</Typography>
            </Stack>
        </DailyComparisonCard>
    )
}

export default RevenueThisMonth