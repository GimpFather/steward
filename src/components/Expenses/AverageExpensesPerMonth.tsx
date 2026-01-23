import { Typography, useTheme } from "@mui/material"
import DailyComparisonCard from "../UI/DailyComparisonCard"

const AverageExpensesPerMonth = () => {
    const { palette } = useTheme()

    return (
        <DailyComparisonCard color={palette.primary.main} outlined>
            <Typography variant="headingMedium">Average expenses per month</Typography>
            <Typography variant="headingExtraLarge" sx={{ fontSize: '3.5rem' }}>64.21zł</Typography>
        </DailyComparisonCard>
    )
}

export default AverageExpensesPerMonth