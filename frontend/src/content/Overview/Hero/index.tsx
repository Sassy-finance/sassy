import Head from 'next/head';

import {
  Container,
  Grid,
} from '@mui/material';

import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import Wallets from '@/content/Dashboards/Crypto/Wallets';

function Hero() {
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
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Hero;
