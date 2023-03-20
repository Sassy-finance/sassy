import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitle from '@/components/PageTitle';

import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid, Card, CardContent } from '@mui/material';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function MintForm() {
  return (
    <>
      <Head>
        <title>Forms - Components</title>
      </Head>
      <PageTitleWrapper>
        <PageTitle
          heading="Forms"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
          btnMsg="Mint NFT"
          docs="https://material-ui.com/components/text-fields/"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg" sx={{ mb: '2rem' }}>
        <Card>
          <CardContent>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' }
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-search"
                    label="Notional"
                    type="search"
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-search"
                    label="Rate"
                    type="search"
                    style={{ width: '100%' }}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

MintForm.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MintForm;
