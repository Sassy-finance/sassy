import { useState } from 'react';

import SassyModal from '@/components/Modal';

interface RunValidateModalProps {
    open: boolean;
    handleClose: () => void;
}

function RunValidateModal({ open, handleClose }: RunValidateModalProps) {
  const [dockerImageToRun, setDockerImageToRun] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDockerImageToRun(e.target.value);
  };

  return (
    <>
      <SassyModal
        open={open}
        handleClose={handleClose}
        inputLabel="Docker Image to Run"
        inputValue={dockerImageToRun}
        handleInputChange={handleInputChange}
        textBtn="Run Validation"
        handleSubmit={() => {}}
      />
    </>
  );
}

export default RunValidateModal;
