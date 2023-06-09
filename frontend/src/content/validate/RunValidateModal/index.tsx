import SassyModal from '@/components/Modal';

interface RunValidateModalProps {
  open: boolean;
  handleClose: () => void;
  dockerImageToRun: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitValidate: () => void;
}

function RunValidateModal({
  open,
  handleClose,
  dockerImageToRun,
  handleInputChange,
  handleSubmitValidate,
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
        handleSubmit={handleSubmitValidate}
      />
    </>
  );
}

export default RunValidateModal;
