import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import RecentOffersTable from './RecentOffersTable';
import { subDays } from 'date-fns';
import { formatAddress } from '@/utils';

function RecentOffers({offers}) {

  console.log(offers)

  

const cryptoOrders = offers.map((offer) => ({
  id: '1',
  orderDetails: formatAddress(offer.user),
  orderDate: new Date().getTime(),
  status: 'completed',
  orderID: 'VUVX709ET7BY',
  sourceName: 'Bank Account',
  sourceDesc: '*** 1111',
  amountCrypto: 456555,
  amount: 563787,
  cryptoCurrency: 'ETH',
  currency: '$'
}))


  return (
    <Card>
      <RecentOffersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOffers;
