import { useState } from "react";
import star from "./assets/images/icon-star.svg";
import illustration from "./assets/images/illustration-thank-you.svg";

function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = ():void => {
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 bg-dark-blue font-semi-bold rounded-2xl md:rounded-3xl mx-6 max-w-sm">
      {!submitted ? (
        // Rating Card (text-left)
        <div className="space-y-4 text-left">
          <img
            src={star}
            alt="Star icon"
            className="bg-light-grey/10 p-4 rounded-full mb-6"
          />
          <h1 className="text-white text-2xl font-bold">How did we do?</h1>
          <p className="text-light-grey text-sm">
            Please let us know how we did with your support request. All feedback is
            appreciated to help us improve our offering!
          </p>
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((num: number) => (
              <button
                key={num}
                type="button"
                onClick={() => setRating(num)}
                className={`bg-light-grey/10 hover:bg-orange hover:text-very-dark-blue font-bold w-10 h-10 rounded-full flex items-center justify-center transition duration-300 ${
                  rating === num ? "bg-white text-very-dark-blue" : "text-light-grey"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={rating === null}
            className={`mt-4 bg-orange text-white text-base py-3 w-full font-bold rounded-full transition duration-300 ${
              rating === null ? "cursor-not-allowed" : "hover:bg-white hover:text-dark-blue"
            }`}
          >
            SUBMIT
          </button>
        </div>
      ) : (
        // Thank You Card (text-center)
        <div className="space-y-4 text-center py-2 md:px-2">
          <img src={illustration} alt="Thank you illustration" className="mx-auto" />
          <p className="bg-light-grey/10 text-orange py-2 px-4 w-fit mx-auto rounded-full">
            You selected {rating} out of 5
          </p>
          <h1 className="font-bold text-2xl text-white">Thank you!</h1>
          <p>
            We appreciate you taking your time to give a rating. If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
