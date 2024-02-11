import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const apkUrl = " ";

    const tempAnchor = document.createElement("a");
    tempAnchor.href = apkUrl;

    tempAnchor.setAttribute("download");
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
