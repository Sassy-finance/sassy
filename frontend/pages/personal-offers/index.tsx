import Cards from '@/components/Cards';
import OffersCardContent from '@/content/personal-offers/CardContent';
import SidebarLayout from '@/layouts/SidebarLayout';

import { Container, Grid } from '@mui/material';
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

function PersonalClaimOffers() {
  const router = useRouter();

  const handleCreateClaim = () => {
    router.push('/claims/create');
  }
  return (
    <>
      <Container maxWidth="lg" style={{ margin: '2rem 0' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={8} xs={12}>
            <Cards
              title="Personal claim offers"
              data={claimsData}
              displayCardContent={(cardProps: any) => <OffersCardContent {...cardProps} />}
              details
              detailsRedirectLink={`/personal-offers`}
              createBtnText="Create claim"
              handleClickBtn={handleCreateClaim}
              createTooltipMsg="Create a new claim offer"
              handleAddCardClick={handleCreateClaim}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

PersonalClaimOffers.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default PersonalClaimOffers;
