import { Container } from "@mui/material";

interface PageContainerProps {
   children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
   return (
      <Container maxWidth="md" sx={{ padding: 2 }}>
         {children}
      </Container>
   );
};

export default PageContainer;
