import {
  Container,
  Grid,
} from '@mui/material';
import type { ReactElement } from 'react';

import SidebarLayout from '@/layouts/SidebarLayout';
import Cards from '@/components/Cards';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import ClaimsCardContent from '@/content/claims/CardContent';
import { useRouter } from 'next/router';

const claimsData = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: '/static/images/placeholders/logo/bitcoin.png',
    value: '$3,586.22',
    amount: '1.25843 BTC'
  },
  {
    id: 'xrp',
    name: 'Ripple',
    symbol: 'XRP',
    logo: '/static/images/placeholders/logo/ripple.png',
    value: '$586.83',
    amount: '5,783 XRP'
  },
  {
    id: 'ada',
    name: 'Cardano',
    symbol: 'ADA',
    logo: '/static/images/placeholders/logo/cardano.png',
    value: '$54,985.00',
    amount: '34,985 ADA'
  }
];

function Overview() {
  const router = useRouter();
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
          <Grid item lg={8} xs={12}>
            <Cards 
              title="Claims"
              data={claimsData}
              displayCardContent={(cardProps: any) => <ClaimsCardContent {...cardProps} />} 
              createBtnText='Create Claim'
              createTooltipMsg="Click to add a new claim"
              handleClickBtn={() => router.push("/claims/create")}
              handleAddCardClick={() => router.push("/claims/create")}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};
