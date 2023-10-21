import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";

const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true); // Set loading state

    const element = document.getElementById("modal-content");

    if (element) {
      html2canvas(element)
        .then(function (canvas) {
          const dataUrl = canvas.toDataURL("image/png");

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
        })
        .finally(function () {
          setIsLoading(false);
        });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full flex items-center justify-center">
      <button
        className="px-2 py-1 text-white border border-transparent
       hover:border-teal hover:text-teal hover-bg-transparent
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
