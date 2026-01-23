import { Typography, useTheme } from "@mui/material"
import { Stack } from "@mui/material"
import DailyComparisonCard from "../UI/DailyComparisonCard"
import { DotsThreeCircleIcon, TrendDownIcon } from "@phosphor-icons/react"

const ExpensesThisWeekBox = () => {
    const { palette } = useTheme()
    return (
        <DailyComparisonCard color={palette.primary.main}>
            <Stack justifyContent='space-between' gap={2} sx={{ height: '100%' }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="headingMedium">Expenses this week</Typography>
                    <DotsThreeCircleIcon size={28} color={palette.common.white} />
                </Stack>
                <Stack>
                    <Typography variant="headingExtraLarge" sx={{ fontSize: '3.5rem' }}>3012.20zł</Typography>
                    <Typography variant="headingSmall" sx={{ fontSize: '1.75rem' }}>6 payments</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' gap={1.25}>
                    <Stack direction='row' gap={1} alignItems='center' sx={{ backgroundColor: palette.success.main, paddingX: 1, paddingY: 0.25, borderRadius: '25px', }}>
                        <TrendDownIcon size={28} color={palette.common.white} weight="fill" />
                        <Typography variant="emphasizedBodyExtraLarge">10.2%</Typography>
                    </Stack>
                    <Typography variant="bodyExtraLarge">less than last week</Typography>
                </Stack>
            </Stack>
        </DailyComparisonCard>
    )
}

export default ExpensesThisWeekBox