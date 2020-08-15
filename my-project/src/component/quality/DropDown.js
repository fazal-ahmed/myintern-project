import React from "react"

function DropDown() {
    return (
        <div class="dropdowns">
            <button class="btn btn-secondary dropdown-toggle bg-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by Ares
                </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Sort by Ares</a>
                <a class="dropdown-item" href="#">Sort by Ares</a>
                <a class="dropdown-item" href="#">Sort by Ares</a>
            </div>
        </div>
    )
}

export default DropDown;