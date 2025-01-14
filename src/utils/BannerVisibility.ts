import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useBannerVisibility = (
  aliStudioKey: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(aliStudioKey)) {
      setShowBanner(true);
    }
  }, [aliStudioKey]);

  return [showBanner, setShowBanner];
};

export default useBannerVisibility;
