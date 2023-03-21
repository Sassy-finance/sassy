import SassyModal from '@/components/Modal';

interface RunValidateModalProps {
  open: boolean;
  handleClose: () => void;
  dockerImageToRun: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RunValidateModal({
  open,
  handleClose,
  dockerImageToRun,
  handleInputChange
}: RunValidateModalProps) {
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
