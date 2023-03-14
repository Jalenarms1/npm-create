import { useState } from "react";


const useDataUrl = () => {
  const [dataUrl, setDataUrl] = useState(null);

  const handleFileChange = (event, reset) => {
    const file = event?.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setDataUrl(reader.result);
    };
    } else if(reset) {
      setDataUrl(null);
    }
  };

  const resetImage = () => {
    setDataUrl(null);

  }

  return {
    dataUrl,
    handleFileChange,
    resetImage,
  };
};

export default useDataUrl;