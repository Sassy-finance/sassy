import { Container, Grid } from '@mui/material';

import PageTitleWrapper from '@/components/PageTitleWrapper';

import PageHeader from '@/content/Overview/PageHeader';
import MyCards from '@/components/CreateClaimCards';
import SidebarLayout from '@/layouts/SidebarLayout';

function CreateClaims() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={11} xs={12}>
            <MyCards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

CreateClaims.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateClaims;
