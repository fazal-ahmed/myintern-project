import React from "react"
import SearchBar from "./SearchBar";

function TextContent() {
    return (
        <div className="centered">
            <h5 className="text-light buytext">GET A $5,000 INTEREST-FREE RENOVATION ADVANCE</h5>
            <br />
            <h1 className="fontfamily text-light buytext"><strong>Buy</strong> your home from the<br />comfort of your couch</h1>
            <br />
            <h6 className="text-light text">GET READY FOR A REAL ESTATE EXPERIENCE<br />UNLIKE ANY YOU'VE EVER HAD BEFORE.</h6>
            <br />

            <SearchBar />

        </div>
    )
}

export default TextContent;