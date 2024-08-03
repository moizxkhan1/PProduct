import Breadcrumb from "../ui/Breadcrumb";

const DownloadPage = () => {
  return (
    <div className="container h-[80vh] py-12 space-y-14">
      <Breadcrumb />

      <div className="w-[90%] md:w-[60%] mx-auto flex flex-col justify-center items-center space-y-12">
        <div className="w-full md:w-[60%] px-4 py-8 border-2 border-dashed border-secondary flex justify-center items-center rounded-lg">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <img
              src="/downloadIcon.png"
              alt="download-file"
              className="w-12 h-auto"
            />
            <p className="font-urbanist text-checkout">Download File</p>
          </div>
        </div>
        <div className="mt-4 w-[85%] md:w-[55%] mx-auto flex gap-4 justify-between font-urbanist text-checkout">
          <div className="space-y-4">
            <p>Logo</p>
            <img src="/logo.png" alt="logo" className="w-40 h-auto" />
          </div>

          <div className="space-y-2">
            <p>Firma</p>
            <img src="/signature.png" alt="logo" className="w-16 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
