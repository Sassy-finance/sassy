import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';

import PageHeader from '@/content/validate/PageHeader';
import RecentValidate from '@/content/validate/RecentValidate';

function ValidateTable() {

  return (
    <>
      <PageTitleWrapper>
        <PageHeader/>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentValidate />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

ValidateTable.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ValidateTable;