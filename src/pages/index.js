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
          <strong>Vanessa Sanburn, MSW</strong>, started her work in sexual
          health as a Medical Assistant in a Planned Parenthood clinic before
          transitioning to their Education Department, where she found her
          calling: working to ensure sexuality education provides a
          thought-provoking, positive, and self-affirming experience for
          participants. Vanessa has served on the Lawrence School Board of
          Education since 2009, working in part to improve access to meaningful,
          inclusive, and comprehensive sex education for all students in her
          district. In 2014, Vanessa was honored with a Spotlight award in
          Washington DC by the Sexuality Information and Education Council of
          the U.S. for her work advancing sex ed policy and practices in
          Lawrence Public Schools.{' '}
        </p>
      </div>
      <div class="col-sm-6">
        <img src={cory_trim} class="img-fluid" alt="Cory Green" />
        <p class="bio_text">
          <strong>Cori Green, RN, BSN</strong>, is a professional nurse at
          Lawrence Memorial Hospital. Cori began her career in public health,
          working in a clinical setting to provide a wide variety of family
          planning services. In 2005, she began teaching a family based class to
          facilitate family communication about sexuality. In 2013 and again in
          2017, she received the Daisy Award, a nationwide award program that
          recognized her excellence in nursing while working on an inpatient
          medical unit at Lawrence Memorial Hospital. Cori has taught throughout
          her career, volunteering in classrooms throughout middle and high
          schools as a guest speaker on a variety of sexual health topics. In
          addition, Cori has received special training to conduct sexual assault
          evidentiary exams for rape victims that come to the hospital emergency
          room.
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
        <div class="vtitle">current programs.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>
          Let’s Talk is in its third year delivering sex education in freshman
          health classes throughout Lawrence Public Schools, helping to
          implement the robust National Sexuality Education Standards. What
          started several years ago as guest speaking in several health classes
          has turned into a comprehensive, multi-day program aimed at helping
          students contemplate critical concepts such as sexual decision making,
          consent, healthy relationships, identity, and personal safety. In the
          coming years, we’ll be looking to expand this work to schools across
          the state.
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

    <div class="row">
      <div class="col-sm-12">
        <div class="vtitle">stay tuned.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>
          Exciting things are on the horizon— We’re in the process of developing
          community classes to help parents navigate discussions about puberty
          and sexuality with their children, among other potential workshops.{' '}
        </p>

        <p>
          Evidence shows that teens get most of their information about
          sexuality from their peers— so we plan to develop a Peer Education
          Program to make sure good information is available where it is needed
          most. We’ve recieved great feedback from teens who’ve participated in
          focus groups with us, and can’t wait to begin work on this program.{' '}
        </p>

        <p>
          One of our favorite things to do is answer anonymous questions— we’ve
          heard it all and love bringing light to what is often a confusing or
          shameful topic for people. We’re in the process of developing a text
          messaging service where anyone can get their sexual health questions
          answered anonymously.{' '}
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
