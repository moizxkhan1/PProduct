// UploadPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../ui/Breadcrumb";
import Modal from "../Modal";
import Loader from "../Loader";
import Button from "../ui/Button";

const UploadPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadedLogo, setUploadedLogo] = useState(null);
  const [uploadedSignature, setUploadedSignature] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleUpload = (logo, signature) => {
    setUploadedLogo(URL.createObjectURL(logo));
    setUploadedSignature(URL.createObjectURL(signature));
    setModalOpen(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="container min-h-[80vh] py-12 space-y-14">
      <Breadcrumb />
      <div className="w-[90%] md:w-[60%] mx-auto flex flex-col justify-center items-center space-y-12">
        <div
          className="w-full md:w-[60%] px-4 py-8 border-2 border-dashed border-secondary flex justify-center items-center rounded-lg cursor-pointer"
          onClick={handleOpenModal}
        >
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <img
              src="/downloadIcon.png"
              alt="download-file"
              className="w-12 h-auto"
            />
            <p className="font-urbanist text-checkout">Upload Files</p>
          </div>
        </div>
        <div className="mt-4 w-[85%] md:w-[55%] mx-auto flex gap-4 justify-between font-urbanist text-checkout">
          <div className="space-y-4">
            <p>Logo</p>
            {uploadedLogo ? (
              <img src={uploadedLogo} alt="logo" className="w-24 h-auto" />
            ) : (
              <p>No logo uploaded</p>
            )}
          </div>
          <div className="space-y-3">
            <p>Signature</p>
            {uploadedSignature ? (
              <img
                src={uploadedSignature}
                alt="signature"
                className="w-24 h-auto"
              />
            ) : (
              <p>No signature uploaded</p>
            )}
          </div>
        </div>
        <div className="w-[85%] md:w-[60%] mx-auto">
          <Button
            type="secondary"
            text="Weiter"
            onClick={() => navigate("/auswertungsbericht")}
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onUpload={handleUpload}
      />
      {isLoading && <Loader />}
    </div>
  );
};

export default UploadPage;
