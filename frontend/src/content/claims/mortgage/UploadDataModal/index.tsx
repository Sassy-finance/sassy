import { useState } from 'react';

import SassyModal from '@/components/Modal';

function UploadDataModal() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <SassyModal
        open={open}
        handleClose={handleClose}
        title="Your Data Vault has been created successfully!"
        subtitle="You will receive notifications to accept the claims once the validators check your data."
        textBtn="OK"
      />
    </>
  );
}

export default UploadDataModal;
