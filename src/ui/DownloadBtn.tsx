import * as htmlToImage from "html-to-image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true); // Set loading state

    // Preload images and wait for them to load
    await preloadImages();

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
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error("Error capturing image: ", error);
          setIsLoading(false);
        });
    }
  };
  const preloadImages = () => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const images = document.querySelectorAll("#modal-content img");
        const imagePromises: Promise<void>[] = [];

        images.forEach((img) => {
          const image = new Image();
          image.src = (img as HTMLImageElement).src;
          imagePromises.push(
            new Promise<void>((imageResolve) => {
              image.onload = () => imageResolve();
              image.onerror = () => imageResolve();
            })
          );
        });

        await Promise.all(imagePromises);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  if (isLoading) return <p>Loading...testtttt</p>;

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
