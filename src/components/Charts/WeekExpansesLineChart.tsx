import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import DailyComparisonCard from "../UI/DailyComparisonCard";
import { Stack, Typography, useTheme } from "@mui/material";

const data = [
    {
        name: 'Monday',
        expenses: 100,
        balance: 10000,
    },
    {
        name: 'Tuesday',
        expenses: 150,
        balance: 9850,
    },
    {
        name: 'Wednesday',
        expenses: 200,
        balance: 9650,
    },
    {
        name: 'Thursday',
        expenses: 250,
        balance: 9400,
    },
    {
        name: 'Friday',
        expenses: 50,
        balance: 9350,
    },
    {
        name: 'Saturday',
        expenses: 350,
        balance: 9000,
    },
    {
        name: 'Sunday',
        expenses: 100,
        balance: 8900,
    },
];

const WeekExpansesLineChart = () => {
    const { palette } = useTheme()
    return (
        <DailyComparisonCard color={palette.primary.main} outlined>
            <Stack gap={2}>
                <Typography variant="headingMedium">Average week expenses by weekday</Typography>
                <LineChart style={{ width: '100%', aspectRatio: 1, height: 358 }} responsive data={data}>
                    <CartesianGrid stroke={palette.primary.main} strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Line type="monotone" dataKey="expenses" stroke={palette.success.dark} />
                </LineChart>
            </Stack>
        </DailyComparisonCard>
    );
}

export default WeekExpansesLineChart;