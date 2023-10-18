import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    });
  });
  return <></>;
}

export default ProgressBar;
