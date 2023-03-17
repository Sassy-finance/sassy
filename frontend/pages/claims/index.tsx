import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import MyCards from '@/content/Management/Users/details/MyCards';
import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';


function Claims() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={8} xs={12}>
            <MyCards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Claims.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Claims;
