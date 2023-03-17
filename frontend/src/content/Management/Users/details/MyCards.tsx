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

const CardCc = styled(Card)(
  ({ theme }) => `
    border: 1px solid ${theme.colors.alpha.black[30]};
    background: ${theme.colors.alpha.black[5]};
    box-shadow: none;

    height: 100%;
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

function MyCards() {
  const router = useRouter();

  const cardsContent = [
    { title: 'Mortgage', link: '/claims/mortgage' },
    { title: 'Inheritance', link: '' },
    { title: 'Tenant history', link: '' }
  ];

  return (
    <Card>
      <CardHeader title="Create a new Claim" />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          {cardsContent.map((card) => (
            <Grid item xs={12} sm={4}>
              <CardCc
                sx={{ px: 2, pt: 2, pb: 1 }}
                onClick={() => router.push(card.link)}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h3" fontWeight="normal">
                    {card.title}
                  </Typography>
                </Box>
              </CardCc>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}

export default MyCards;
