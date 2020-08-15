import React from "react"
import QualityRow from "./QualityRow"
import DropDown from "./DropDown"

function Quality() {
    return (
        <div className="container">
            <h2 className="heading">Why People Choose Us Over The Rest.</h2>

            <QualityRow />

            <DropDown/>

        </div>
    )
}

export default Quality;