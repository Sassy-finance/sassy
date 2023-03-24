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

const GridContainer = styled(Grid)(
  ({ theme }) => `
      ${theme.breakpoints.down('sm')} {
        width: 100%;
        // background-color: red;
      }
      ${theme.breakpoints.up('sm')} {
        padding: 0 1.5rem;
      }
      ${theme.breakpoints.up('md')} {
        width: 100%;
        // background-color: blue;
        padding: 0 3rem;
      }
  `,
);

const CardCc = styled(Card)(
  ({ theme }) => `
      ${theme.breakpoints.down('sm')} {
        width: 170px;
      }
      border: 1px transparent solid;
      background: ${theme.colors.alpha.black[5]};
      box-shadow: none;
      height: 100%;
      min-width: 150px;
      max-width: 210px;
      color: ${theme.colors.primary.main};
      transition: ${theme.transitions.create(['all'])};
      cursor: pointer;    
      font-family: 'Poppins', sans-serif;
      .MuiCardActionArea-root {
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
      }
          
      .MuiTouchRipple-root {
        opacity: .2;
      }
          
      background: ${theme.colors.alpha.black[10]};

      &:hover {
        border: 1px solid ${theme.colors.alpha.black[30]};
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
    {
      title: 'Borrowing Claim',
      link: '/claims/mortgage',
      logo: '/borrowing-item.jpg'
    },
    { title: 'Inheritance Claim', link: '', logo: '/inheritance-item.jpg' },
    { title: 'Tenancy Claim', link: '', logo: '/tenancy-item.jpg' }
  ];

  return (
    <Card>
      <CardHeader title="Create a new Claim" />
      <Divider />
      <Box
        p={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <GridContainer container spacing={3}>
          {cardsContent.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CardCc
                sx={{ px: 2, pt: 2, pb: 1 }}
                onClick={() => router.push(card.link)}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <CardTitle variant="h3" style={{ margin: '0.5rem 0' }}>
                    {card.title}
                  </CardTitle>
                  <Image
                    src={card.logo}
                    alt="claim"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: '3rem'
                    }}
                    unoptimized={true}
                  />
                </Box>
              </CardCc>
            </Grid>
          ))}
        </GridContainer>
      </Box>
    </Card>
  );
}

export default MyCards;
