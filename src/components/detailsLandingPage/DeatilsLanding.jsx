import React, { useEffect } from "react";
import DetailsHome from "../detailsHome/DetailsHome";
import Topcast from "../topcast/Topcast";
import SimilarMovie from "../similarMovie/SimilarMovie";
import Recommendation from "../recommendations/Recommendation";
import Footer from "../footer/Footer";

function DeatilsLanding() {
  return (
    <>
      <div>
        <DetailsHome />
        <Topcast />
        <SimilarMovie />
        <Recommendation />
        <Footer />
      </div>
    </>
  );
}

export default DeatilsLanding;
