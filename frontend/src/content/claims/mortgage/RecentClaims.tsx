import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import RecentClaimsTable from './RecentClaimsTable';

function RecentClaims({ transactions }) {
  const cryptoOrders: CryptoOrder[] = transactions.map(transaction => {
    return {
      id: '1',
      orderDetails: transaction.remittanceInformationUnstructured,
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: transaction.transactionId,
      sourceName: transaction.bankTransactionCode,
      sourceDesc: '*** 1111',
      amountCrypto: transaction.transactionAmount.amount,
      amount: "",
      cryptoCurrency: transaction.transactionAmount.currency,
      currency: ''
    }
  })

  return (
    <Card>
      <RecentClaimsTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentClaims;
