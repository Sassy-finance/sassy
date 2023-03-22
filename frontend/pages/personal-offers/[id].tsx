import RecentOffers from '@/content/personal-offers/detail/RecentOffers';
import SidebarLayout from '@/layouts/SidebarLayout';
import { useRouter } from 'next/router'
import { getPendingClaims } from '../../src/api/backend'

import { Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';

function PersonalOfferDetail() {

  const router = useRouter()
  const { id } = router.query
  const [offers, setOffers] = useState([])

  console.log(id)

  useEffect(() => { 
    getData()
  }, [])


  const getData = async () => {
    const claims = await getPendingClaims()
    console.log(claims)
    const claim = claims.find(claim => claim.id == id)
    setOffers(claim.ClaimOffers)
  }


  return (
    <>
      <Container maxWidth="lg" style={{ margin: '2rem 0' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOffers offers={offers}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

PersonalOfferDetail.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default PersonalOfferDetail;
