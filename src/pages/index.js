import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/Layout'

import vanessa_trim from '../images/vanessa_trim.jpg'
import cory_trim from '../images/cory_trim.jpg'
import '../components/letstalk.css'

const IndexPage = () => (
  <Layout>
    <div class="row">
      <div class="col-sm-12">
        <div class="vtitle">educate. prepare. support health.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>
          <strong>
            Let’s Talk, Inc. is a non-profit organization dedicated to providing
            comprehensive sexuality education to improve the lives and health of
            Kansans. Your donation is tax-deductible.
          </strong>
        </p>
        <p>
          Students deserve access to thought-provoking, meaningful,
          comprehensive sex education. “Let’s Talk” aims to build a strong
          foundation of comprehensive sexuality education in the Lawrence
          community and throughout the state of Kansas.
        </p>
        <p>
          The goal of most sexuality education programs in the US is to decrease
          negative consequences of sexual activity— to stop the spread of
          sexually transmitted infections and decrease rates of teen pregnancy.
          These are worthy goals, but we don’t believe they go far enough.
        </p>
        <p>
          Let’s Talk uses a model that is focused more broadly around promoting
          the well-being, health and dignity of individuals. Helping people
          contemplate their personal values and think critically about their
          decisions using a wider lens of health engages people around
          additional critical aspects of sexuality such as consent,
          relationships, identity, pleasure, and comfort with one’s body.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="vtitle">about us.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <img src={vanessa_trim} class="img-fluid" alt="Vanessa Sanburn" />
        <p class="bio_text">
          <strong>Vanessa Sanburn, MSW</strong>, started her work in sexual health as a Medical Assistant in a Planned Parenthood clinic before transitioning to their Education Department, where she found her calling: delivering comprehensive sexuality education that provides meaningful, affirming, and engaging information to youth, families, and communities. Vanessa served on the Lawrence School Board of Education from 2009-2018, working in part to improve access to meaningful, inclusive, and comprehensive sex education for all students in her district. In 2014, Vanessa was honored with a Spotlight award in Washington DC by the Sexuality Information and Education Council of the U.S. for her work advancing sex ed policy and practices in Lawrence Public Schools. In 2016, she successfully lobbied for Lawrence Public Schools to provide open access condoms to students at both district high schools. When she’s not teaching, she’s advocating!
        </p>
      </div>
      <div class="col-sm-6">
        <img src={cory_trim} class="img-fluid" alt="Cory Green" />
        <p class="bio_text">
          <strong>Cori Green, RN, BSN</strong>, is also an award winning nurse and the director of the SANE program at Lawrence Memorial Hospital. Cori began her career in public health, working in a clinical setting to provide a wide variety of family planning services. In 2005, she began teaching a family based class to facilitate family communication about sexuality. In 2013 and again in 2017, she received the Daisy Award, a nationwide award program that recognized her excellence in nursing while working on an inpatient medical unit at Lawrence Memorial Hospital. Cori has taught throughout her career, volunteering in classrooms throughout middle and high schools as a guest speaker on a variety of sexual health topics. She works tirelessly to create a culture of consent in her community. 
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p class="bio_text">
          Combined, Vanessa and Cori have over 20 years of experience teaching
          sexuality education and can bring both a social work and nursing skill
          set to this work. Having education and skills in these fields provides
          students access to medically accurate information, based upon
          real-world clinical knowledge and experiences.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="vtitle">school-based sex ed programs.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>
          Let’s Talk supports and delivers programmming in middle schools and high schools across Northeast Kansas,
    helping to
          implement the robust National Sexuality Education Standards. What
          started many years ago as guest speaking in several health classes
          has turned into annual, comprehensive, multi-day programs aimed at helping
          students contemplate critical concepts such as sexual decision making,
          consent, healthy relationships, identity, and personal safety.
        </p>
      </div>
    </div>

<div class="row">
      <div class="col-sm-12">
        <div class="vtitle">let's talk about growing up.</div>
      </div>
    </div>

<div class="row">
      <div class="col-sm-12">
                
        <p>
        This 5-session class series is designed to support healthy communication between children and their caregivers about puberty, body image, and sexuality, so children are more comfortable and better prepared to contemplate critical concepts such as consent, healthy relationships, personal safety, and sexual decision making.
        </p>

        <p>
          <strong>Who is this class designed for?</strong><br/> 
          The content covered is developmentally geared towards 5th and 6th graders, but depending on readiness as determined by parents/guardians we have had younger or older children attend. Talk to us if you have questions/concerns about this, as we are happy to help.  
        </p>
        
        <p>
          <strong>Cost info:</strong><br/> 
          The cost is $100/pair, with scholarships available for those who need them. We won't turn anyone away for inability to pay, and offer $25, $50, $75, or full discounts based upon need. 
        </p>

        <p>
          <strong>Themes covered: </strong><br/> 
          Session 1: Parent’s Night<br/> 
          Session 2: Introduction, Self Esteem & Body Image, Personal Values<br/> 
          Session 3: Reproductive Body Parts, Gender/Gender Roles, Puberty<br/> 
          Session 4: Pregnancy, Contraception, Sexually Transmitted Infections<br/> 
          Session 5: Consent, Communication, Decision Making, Relationships<br/>         
        </p>

        <p>
          For more information or to enroll in an upcoming class, email <a href="mailto:info@letstalklawrence.org">info@letstalklawrence.org</a>
        </p>

      </div>
    </div>



    <div class="row">
      <div class="col-sm-12">
        <div class="vtitle">contribute.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
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
            <br /> 901 Kentucky, Ste 305
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

    
    
  </Layout>
)

export default IndexPage
