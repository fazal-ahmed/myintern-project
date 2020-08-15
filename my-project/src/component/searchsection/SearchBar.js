import React from "react"

function SearchBar() {
    return (
        <React.Fragment>
            <div class="input-group searchbar mb-3">
                <input type="text" id="my_id" class="form-control inputstyle" placeholder="City or Postal Code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button class="btn btn-outline-secondary btnstyle text " type="button">SEARCH</button>
            </div>
            <p className='text-light financingtext text'>FREE FINANCING?</p>
        </React.Fragment>
    )
}
export default SearchBar;