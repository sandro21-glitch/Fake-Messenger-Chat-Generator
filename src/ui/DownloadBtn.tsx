import * as htmlToImage from "html-to-image";
import { FaDownload } from "react-icons/fa";
const DownloadButton = () => {
  const handleDownload = () => {
    const element = document.getElementById("modal-content");
    if (element) {
      htmlToImage
        .toPng(element)
        .then(function (dataUrl) {
          const a = document.createElement("a");
          a.href = dataUrl;
          a.download = "modal_content.png";
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch(function (error) {
          console.error("Error capturing image: ", error);
        });
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <button
        className="px-2 py-1 text-white border border-transparent
       hover:border-teal hover:text-teal hover:bg-transparent
       transition-all ease-in duration-150 rounded-md mt-5
       bg-teal flex items-center justify-center gap-2"
        onClick={handleDownload}
      >
        <span>Download Facebook Message as Image</span>
        <FaDownload />
      </button>
    </div>
  );
};

export default DownloadButton;
