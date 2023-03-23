import { useRouter } from 'next/router';

import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  Tooltip,
  CardActionArea,
  styled,
  Container
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { height } from '@mui/system';

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
  subtitle?: string;
  data: Array<any>;
  details?: boolean;
  detailsRedirectLink?: string;
  createBtnText?: string;
  handleClickBtn?: () => void;
  handleAddCardClick?: () => void;
  createTooltipMsg?: string;
  displayCardContent: (props: any) => JSX.Element;
  selectedCard?: string | null;
  handleCardSelection?: (id: string) => void;
  color?: string;
  nftCard?: boolean;
}

function Cards({
  title,
  subtitle,
  data,
  details,
  detailsRedirectLink,
  createBtnText,
  handleClickBtn,
  handleAddCardClick,
  createTooltipMsg,
  displayCardContent,
  selectedCard,
  handleCardSelection,
  color,
  nftCard
}: CardsProps) {
  const router = useRouter();

  const DisplayCard = (cardProps: any) => 
    details ? (
      <StyledCard
        sx={{
          px: 1,
          border:
            selectedCard === cardProps.id
              ? `${nftCard ? '3px' : '1px'} solid ${color ? color : '#223354'}`
              : 'none',
        }}
        onClick={() => {
          if (detailsRedirectLink) {
            return router.push(`${detailsRedirectLink}/${cardProps.id}`);
          }
          if (handleCardSelection) {
            return handleCardSelection(cardProps.id);
          }
        }}
      >
        {displayCardContent(cardProps)}
      </StyledCard>
    ) : (
      <Card sx={{ px: 1 }}>{displayCardContent(cardProps)}</Card>
    );

  const AddCard = () => (
    <Tooltip arrow title={createTooltipMsg}>
      <CardAddAction onClick={handleAddCardClick}>
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
      {nftCard ? (
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              pb: 3,
              width: '80%'
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h3" sx={{ mr: '1rem' }}>
                {title}
              </Typography>
              <Typography variant="subtitle2">{subtitle}</Typography>
            </Box>
            {createBtnText && (
              <Button
                size="small"
                variant="outlined"
                startIcon={<AddTwoToneIcon fontSize="small" />}
                onClick={handleClickBtn}
              >
                {createBtnText}
              </Button>
            )}
          </Box>
          <Grid container spacing={3} style={{ justifyContent: 'center' }}>
            {data.map(({ id, ...item }) => (
              <Grid key={id} xs={12} sm={6} md={3} item>
                <DisplayCard id={id} {...item} />
              </Grid>
            ))}
            {handleAddCardClick && (
              <Grid xs={12} sm={6} md={3} item>
                <AddCard />
              </Grid>
            )}
          </Grid>
        </Container>
      ) : (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              pb: 3
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h3" sx={{ mr: '1rem' }}>
                {title}
              </Typography>
              <Typography variant="subtitle2">{subtitle}</Typography>
            </Box>
            {createBtnText && (
              <Button
                size="small"
                variant="outlined"
                startIcon={<AddTwoToneIcon fontSize="small" />}
                onClick={handleClickBtn}
              >
                {createBtnText}
              </Button>
            )}
          </Box>
          <Grid container spacing={3} style={{ justifyContent: 'center' }}>
            {data.map(({ id, ...item }) => (
              <Grid key={id} xs={12} sm={6} md={3} item>
                <DisplayCard id={id} {...item} />
              </Grid>
            ))}
            {handleAddCardClick && (
              <Grid xs={12} sm={6} md={3} item>
                <AddCard />
              </Grid>
            )}
          </Grid>
        </>
      )}
    </>
  );
}

export default Cards;
