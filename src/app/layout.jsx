"use client";
import {
	styled,
	Container,
	Box,
	ThemeProvider,
	CssBaseline,
} from "@mui/material";
import React, { useState } from "react";
import Footer from "~/layout/footer/page";
import Header from "~/layout/header/Header";
import Sidebar from "~/layout/sidebar/Sidebar";
import { baselightTheme } from "~/utils/theme/DefaultColors";

const MainWrapper = styled("div")(() => ({
	display: "flex",
	minHeight: "100vh",
	width: "100%",
}));

const PageWrapper = styled("div")(() => ({
	display: "flex",
	flexGrow: 1,
	paddingBottom: "60px",
	flexDirection: "column",
	zIndex: 1,
	backgroundColor: "transparent",
}));

export default function RootLayout({ children }) {
	const [isSidebarOpen, setSidebarOpen] = useState(true);
	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={baselightTheme}>
					<CssBaseline />
					<MainWrapper className="mainwrapper">
						{/* ------------------------------------------- */}
						{/* Sidebar */}
						{/* ------------------------------------------- */}
						<Sidebar
							isSidebarOpen={isSidebarOpen}
							isMobileSidebarOpen={isMobileSidebarOpen}
							onSidebarClose={() => setMobileSidebarOpen(false)}
						/>
						{/* ------------------------------------------- */}
						{/* Main Wrapper */}
						{/* ------------------------------------------- */}
						<PageWrapper className="page-wrapper">
							{/* ------------------------------------------- */}
							{/* Header */}
							{/* ------------------------------------------- */}
							<Header
								toggleMobileSidebar={() =>
									setMobileSidebarOpen(true)
								}
							/>
							{/* ------------------------------------------- */}
							{/* PageContent */}
							{/* ------------------------------------------- */}
							<Container
								sx={{
									paddingTop: "20px",
									maxWidth: "1200px",
								}}>
								{/* ------------------------------------------- */}
								{/* Page Route */}
								{/* ------------------------------------------- */}
								<Box sx={{ minHeight: "calc(100vh - 170px)" }}>
									{children}
								</Box>
								{/* ------------------------------------------- */}
								{/* End Page */}
								{/* ------------------------------------------- */}

								{/* ------------------------------------------- */}
								{/* Footer */}
								{/* ------------------------------------------- */}
								<Footer />
							</Container>
						</PageWrapper>
					</MainWrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}
