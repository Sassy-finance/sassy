import { Card } from '@mui/material';
import RecentValidateTable from './RecentValidateTable';

function RecentValidate({ data }) {
  return (
    <Card sx={{ mb: '2rem' }}>
      <RecentValidateTable claims={data} />
    </Card>
  );
}

export default RecentValidate;
