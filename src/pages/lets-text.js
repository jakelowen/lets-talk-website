import React from 'react'
// import { Link } from 'gatsby'

import plum_logo from '../images/plum_logo.png'

import Layout from '../components/Layout'
import '../components/letstalk.css'
// import '../components/letstext.css'

const LetsText = () => (
  <Layout>
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div>
            <img
              src={plum_logo}
              className="img-fluid"
              alt="lets text logo"
              style={{ height: 150, paddingTop: 20 }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="lt-vtitle">
            785.727.7297
            <br />
            Anonymous Questions.
            <br />
            Real Answers.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>
            We get it. We’ve worked with young people for a long time, and we
            understand that embarrassment often surrounds questions about sex
            and sexuality. We know that your confidentiality is important.
          </p>
          <p>
            Questions that you texted in are relayed, confidentially, through a
            web-based application to one of our professional educators, who will
            respond with the answer and/or links to additional pertinent
            resources.
          </p>
          <p>
            Because of this, our staff won't see the phone number or contact
            information associated with questions that are texted in. We are not
            gathering or storing information about user identities either. So,
            unless you disclose specific information about your identity, we
            won’t know who you are. And, frankly, we don’t need to. Our goal is
            to provide you with answers to your questions. Period.
          </p>
          <p>
            This program is not intended to serve as a therapeutic resource, but
            rather a way for you to get medically accurate information and links
            to resources in response to your questions.
          </p>
          <p>So go ahead-- Text us!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="lt-vtitle">generous support from:</div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <p>
            Let's Text's launch was made possible by generous support from the{' '}
            <a href="https://www.facebook.com/wichitacf/?fref=mentions">
              Wichita Community Foundation
            </a>
            's George R. Tiller, M.D., Memorial Fund for the Advancement of
            Women’s Health.
          </p>
          <p>
            In addition to providing financial assistance, Let's Talk draws
            inspiration from Dr. Tiller’s bravery and unwavering commitment to
            women’s health throughout his life. Dr. Tiller serves as an
            inspiration to our organization as we continue fighting for
            reproductive justice, including our efforts to ensure students have
            access to robust, comprehensive sexuality education.
          </p>
          <p>
            We are incredibly grateful for the opportunity to carry Dr. Tiller's
            legacy forward.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="lt-vtitle">contribute.</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>
            Your contribution will help ensure access to comprehensive sex
            eduction for Kansas communities. Let’s Talk is committed to ensuring
            students receive relevant, inclusive information to support healthy
            decision making. Your contribution is tax-deductible to the fullest
            extent of the law. Please donate today to support and expand this
            critical work in Kansas.
          </p>

          <p>
            Checks made out to “Let’s Talk, Inc.” can be mailed to:
            <address>
              <strong>Let's Talk, Inc.</strong>
              <br /> 765 Ash St
              <br /> Lawrence, KS 66044
            </address>
          </p>

          <p>
            Or, donate securely online through this PayPal link:
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="NZPU7JTRC6JQW"
              />
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
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default LetsText
