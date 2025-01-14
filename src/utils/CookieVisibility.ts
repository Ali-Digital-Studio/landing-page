import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useCookieVisibility = (
  aliStudioKey: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(aliStudioKey)) {
      setShowCookie(true);
    }
  }, [aliStudioKey]);

  return [showCookie, setShowCookie];
};

export default useCookieVisibility;
