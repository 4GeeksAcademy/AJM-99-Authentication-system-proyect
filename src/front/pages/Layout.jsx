import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Navbar2 } from "../components/Navbar2"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <>
            {window.location.pathname !== "/info"  && <Navbar />}
            {window.location.pathname === "/info"  && <Navbar2 />}
                <Outlet />
            <Footer />
            </>
        </ScrollToTop>
    )
}