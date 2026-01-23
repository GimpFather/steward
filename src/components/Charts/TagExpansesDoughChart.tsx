import { BarChart, Bar, CartesianGrid, YAxis, XAxis } from 'recharts';
import DailyComparisonCard from '../UI/DailyComparisonCard';
import { Typography, useTheme } from '@mui/material';

const data = [
    {
        name: 'Page A',
        expenses: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        expenses: 3000,
        amt: 2210,
    },
    {
        name: 'Page C',
        expenses: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        expenses: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        expenses: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        expenses: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        expenses: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const TagExpansesDoughChart = () => {
    const { palette } = useTheme()
    return (
        <DailyComparisonCard color={palette.primary.main} outlined>
            <Typography variant="headingMedium">Categories</Typography>
            <BarChart
                style={{ width: '100%', aspectRatio: 1, height: 320 }}
                responsive
                data={data}
            >
                <CartesianGrid stroke={palette.primary.main} strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Bar dataKey="expenses" fill={palette.success.dark} />
            </BarChart>
        </DailyComparisonCard>
    );
};

export default TagExpansesDoughChart;