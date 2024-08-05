// Modal.js
import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, onUpload }) => {
  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSignatureChange = (e) => {
    setSignature(e.target.files[0]);
  };

  const handleUpload = () => {
    if (logo && signature) {
      onUpload(logo, signature);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-3 flex items-center justify-center bg-black bg-opacity-50 z-50 font-urbanist text-checkout">
      <div className="bg-white rounded-lg p-6 w-[40%] space-y-6">
        <h2 className="text-xl font-semibold">Upload Files</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-secondary">Logo</label>
            <input type="file" onChange={handleLogoChange} />
          </div>
          <div className="space-y-2">
            <label className="block text-secondary">Signature</label>
            <input type="file" onChange={handleSignatureChange} />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-800 transition active:scale-95 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary hover:bg-primary/90 transition active:scale-95 text-white rounded"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default Modal;
