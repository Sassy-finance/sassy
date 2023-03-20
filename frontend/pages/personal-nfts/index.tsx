import { Container, Grid } from '@mui/material';
import type { ReactElement } from 'react';

import SidebarLayout from '@/layouts/SidebarLayout';
import Cards from '@/components/Cards';
import NFTsCardContent from '@/content/personal-nfts/CardContent';

const claimsData = [
  {
    id: 'btc',
    name: 'Tier A',
    symbol: 'BTC',
    logo: '/static/images/placeholders/logo/bitcoin.png',
    value: '$3,586.22',
    amount: '1.25843 BTC'
  },
  {
    id: 'xrp',
    name: 'Tier B',
    symbol: 'XRP',
    logo: '/static/images/placeholders/logo/ripple.png',
    value: '$586.83',
    amount: '5,783 XRP'
  },
  {
    id: 'ada',
    name: 'Tier C',
    symbol: 'ADA',
    logo: '/static/images/placeholders/logo/cardano.png',
    value: '$54,985.00',
    amount: '34,985 ADA'
  }
];

function Overview() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: '2rem' }}>
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
              subtitle="Select your Tier"
              data={claimsData}
              details
              detailsRedirectLink='/claims/mint'
              createOption
              createBtnText="Create Claim"
              createTooltipMsg="Click to add a new claim"
              createRedirectLink="/claims/create"
              displayCardContent={(cardProps: any) => <NFTsCardContent {...cardProps} />}
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
