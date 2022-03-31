import React, { useState, useEffect } from "react";
import AdviceService from "../../services/advice.service";
import CardAdvice from "../../components/CardAdvice/CardAdvice";


const AdvicePage = () => {
  const [advice, setAdvice] = useState();

  const getAdvice = () => {
    AdviceService.getRandom()
      .then((response) => setAdvice(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => getAdvice(), []);

  return (
    <>
      <div className="d-flex justify-content-center">
        {advice && (
          <CardAdvice
            handleClick={getAdvice}
            id={advice.slip.id}
            advice={advice.slip.advice}
          />
        )}
      </div>
    </>
  );
};

export default AdvicePage;
