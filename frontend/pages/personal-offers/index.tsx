import { getPendingClaims } from '@/api/backend';
import Cards from '@/components/Cards';
import OffersCardContent from '@/content/personal-offers/CardContent';
import SidebarLayout from '@/layouts/SidebarLayout';

import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function PersonalClaimOffers() {
  const router = useRouter();

  const [claimsData, setClaimData] = useState([])

  const getData = async () => {
    const claims = await getPendingClaims()
    setClaimData(claims.map((claim) => ({
      id: claim.id,
      name: 'Claim',
      symbol: '',
      logo: '/static/images/placeholders/logo/polygon.png',
      value: '',
      amount: 'Mortgage'
    })))
  }

  useEffect(() => {
    getData()
  }, [])


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
