import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';

import Wallets from '@/content/Dashboards/Crypto/Wallets';
import { useState } from 'react';

function DashboardCrypto() {
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
          <Grid item lg={8} xs={12}>
            <Wallets navigateForward={navigateForward}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
