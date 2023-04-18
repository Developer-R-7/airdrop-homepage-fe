interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25  flex justify-center items-center text-black"
      onClick={handleClose}
      id="wrapper"
    >
      <div className=" w-1/4 h-2/5">
        <div className=" bg-slategrey text-white py-8 px-6 rounded-lg h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
