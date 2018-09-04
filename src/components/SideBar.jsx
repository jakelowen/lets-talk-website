import React from 'react'
import ltlLogo from '../images/lt_logo_trim_trans.png'

const SideBar = () => (
  <React.Fragment>
    <div className="row" id="logo_block">
      <div>
        <img src={ltlLogo} className="img-fluid" alt="Lets Talk Logo" />
      </div>
    </div>

    <div className="row" id="address_block">
      <address>
        <strong>Let's Talk, Inc.</strong>
        <br /> 765 Ash St
        <br /> Lawrence, KS 66044
        <br /> (785) 764-6004
        <br />
        <span
          className="e-mail"
          data-user="ecnerwalklatstel"
          data-website="moc.liamg"
        />
      </address>
    </div>

    <div className="row" id="donate_block">
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="NZPU7JTRC6JQW" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>

    <div className="row" id="board_block">
      <strong>Board of Directors</strong>
      <ul className="list-unstyled">
        <li>Lori Strecker, RN, President</li>
        <li>Elina Alterman, MSW, Vice President</li>
        <li>Maren Santelli, LMSW, Secretary</li>
        <li>Stephanie Magnuson, MS, Treasurer</li>
        <li>Rep. Dennis “Boog” Highberger</li>
        <li>Lindsay Buck, MA</li>
        <li>Michael Showalter</li>
      </ul>
    </div>
  </React.Fragment>
)

export default SideBar
