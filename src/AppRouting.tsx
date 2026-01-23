import { Route, Routes } from "react-router"
import AppLayout from "./components/UI/AppLayout"
import { AnimatePresence } from "motion/react"
import PaymentsPage from "./views/PaymentsPage.view"
import CategoriesPage from "./views/CategoriesPage.view"
import DeepDivePage from "./views/DeepDive.view"
import ExpensesPage from "./views/ExpensesPage.view"

const AppRouting = () => {
    return (
        <AnimatePresence mode="wait" initial={true}>
            <Routes location={location} key={location.pathname}>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<ExpensesPage />} />
                    <Route path="/payments" element={<PaymentsPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/deep-dive" element={<DeepDivePage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AppRouting