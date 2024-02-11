import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const apkUrl = "../../images/samiul.jpeg";

    const tempAnchor = document.createElement("a");
    tempAnchor.href = apkUrl;

    tempAnchor.setAttribute("download", "samiul.jpeg");
    tempAnchor.click();
  };

  return (
    <div className="text-center mt-5">
      <button onClick={handleDownload} class="text-center btn btn-primary">
        Download App
      </button>
    </div>
  );
};

export default DownloadButton;
