import { Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface NavbarChipProps {
    icon: React.ReactNode
    label: string
    onClick: () => void
    active?: boolean
}

const NavbarChip = ({ icon, label, onClick, active = false }: NavbarChipProps) => {
    const { palette } = useTheme()

    const backgroundColor = active ? palette.accent[400] : palette.accent[100]
    return (
        <Stack onClick={onClick} direction='row' alignItems='center' gap={1} sx={{ backgroundColor: backgroundColor, paddingX: 1, paddingY: 0.25, borderRadius: '16px', border: `2px solid ${palette.accent[900]}`, cursor: 'pointer', transition: 'background-color 0.2s ease' }}>
            {icon}
            <Typography variant="emphasizedBodyLarge">{label}</Typography>
        </Stack>
    )
}

export default NavbarChip