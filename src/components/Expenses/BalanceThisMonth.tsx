import { Stack, Typography, useTheme } from "@mui/material"
import DailyComparisonCard from "../UI/DailyComparisonCard"
import { DotsThreeCircleIcon } from "@phosphor-icons/react"

const BalanceThisMonth = () => {
    const { palette } = useTheme()
    return (
        <DailyComparisonCard color={palette.success.main}>
            <Stack gap={1}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="headingMedium">Balance this month</Typography>
                    <DotsThreeCircleIcon size={28} color={palette.common.white} />
                </Stack>
                <Typography variant="headingExtraLarge">10 362.40zł</Typography>
            </Stack>
        </DailyComparisonCard>
    )
}

export default BalanceThisMonth