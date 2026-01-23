import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import DailyComparisonCard from "../UI/DailyComparisonCard";
import { Stack, Typography, useTheme } from "@mui/material";

const data = [
    {
        name: 'January',
        expenses: 100,
        balance: 5000,
    },
    {
        name: 'February',
        expenses: 150,
        balance: 6050,
    },
    {
        name: 'March',
        expenses: 200,
        balance: 9650,
    },
    {
        name: 'April',
        expenses: 250,
        balance: 8400,
    },
    {
        name: 'May',
        expenses: 50,
        balance: 6350,
    },
    {
        name: 'June',
        expenses: 350,
        balance: 5000,
    },
    {
        name: 'July',
        expenses: 100,
        balance: 8900,
    },
    {
        name: 'August',
        expenses: 100,
        balance: 8900,
    },
    {
        name: 'September',
        expenses: 100,
        balance: 5900,
    },
    {
        name: 'October',
        expenses: 100,
        balance: 4900,
    },
    {
        name: 'November',
        expenses: 100,
        balance: 4900,
    },
    {
        name: 'December',
        expenses: 100,
        balance: 9900,
    },
];

const MonthExpansesLineChart = () => {
    const { palette } = useTheme()
    return (
        <DailyComparisonCard color={palette.primary.main} outlined>
            <Stack gap={2}>
                <Typography variant="headingMedium">Average month expenses</Typography>
                <LineChart style={{ width: '100%', aspectRatio: 1, height: 358 }} responsive data={data}>
                    <CartesianGrid stroke={palette.primary.main} strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Line type="monotone" dataKey="balance" stroke={palette.success.dark} />
                </LineChart>
            </Stack>
        </DailyComparisonCard>
    );
}

export default MonthExpansesLineChart;