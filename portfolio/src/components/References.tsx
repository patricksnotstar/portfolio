import React from "react";
import LifeBoosterRecommendationLetter from "../assets/LifeBoosterRecommendationLetter.pdf";
import TerrameraReferenceLetter from "../assets/TerrameraReferenceLetter.pdf";

const References = ({ userInput }) => {
    return (
        <div className="pb-10">
            <h2 className="pb-2 text-gray-400">{"$ " + userInput}</h2>

            <h2 className="font-bold text-lg text-sky-200">LifeBooster</h2>
            <a
                href={LifeBoosterRecommendationLetter}
                download="LifeBoosterRecommendationLetter.pdf"
            >
                <p className="text-blue-600 underline pt-2">
                    Click here to download my mentor's recommendation letter
                </p>
            </a>

            <h2 className="pt-3 font-bold text-lg text-sky-200">Terramera, Inc.</h2>
            <a href={TerrameraReferenceLetter} download="TerrameraReferenceLetter.pdf">
                <p className="text-blue-600 underline pt-2">
                    Click here to download my mentor's recommendation letter
                </p>
            </a>
        </div>
    );
};

export default References;
