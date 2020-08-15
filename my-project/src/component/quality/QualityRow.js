import React from "react"
import LeftQuality from "./LeftQuality"
import RightQuality from "./RightQuality"

function QualityRow() {
    return (
        <div className="row">

            <LeftQuality heading="HAND CURATED PROFESSIONALS" peragraph="Buying ? Selling ? Financing ? NO problrm. Our team is hand selected" nextperagraph="from the best professionals in each specific area of Real Estate"/>

            <RightQuality peragraph="pay just 4.5% in fees.That's 0.5% less than the" nextperagraph="traditional 5% and thousands in savings." heading="SAVE ON FEES"/>
            
            <LeftQuality heading="MAXIMIZE YOUR SALE PRICE" peragraph="Sell your home at higher price and attract more buyers with" nextperagraph="a $5k interest-free advance for renovations"/>

            <RightQuality peragraph="From setting the rightlist price to closing you'll" nextperagraph="be supported by local industry experts" heading="EXPERTISE AT EVERY STEP"/>
            
        </div>
    )
}

export default QualityRow;