import { useRouter } from 'next/router';

import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const StyledCard = styled(Card)(({ theme }) => {
  return `
    transition: ${theme.transitions.create(['all'])};
    
    .MuiTouchRipple-root {
      opacity: .2;
    }
    
    &:hover {
      background: ${theme.colors.alpha.black[10]};
      cursor: pointer;
    }
  `;
});

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
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
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

interface CardsProps {
  title: string;
  data: Array<any>;
  details?: boolean;
  detailsRedirectLink?: string;
  createOption?: boolean;
  createBtnText?: string;
  createTooltipMsg?: string;
  createRedirectLink?: string;
}

function Cards({
  title,
  data,
  details,
  detailsRedirectLink,
  createOption,
  createBtnText,
  createTooltipMsg,
  createRedirectLink
}: CardsProps) {
  const router = useRouter();

  const DisplayCardContent = ({ name, symbol, logo, value, amount }) => (
    <CardContent>
      <AvatarWrapper>
        <img alt={name} src={logo} />
      </AvatarWrapper>
      <Typography variant="h5" noWrap>
        {name}
      </Typography>
      <Typography variant="subtitle1" noWrap>
        {symbol}
      </Typography>
      <Box sx={{ pt: 3 }}>
        <Typography variant="h3" gutterBottom noWrap>
          {value}
        </Typography>
        <Typography variant="subtitle2" noWrap>
          {amount}
        </Typography>
      </Box>
    </CardContent>
  );

  const DisplayCard = (cardProps: any) =>
    details ? (
      <StyledCard
        sx={{ px: 1 }}
        onClick={() => {
          if (details) {
            router.push(`${detailsRedirectLink}/${cardProps.id}`);
          }
        }}
      >
        <DisplayCardContent {...cardProps} />
      </StyledCard>
    ) : (
      <Card sx={{ px: 1 }}>
        <DisplayCardContent {...cardProps} />
      </Card>
    );

  const AddCard = () => (
    <Tooltip arrow title={createTooltipMsg}>
      <CardAddAction onClick={() => router.push(createRedirectLink)}>
        <CardActionArea sx={{ px: 1 }}>
          <CardContent>
            <AvatarAddWrapper>
              <AddTwoToneIcon fontSize="large" />
            </AvatarAddWrapper>
          </CardContent>
        </CardActionArea>
      </CardAddAction>
    </Tooltip>
  );

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">{title}</Typography>
        {createOption && (
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddTwoToneIcon fontSize="small" />}
            href={createRedirectLink}
          >
            {createBtnText}
          </Button>
        )}
      </Box>
      <Grid container spacing={3}>
        {data.map(({ id, ...item }) => (
          <Grid key={id} xs={12} sm={6} md={3} item>
            <DisplayCard id={id} {...item} />
          </Grid>
        ))}
        {createOption && (
          <Grid xs={12} sm={6} md={3} item>
            <AddCard />
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Cards;
