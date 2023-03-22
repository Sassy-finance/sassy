import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/claims/mortgage/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';

import { createToken, createAgreement, createLink, getAccounts, getTransactions } from '../../../src/api/nordigen'
import { storeFiles, makeFileObjects } from '../../../src/api/ipfs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { API_CALLBACK_URL } from '@/config';

import RecentClaims from '@/content/claims/mortgage/RecentClaims';
import UploadDataModal from '@/components/UploadDataModal';
import { createClaim } from '@/api/backend';

function MortgageTransactions() {

  const router = useRouter()
  const requisition = router.query.ref as string
  const [transactions, setTransactions] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    if (requisition && requisition !== '') {
      getTransactionData(requisition)
    }
  }, [requisition])

  const getTransactionData = async (requisition: string) => {
    const token = localStorage.getItem('authToken') || ''
    const accounts = await getAccounts(token, requisition)
    const transactions = await getTransactions(token, accounts[0])
    setTransactions(transactions.booked)
  }

  const getHistoricalTransactions = async () => {
    const institution = 'SANDBOXFINANCE_SFIN0000'
    const token = await createToken()

    localStorage.setItem('authToken', token)

    const agreement = await createAgreement(
      token,
      institution,
      ['balances', 'details', 'transactions']
    )

    const link = await createLink(
      token,
      API_CALLBACK_URL,
      institution,
      agreement,
      'EN'
    )
    window.open(link, '_blank');
  }

  const uploadToIPFS = async () => {
    const cid = await storeFiles(
      makeFileObjects(
        transactions,
        'transaction-history.json'
      ),
      'transaction-history.json'
    )

    await createClaim('0x', cid)

    setOpenModal(true)
  }

  return (
    <>
      <PageTitleWrapper>
        <PageHeader getHistoricalTransactions={getHistoricalTransactions} uploadToIPFS={uploadToIPFS}/>
      </PageTitleWrapper>
      <Container maxWidth="lg" style={{ marginBottom: '2rem' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentClaims transactions={transactions} />
          </Grid>
        </Grid>
      </Container>
      <UploadDataModal open={openModal} handleClose={handleClose} />
    </>
  );
}

MortgageTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default MortgageTransactions;
