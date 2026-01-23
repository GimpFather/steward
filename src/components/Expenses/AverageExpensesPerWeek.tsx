import { Typography, useTheme } from "@mui/material"
import DailyComparisonCard from "../UI/DailyComparisonCard"

const AverageExpensesPerWeek = () => {
    const { palette } = useTheme()

    return (
        <DailyComparisonCard color={palette.primary.main}>
            <Typography variant="headingMedium">Average expenses per week</Typography>
            <Typography variant="headingExtraLarge" sx={{ fontSize: '3.5rem' }}>64.21zł</Typography>
        </DailyComparisonCard>
    )
}

export default AverageExpensesPerWeek