import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import type { ReactElement } from 'react';

import SidebarLayout from '@/layouts/SidebarLayout';
import Cards from '@/components/Cards';
import NFTsCardContent from '@/content/personal-nfts/CardContent';
import ShowQRModal from '@/content/personal-nfts/CardContent/ShowQRModal';
import MintNFTModal from '@/content/personal-nfts/MintNFTModal';

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
  const [formInput, setFormInput] = useState<FormInput>({
    notional: '',
    rate: ''
  });
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [openQRModal, setOpenQRModal] = useState<boolean>(false);
  const [mintNFTModal, setMintNFTModal] = useState<boolean>(false);

  const handleOpenQRModal = () => setOpenQRModal(true);
  const handleCloseQRModal = () => setOpenQRModal(false);

  const handleOpenMintNFTModal = () => setMintNFTModal(true);
  const handleCloseMintNFTModal = () => setMintNFTModal(false);

  const handleClickBtn = () => {
    handleOpenMintNFTModal();
  };

  const handleCardSelection = (id: string) => {
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
      handleOpenQRModal();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleMintSubmit = () => {};

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
              handleClickBtn={handleClickBtn}
              displayCardContent={(cardProps: any) => (
                <NFTsCardContent {...cardProps} />
              )}
              selectedCard={selectedCard}
              handleCardSelection={handleCardSelection}
            />
          </Grid>
        </Grid>
      </Container>
      <ShowQRModal open={openQRModal} handleClose={handleCloseQRModal} />
      <MintNFTModal
        open={mintNFTModal}
        handleClose={handleCloseMintNFTModal}
        notionalValue={formInput.notional}
        rateValue={formInput.rate}
        handleInputChange={handleInputChange}
        handleSubmit={handleMintSubmit}
      />
    </>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};
