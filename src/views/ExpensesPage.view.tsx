import Grid from "@mui/material/Grid"
import PageContainer from "../components/UI/PageContainer"
import ExpensesThisWeekBox from "../components/Expenses/ExpensesThisWeekBox"
import RevenueThisMonth from "../components/Expenses/RevenueThisMonth"
import { Stack } from "@mui/material"
import ExpensesThisMonth from "../components/Expenses/ExpensesThisMonth"

import BalanceThisMonth from "../components/Expenses/BalanceThisMonth"
import WeekExpansesLineChart from "../components/Charts/WeekExpansesLineChart"
import AverageExpensesPerDay from "../components/Expenses/AverageExpensesPerDay"
import AverageExpensesPerMonth from "../components/Expenses/AverageExpensesPerMonth"
import AverageExpensesPerWeek from "../components/Expenses/AverageExpensesPerWeek"
import MonthExpansesLineChart from "../components/Charts/MonthExpansesLineChart"

const ExpensesPageView = () => {
    return (
        <PageContainer>
            <Stack spacing={2}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <ExpensesThisWeekBox />
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack direction='column' spacing={2}>
                            <Grid size={{ xs: 12, md: 12 }}>
                                <RevenueThisMonth />
                            </Grid>
                            <Grid size={{ xs: 12, md: 12 }}>
                                <ExpensesThisMonth />
                            </Grid>
                            <Grid size={{ xs: 12, md: 12 }}>
                                <BalanceThisMonth />
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <WeekExpansesLineChart />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <AverageExpensesPerDay />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <AverageExpensesPerWeek />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <AverageExpensesPerMonth />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <MonthExpansesLineChart />
                    </Grid>
                </Grid>
            </Stack>
        </PageContainer >
    )
}

export default ExpensesPageView