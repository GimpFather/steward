import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../../Navbar/Navbar";

const AppLayout = () => {
	return (
		<Container
			maxWidth="md"
			sx={{ margin: 2, width: "100%", placeSelf: "center" }}
		>
			<Stack direction="column" gap={2}>
				<Navbar />
				<Outlet />
			</Stack>
		</Container>
	);
};

export default AppLayout;
