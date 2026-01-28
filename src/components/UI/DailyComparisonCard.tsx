import { Stack, useTheme } from "@mui/material"

type DailyComparisonCardProps = {
    children: React.ReactNode
    color?: string
    outlined?: boolean
}

const DailyComparisonCard = ({ children, color, outlined = false }: DailyComparisonCardProps) => {
    const { palette } = useTheme()
    return (
        <Stack gap={0.5}
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: outlined ? palette.accent[100] : color,
                borderRadius: '16px',
                padding: 2,
                color: outlined ? color : palette.common.white,
                border: `2px solid ${palette.primary.main}`,
            }}>
            {children}
        </Stack>
    )
}

export default DailyComparisonCard