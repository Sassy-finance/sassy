import { Box, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import ShowQRModal from "./ShowQRModal";

interface NFTsCardContentProps {
  name: string;
  amount: string;
  value: string;
}

function NFTsCardContent({ name, amount, value }: NFTsCardContentProps) {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (): void => {
    console.log("handle")
    setOpenModal(true);
  }

  return (
    <>
      <CardContent onClick={()=> handleOpenModal()}>
        <Typography variant="h3" noWrap marginTop={'1rem'}>
          {name}
        </Typography>
        <Box sx={{ pt: 3 }}>
          <Typography variant="subtitle2">
            {`Max Liabilities: ${amount}`}
          </Typography>
          <Typography variant="subtitle2">
            {`Min Collateral: ${value}`}
          </Typography>
        </Box>
      </CardContent>
      <ShowQRModal
        handleClose={() => { }}
        handleInputChange={() => { }}
        handleSubmit={() => { }}
        open={openModal}
        tier={name} />
    </>
  );
}

export default NFTsCardContent;
