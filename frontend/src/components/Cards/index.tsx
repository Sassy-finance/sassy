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
  createOption?: boolean;
  createBtnText?: string;
  createTooltipMsg?: string;
  createRedirectLink?: string;
  displayCardContent: (props: any) => JSX.Element;
  selectedCard?: string | null;
  handleCardSelection?: (id: string) => void;
}

function Cards({
  title,
  subtitle,
  data,
  details,
  detailsRedirectLink,
  createOption,
  createBtnText,
  createTooltipMsg,
  createRedirectLink,
  displayCardContent,
  selectedCard,
  handleCardSelection,
}: CardsProps) {
  const router = useRouter();

  const DisplayCard = (cardProps: any) =>
    details ? (
      <StyledCard
        sx={{
          px: 1,
          border: selectedCard === cardProps.id ? '1px solid #223354' : 'none',
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
      <Card sx={{ px: 1 }}>
        {displayCardContent(cardProps)}
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
        <Box display="flex" alignItems="center">
          <Typography variant="h3" sx={{ mr: '1rem' }}>
            {title}
          </Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
        </Box>
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
