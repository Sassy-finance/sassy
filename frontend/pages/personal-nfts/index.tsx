import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField
} from '@mui/material';
import { useState } from 'react';
import type { ReactElement } from 'react';

import SidebarLayout from '@/layouts/SidebarLayout';
import Cards from '@/components/Cards';
import NFTsCardContent from '@/content/personal-nfts/CardContent';
import { useRouter } from 'next/router';

const claimsData = [
  {
    id: 'btc',
    name: 'Tier A',
    symbol: 'BTC',
    logo: '/static/images/placeholders/logo/bitcoin.png',
    value: '$100,000,000',
    amount: '$150,000'
  },
  {
    id: 'xrp',
    name: 'Tier B',
    symbol: 'XRP',
    logo: '/static/images/placeholders/logo/ripple.png',
    value: '$800,000',
    amount: '$250,000'
  },
  {
    id: 'ada',
    name: 'Tier C',
    symbol: 'ADA',
    logo: '/static/images/placeholders/logo/cardano.png',
    value: '$600,000',
    amount: '$300,000'
  }
];

interface FormInput {
  notional: string;
  rate: string;
}

function Overview() {
  const router = useRouter();
  const [formInput, setFormInput] = useState<FormInput>({
    notional: '',
    rate: '',
  });
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelection = (id: string) => {
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: '2rem', pb: '1rem' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
          marginBottom="1rem"
        >
          <Grid item lg={8} xs={12}>
            <Cards
              title="Claims"
              subtitle="Select your Tier"
              data={claimsData}
              details
              createBtnText="Mint NFT"
              handleClickBtn={() => router.push("/claims/create")}
              displayCardContent={(cardProps: any) => (
                <NFTsCardContent {...cardProps} />
              )}
              selectedCard={selectedCard}
              handleCardSelection={handleCardSelection}
            />
            <Card style={{ marginTop: '2rem' }}>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={3} paddingRight="1rem">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-search"
                        label="Notional"
                        type="search"
                        name='notional'
                        value={formInput.notional}
                        onChange={handleInputChange}
                        style={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-search"
                        label="Rate"
                        type="search"
                        name='rate'
                        value={formInput.rate}
                        onChange={handleInputChange}
                        style={{ width: '100%' }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
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
