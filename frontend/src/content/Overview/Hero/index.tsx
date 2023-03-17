import Head from 'next/head';

import { Container, Grid } from '@mui/material';

import PageTitleWrapper from '@/components/PageTitleWrapper';
import { useState } from 'react';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import Wallets from '@/content/Dashboards/Crypto/Wallets';
import MyCards from '@/content/Management/Users/details/MyCards';

function Hero() {
  const [content, setContent] = useState<any>(1);

  const navigateForward = (newContent: any) => {
    setContent(newContent);
  };

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
          {content === 1 && (
            <Grid item lg={8} xs={12}>
              <Wallets navigateForward={navigateForward} />
            </Grid>
          )}
          {content === 2 && (
            <Grid item lg={4} xs={12}>
              <MyCards />
            </Grid>
          )}
          {content === 3 && (
            <Grid item lg={4} xs={12}>
              <MyCards />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Hero;
