import { Stack, Typography } from "@mui/material";
import InputField from "../../UI/InputField";

type DateFilterProps = {
    handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateFilter = ({ handleDateChange }: DateFilterProps) => {

    return (
        <Stack direction="row" alignItems="flex-end" gap={1}>
            <Stack>
                <Typography variant="emphasizedBodyMedium">Payments from</Typography>
                <InputField placeholder="DD/MM/YYYY" onChange={handleDateChange} name="from" />
            </Stack>
            <Stack>
                <Typography variant="emphasizedBodyMedium">Payments to</Typography>
                <InputField placeholder="DD/MM/YYYY" onChange={handleDateChange} name="to" />
            </Stack>
        </Stack>

    );
};

export default DateFilter;