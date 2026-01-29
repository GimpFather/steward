import { Container } from "@mui/material";

interface PageContainerProps {
	children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
	return (
		<Container maxWidth="md" sx={{ paddingX: 2, paddingY: 4 }}>
			{children}
		</Container>
	);
};

export default PageContainer;
