import { FC, ChangeEvent, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  CardHeader,
  styled,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Label from '@/components/Label';
import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';
import BulkActions from './BulkActions';
import RunValidateModal from './RunValidateModal';
import { User } from '../../contexts';
import { createClaimOffer } from '@/api/backend';
import { formatAddress } from '@/utils';

const StyledPlayIcon = styled(PlayArrowIcon)(
  () => `
    border-radius: 1rem;
    width: 1.8rem;
    height: 1.8rem;
    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  `
);

interface RecentOrdersTableProps {
  className?: string;
  claims: any[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): any => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map.pending;

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentValidateTable: FC<RecentOrdersTableProps> = ({ claims }) => {
  const { isLogged, signer } = useContext(User)
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });
  const [dockerImageToRun, setDockerImageToRun] = useState<string>('');
  const [selectedClaimId, setSelectedClaimId] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = (): void => isLogged && setOpenModal(true);

  const handleCloseModal = (): void => setOpenModal(false);

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredClaims = applyFilters(claims, filters);
  const paginatedClaims = applyPagination(
    filteredClaims,
    page,
    limit
  );

  const handleInputModalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDockerImageToRun(e.target.value);
  };

  const handleSubmitValidate = async () => {
    createClaimOffer(signer, dockerImageToRun, selectedClaimId);
    setSelectedClaimId('');
  }

  const handleRunValidation = (claimId: string) => {
    handleOpenModal();
    setSelectedClaimId(claimId);
  };

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Recent Claims"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedClaims.map((claim) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                claim.id
              );
              return (
                <TableRow
                  hover
                  key={claim.id}
                  selected={isCryptoOrderSelected}
                >
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {formatAddress(claim.user)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      mortgage
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {getStatusLabel(claim.status)}
                  </TableCell>
                  <TableCell>
                    <StyledPlayIcon onClick={() => handleRunValidation(claim.id)} />
                  </TableCell>
                </TableRow>
              );
            })}
            <RunValidateModal
              open={openModal}
              handleClose={handleCloseModal}
              dockerImageToRun={dockerImageToRun}
              handleInputChange={handleInputModalChange}
              handleSubmitValidate={handleSubmitValidate}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={claims.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

RecentValidateTable.propTypes = {
  claims: PropTypes.array.isRequired
};

RecentValidateTable.defaultProps = {
  claims: []
};

export default RecentValidateTable;
