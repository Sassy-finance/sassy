import Head from 'next/head';

import { Container, Grid } from '@mui/material';

import PageTitleWrapper from '@/components/PageTitleWrapper';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import MyCards from '@/content/Management/Users/details/MyCards';

function CreateClaims() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
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
          <Grid item lg={4} xs={12}>
            <MyCards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CreateClaims;
