import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";

const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);

    const element = document.getElementById("modal-content");

    if (element) {
      try {
        const canvas = await html2canvas(element);
        const dataURL = canvas.toDataURL("image/png");
        
        // Encode canvas data using btoa
        const base64Data = btoa(dataURL.split(',')[1]);
        
        // Create a Data URI for the image
        const dataURI = `data:image/png;base64,${base64Data}`;

        // Create a download link and trigger a click event
        const a = document.createElement("a");
        a.href = dataURI;
        a.download = "modal_content.png";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setIsLoading(false);
      } catch (error) {
        console.error("Error capturing image: ", error);
        setIsLoading(false);
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full flex items-center justify-center hidden">
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
