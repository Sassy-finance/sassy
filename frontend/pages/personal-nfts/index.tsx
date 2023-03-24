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
    id: 'tier-a',
    name: 'Tier A',
    value: '$500',
    amount: '$1,000',
  },
  {
    id: 'tier-b',
    name: 'Tier B',
    value: '$2,500',
    amount: '$5,000',
  },
  {
    id: 'tier-c',
    name: 'Tier C',
    value: '$7,000',
    amount: '$15,000',
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
          <Grid item lg={12} xs={12}>
            <Cards
              title="Proof Your Eligibility"
              data={claimsData}
              details
              createBtnText="Mint NFT"
              handleClickBtn={handleClickBtn}
              displayCardContent={(cardProps: any) => (
                <NFTsCardContent {...cardProps} />
              )}
              selectedCard={selectedCard}
              handleCardSelection={handleCardSelection}
              color="#da18a2"
              nftCard
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
