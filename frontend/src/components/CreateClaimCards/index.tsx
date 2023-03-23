import {
  Box,
  Grid,
  Typography,
  Card,
  CardHeader,
  Divider,
  styled
} from '@mui/material';

import { useRouter } from 'next/router';
import Image from 'next/image';

const CardCc = styled(Card)(
  ({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      background: ${theme.colors.alpha.black[5]};
      box-shadow: none;
      height: 100%;
      min-width: 150px;
      max-width: 290px;
      color: ${theme.colors.primary.main};
      transition: ${theme.transitions.create(['all'])};
      cursor: pointer;    
      .MuiCardActionArea-root {
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
      }
          
      .MuiTouchRipple-root {
        opacity: .2;
      }
          
      &:hover {
        border-color: ${theme.colors.alpha.black[60]};
        background: ${theme.colors.alpha.black[10]};
      }
  `
);

const CardTitle = styled(Typography)(
  ({ theme }) => `
      font-size: 1.2rem;
      font-weight: 700;
      color: ${theme.colors.alpha.black[100]};
      text-align: center;
  `
);

function MyCards() {
  const router = useRouter();

  const cardsContent = [
    { title: 'Borrowing Claim', link: '/claims/mortgage' },
    { title: 'Inheritance Claim', link: '' },
    { title: 'Tenancy Claim', link: '' }
  ];

  return (
    <Card>
      <CardHeader title="Create a new Claim" />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardCc
              sx={{ px: 2, pt: 2, pb: 1 }}
              onClick={() => router.push('/claims/mortgage')}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <CardTitle
                  variant="h3"
                  style={{ margin: '0.5rem 0' }}
                >
                  Borrowing Claim
                </CardTitle>
                <Image
                  src={'/borrowing-item.jpg'}
                  alt="claim"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: '3rem',
                  }}
                />
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }} onClick={() => {}}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <CardTitle
                  variant="h3"
                  style={{ margin: '0.5rem 0' }}
                >
                  Inheritance Claim
                </CardTitle>
                <Image
                  src={'/inheritance-item.jpg'}
                  alt="claim"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: '3rem',
                  }}
                />
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }} onClick={() => {}}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <CardTitle
                  variant="h3"
                  style={{ margin: '0.5rem 0' }}
                >
                  Tenancy Claim
                </CardTitle>
                <Image
                  src={'/tenancy-item.jpg'}
                  alt="claim"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: '3rem',
                    margin: '1rem 0',
                  }}
                />
              </Box>
            </CardCc>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default MyCards;
