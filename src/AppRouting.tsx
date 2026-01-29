import { Route, Routes } from "react-router";
import AppLayout from "./components/Common/Layouts/AppLayout";
import DashboardPage from "./views/DashboardPage.view";
import PaymentsPage from "./views/PaymentsPage.view";

const AppRouting = () => {
	return (
		<Routes location={location} key={location.pathname}>
			<Route element={<AppLayout />}>
				<Route path="/" element={<DashboardPage />} />
				<Route path="/payments" element={<PaymentsPage />} />
			</Route>
		</Routes>
	);
};

export default AppRouting;
