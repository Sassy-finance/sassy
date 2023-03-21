import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';

import PageHeader from '@/content/validate/PageHeader';
import RecentValidate from '@/content/validate/RecentValidate';
import { useState, useEffect } from 'react';
import { getPendingClaims } from '@/api/backend';

function ValidateTable() {
  const [claimsData, setClaimsData] = useState([]);

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const claims: any = await getPendingClaims();
    setClaimsData(claims);
  }

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
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentValidate data={claimsData} />
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
