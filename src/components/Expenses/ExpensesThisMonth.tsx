import { Stack, useTheme } from "@mui/material"

import { Typography } from "@mui/material"
import DailyComparisonCard from "../UI/DailyComparisonCard"
import { DotsThreeCircleIcon } from "@phosphor-icons/react"

const ExpensesThisMonth = () => {
    const { palette } = useTheme()
    return (
        <DailyComparisonCard color={palette.danger.main} >
            <Stack gap={1}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="headingMedium">Expenses this month</Typography>
                    <DotsThreeCircleIcon size={28} color={palette.common.white} />
                </Stack>
                <Typography variant="headingExtraLarge">3 177.86zł</Typography>
            </Stack>
        </DailyComparisonCard>
    )
}

export default ExpensesThisMonth