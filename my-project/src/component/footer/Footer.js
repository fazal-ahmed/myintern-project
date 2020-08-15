import React from "react"

function Footer() {
    return (
        <footer class="page-footer font-small pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <div class="image-wrapper">
                            <img className="whitelogo" src="/icons/nock-nock-allwht.png" alt="image" />
                        </div>
                        <br />
                        <p className="footerpera lightwhite">nock nock provides buyers with the<br/>ultimate in Real Estate experiences<br />while dealing with only the top 1%</p>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <h6 className="text-light">Top Searches</h6>
                        <br />
                        <p className="footerpera lightwhite">Real Estate Agent Near Me<br />Real Estate Agent Toronto<br />Real Estate Agent in Oakville<br />Real Estate Agent in Milton</p>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <br /><br />
                        <p className="footerpera lightwhite">Real Estate Agent in Burlington<br />Real Estate Agent in Mississauga<br />Real Estate Agent in Etobicoke<br />Real Estate Agent in Hamilton</p>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <br />
                        <h6 className="lightwhite">Follow us:</h6><br />
                        <div class="image-wrapper">
                            <img className="sociallogo" src="/icons/Facebook.png" alt="image" />
                            <img className="sociallogo" src="/icons/Twitter.png" alt="image" />
                            <img className="sociallogo" src="/icons/Instagram.png" alt="image" />
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <div className="copyright">
                <p className="lightwhite fontverysmall">Terms and condition / About Us / News / Privacy Policy</p>
                <p className="float-right fontverysmall">© 2020 nock inc. All rights reserved</p>
                </div>
                <br />
            </div>
        </footer>
    )
}

export default Footer