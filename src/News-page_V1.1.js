import React, { Component } from 'react';
import "./css/news.css";
import navBar from './js/common';
import Init from './js/news';
import log from "./images/logo.png";
import "swiper/css/swiper.min.css";
import newsHolder from "./images/news/news-placeholder.jpg";
import NavBarComponent from "./navbar";

import { Link } from 'react-router-dom';


/* **********************ADD MORE NEWS ARTICLES HERE************************* */
var newsItems = [
  {
    title:
      "The Honourable Prime Minister interacted with Agnikul Team",
    text:
      "Agnikul had the opportunity to interact with the Honourable Prime Minister of India about the uniqueness of Agnibaan during his visit to IIT Madras.",
    link:
      "https://static.pib.gov.in/WriteReadData/Gallery/PhotoGallery/2019/Sep/H2019093077103.JPG",
  },
  {
    title:
      "ISRO signed Non-Disclosure Agreement with M/s Agnikul",
    text:
      "Dr K Sivan along with ISRO Centre Directors; Shri S Somanath, Director, VSSC, Dr V Narayanan, Director, LPSC, Shri Sam Dayala Dev, Director, IISU and Shri K Alagavelu, Director, IPRC assured all support to M/s Agnikul for testing and qualifying their launch vehicle.",
    link:
      "https://www.isro.gov.in/update/03-dec-2020/non-disclosure-agreement-signed-with-m-s-agnikul",
  },
  {
    title:
      "Isro to help Agnikul with tech support to build its small rocket",
    text:
      "Agnikul signed a non disclosure agreement with the Department of Space that will allow it to access ISRO facilities and technical expertise to build its rocket.",
    link:
      "https://www.isro.gov.in/update/03-dec-2020/non-disclosure-agreement-signed-with-m-s-agnikul",
  },
  {
    title:
      "Agnikul partners with HOSTmi to strengthen customer access in European markets",
    text:
      "This partnership has taken us a step forward in establishing our vehicle as a “Made in India, for the world” solution.",
    link:
      "https://medium.com/agnikuls-blog/agnikul-partners-with-hostmi-to-strengthen-customer-access-in-european-markets-6e2047e2cc3a",
  },
  {
    title: "Leaf Space and Agnikul partner to enable rapid access to space",
    text:
      "We are super excited to announce our official partnership with Leaf Space, a service provider of customized ground segment solutions.",
    link:
      "https://medium.com/@AgnikulCosmos/leaf-space-and-agnikul-partner-to-enable-rapid-access-to-space-bcaa713ead62",
  },
  {
    title:
      "Chennai start-up building India's first private smallsat rocket, eyes ISRO help for testing",
    text:
      "Chennai start-up Agnikul Cosmos is building India's first private small satellite rocket and will be seeking the help of the Indian Space Research Organisation (ISRO) for conducting tests.",
    link:
      "https://www.newindianexpress.com/cities/chennai/2020/jun/30/chennai-start-up-building-indias-first-private-smallsat-rocket-eyes-isro-help-for-testing-2163503.html",
  },
  {
    title:
      "Indian start-up is building a three-stage rocket that could be ready to launch by 2022",
    text:
      "With the government opening up the space sector for private investments..",
    link:
      "https://www.businessinsider.in/science/space/news/indian-start-up-is-building-a-three-stage-rocket-that-could-be-ready-to-launch-by-2022/articleshow/76691391.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    title:
      "'IN-SPACe' can curb brain drain of huge Indian talent pool: ISRO chairman K Sivan",
    text:
      "Thousands of engineers pass out each year and many migrate to other countries due to limited opportunities within the country, Sivan said.",
    link:
      "https://www.newindianexpress.com/nation/2020/jun/27/in-space-can-curb-brain-drain-of-huge-indian-talent-pool-isro-chairman-k-sivan-2162302.html",
  },
  {
    title:
      "It’s win-win as India expands ‘space’ to accommodate private sector",
    text:
      "Srinath Ravichandran heaved a cathartic sigh of relief that helped loosen the knot in his stomach. The CEO & co-founder of Chennai-based start-up Agnikul Cosmos had everything going right, at least directionally.",
    link:
      "https://www.thehindubusinessline.com/news/its-win-win-as-india-expands-space-to-accommodate-private-sector/article31915844.ece",
  },
  {
    title:
      "Isro to move satellites, rockets to its commercial arm NSIL; boost for private sector in space",
    text:
      "India’s space agency will move all its operational satellites, rockets and applications...",
    link:
      "https://economictimes.indiatimes.com/news/science/private-sector-to-be-allowed-to-build-rockets-provide-launch-services-isro-chief-sivan/articleshow/76619366.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    title:
      "What does it take to (re)create the future of Space from India? 8 Takeaways from the SpaceTech Startups community",
    text:
      "As part of the SpaceTech Startups (STS) community, the first-ever Space Crowd Pitch took place in Bengaluru on March 28, 2019. The event brought together Space startup founders, sector-focused investors, subject-matter experts, ecosystem leaders, and engineering talents.",
    link:
      "https://yourstory.com/2019/04/what-does-it-take-to-recreate-the-future-of-space-",
  },
  {
    title: "Artha Venture Fund invests Rs 3.6 crore in Agnikul",
    text:
      "Artha Venture Fund (AVF), an early-stage micro-VC fund, has announced an investment of $500,000 (Rs 3.6 crore) in space-tech company Agnikul in its Pre-Series A funding round.",
    link:
      "https://www.financialexpress.com/industry/sme/artha-venture-fund-invests-rs-3-6-crore-in-agnikul/1913136/",
  },
  {
    title: "Chennai-based space tech start-up Agnikul has raised ₹23.4 crores",
    text:
      "Agnikul, operating out of the National Centre for Combustion. Agnikul, operating out of the National Centre for Combustion.",
    link:
      "https://www.thehindu.com/news/cities/chennai/chennai-based-space-tech-start-up-agnikul-has-raised-234-crore/article31097822.ece",
  },
  {
    title:
      "Chennai is quickly turning into the new hotbed for deep-tech startup",
    text:
      "IIT-Madras and its research park have played a key role in nurturing deep-tech startups",
    link:
      "https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/chennai-is-the-new-hotbed-for-deep-tech/articleshow/70514504.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    title: "Small rockets are the next big thing",
    text:
      "With Chandrayaan-2 heading towards the Moon, a slew of exciting projects is in the offing",
    link:
      "https://www.thehindubusinessline.com/news/science/small-rockets-are-the-next-big-thing/article28655816.ece",
  },
  {
    title:
      "IIT Madras-incubated Agnikul is aiming to become the first Indian startup to put small satellites into space",
    text:
      "Over the years, the Indian aerospace industry has achieved major breakthroughs...",
    link:
      "https://yourstory.com/2019/05/iit-madras-startup-agnikul-space-spacex-isro",
  },
  {
    title:
      "Dreams beyond sky! IIT-Madras incubated 'Agnikul' becomes 1st Indian start-up to launch small satellites",
    text:
      "Agnikul, operating out of the National Centre for Combustion. Agnikul, operating out of the National Centre for Combustion...",
    link:
      "https://m.dailyhunt.in/news/india/english/news+bharati-epaper-newsbhar/dreams+beyond+sky+iit+madras+incubated+agnikul+becomes+1st+indian+start+up+to+launch+small+satellites+in+space-newsid-120690176",
  },
  {
    title:
      "Made in India, for the world: this startup incubated at IIT Madras is an Uber for putting satellites in orbit",
    text:
      "Launching a satellite is, quite literally, rocket science. Which means it is also expensive...",
    link:
      "https://in.finance.yahoo.com/news/made-india-world-startup-incubated-103000795.html",
  },
  {
    title: "Agnikul Cosmos aims for a new orbit",
    text:
      "The lean start-up manufactures rockets that can launch satellites up to 100 kg",
    link:
      "https://www.thehindubusinessline.com/specials/emerging-entrepreneurs/agnikul-cosmos-aims-for-a-new-orbit/article26703929.ece",
  },
  {
    title: "Now, send ashes of departed souls to space",
    text:
      "Now, you can go beyond just gazing at the stars reminiscing about your departed into the night",
    link:
      "http://timesofindia.indiatimes.com/articleshow/70635490.cms?utm_source=co",
  },
  {
    title: "Space startup Agnikul Cosmos raises Rs 3cr in seed funding",
    text:
      "Aerospace startup incubated at IIT-Madras’ incubation cell, Agnikul Cosmos has raised Rs. 3 Crore in a seed funding round from seed-stage investment firm Speciale Incept Advisors",
    link:
      "http://timesofindia.indiatimes.com/articleshow/67981962.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    title:
      "From Space-tech to waste management, IIT-M incubation cell firms are solving real-world challenges",
    text:
      "when enterprises working on advanced technology business models - more often referred to as deep tech startups - attracted increased attention and funding",
    link:
      "http://timesofindia.indiatimes.com/articleshow/67341477.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    title:
      "ISRO alone can’t get the Gaganaut in space. It will need a little help from Anant, Agnikul, Bellatrix, and Inox",
    text:
      "As ISRO starts work on human flight, its chairman trying to reengineer the organization for speed and innovation. Private companies are biggest beneficiaries here.",
    link:
      "https://economictimes.indiatimes.com/prime/technology-and-startups/isro-alone-cant-get-the-gaganaut-in-space-it-will-need-a-little-help-from-anant-agnikul-bellatrix-and-inox-/primearticleshow/66253757.cms",
  },
  {
    title:
      "India is slowly catching up with the world to use 3D printing in building products",
    text:
      "In conventional rockets, the engine is assembled by cutting metal and forged based on specifications. There is wastage of metal and the process is long-drawn.",
    link:
      "https://economictimes.indiatimes.com/news/science/india-is-slowly-catching-up-with-the-world-to-use-3d-printing-in-building-products/articleshow/67085613.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    title:
      "Perils in space funding: India's first private Moon mission aborted",
    text:
      "Start-ups in space sector say mobilising funds is the biggest barrier in India as investors are hesitant to support such high-risk ventures ",
    link:
      "https://www.business-standard.com/article/companies/teamindus-calls-off-india-s-first-private-moon-mission-due-to-funds-crunch-118010900337_1.html",
  },
  {
    title:
      "Chennai-based firm among 24 startups to join Airbus accelerator programme",
    text:
      "Airbus has selected 24 new startups, including Chennai-based AgniKul Cosmos, to join its BizLab for the launch of the fourth accelerator which will provide a platform for developing previously untapped technologies and ways of working in the aerospace sector.",
    link:
      "https://www.business-standard.com/article/companies/chennai-based-firm-among-24-startups-to-join-airbus-accelerator-programme-118111300732_1.html",
  },
  {
    title:
      "Despite tech prowess, start-ups in the space sector find it hard to raise funds",
    text:
      "While Isro wants private industry participation and is setting up incubation centers, there are issues related to policies and the general mindset of investors",
    link:
      "https://www.business-standard.com/article/current-affairs/despite-tech-prowess-start-ups-in-space-sector-find-it-hard-to-raise-funds-118090700999_1.html",
  },
];


/* *********************NEWS PAGNATION COMPONENT*************************** */
class NewsPagination extends Component { 

  constructor(props) {
    super(props);
    this.moveToPage = props.moveToPage;
    this.getCurrent = props.getCurrent;
  
  }

  render() {
  
    var length = Math.ceil(newsItems.length / 6.0);

    var numbers = [];
    for (var i = 1; i <= length; i++)
      numbers.push(i);
    var pagination = this;
    var bullets = numbers.map(function (number) {
      return (<div key={number.toString()}
        className={
          pagination.getCurrent() == number
            ? "news__pagination-bullet active"
            : "news__pagination-bullet"
        }

        onClick={(e) => pagination.moveToPage(number)}
      >
        {number}
      </div>);
         
    });
    return (
      <div>
        <div className="news__pagination">
          {length > 1 && (
            <div className="news__pagination-inner">
              <div className="news__pagination-bullet" onClick={(e) => this.moveToPage(this.getCurrent() - 1)}>&lt;&lt;</div>
              {bullets}
              <div className="news__pagination-bullet" onClick={(e) => this.moveToPage(this.getCurrent() + 1)}>&gt;&gt;</div>
            </div>
          )}
        </div>
      </div>
    );
}

}

/* **********************News Row Component - component for each row of news articles************************* */

function NewsRow(offset,numberOfArticles) {

  var newsIndices = [];
  var currNumberOfArticles = Math.min(3, numberOfArticles);
  for (var i = 0; i < currNumberOfArticles; i++)
    newsIndices.push(offset + i);
  var newsCells = newsIndices.map(function (index) {
    
    return (<div className="col-sm">
      <div className="news__card">
        <div className="row">
          <div className="col-xs news__image-div">
          </div>
          <div className="col-xs">
            <div className="news__content">
              <p className="news__title">
                {newsItems[index].title}
              </p>
              <p className="news__text">
               {newsItems[index].text}
              </p>
            </div>
            <a
              href={newsItems[index].link}
              target="_blank"
              className="news__link"
            >
              Read Article
            </a>
          </div>
        </div>
      </div>
    </div>);
  });

  var numberofEmpty = Math.max(0, 3 - currNumberOfArticles);
  var emptyIndices = [];
  for (var i = 0; i < numberofEmpty; i++) emptyIndices.push(i);
  var emptyCells = emptyIndices.map(function (number) {
    return (<div className="col-sm news__empty-cell"></div>)
  });

  return (
    <div className="row">
      {newsCells}
      {numberOfArticles < 3 && emptyCells}
    </div>
  );

}

/* **********************NEWS TABLE COMPONENT - It is constructed as a collection of news rows************************* */
function NewsTable(props) {
  var current = props.current;
  var offset = (current - 1) * 6;
  var numberOfArticles = Math.min(6, newsItems.length - offset);
  var firstRow = NewsRow(offset, numberOfArticles);
  var secondRow = undefined;
  if (numberOfArticles > 3)
    secondRow = NewsRow(offset + 3, numberOfArticles - 3);
  return (
    <div>
      <div className="container-fluid news__div">
        {firstRow}
        {numberOfArticles > 3 && secondRow}
      </div>
    </div>
  );
}

class Newsmodified extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1,
    };

    this.moveToPage = this.moveToPage.bind(this);
    this.getCurrent = this.getCurrent.bind(this);
  }

  moveToPage(number) {
    if (number > Math.ceil(newsItems.length / 6.0 ) || number < 1)
      return;
    this.setState({
      current: number,
    });
  }

  

  getCurrent() {
    return this.state.current;
  }

  render() {
    Init(); // function to initialize animations and swipers
    console.log(this.state.current);
    return (
      <div className="body">
        {/* ***************NAVBAR******************* */}
        <NavBarComponent></NavBarComponent>{" "}
        {/*Press release*/}
        <div className="news__title-div">
          <p className="news__title-div-heading">Press Releases</p>
          {/* <p className="news__title-div-text">
            Our executive team draws on decades of experience across multiple
            successful technology startups and helps guide the company towards
            its strategic goals.
          </p> */}
        </div>
        <NewsTable current={this.state.current}></NewsTable>
        <NewsPagination
          moveToPage={this.moveToPage}
          getCurrent={this.getCurrent}
        ></NewsPagination>
        <hr></hr>
        {/*News section*/}
        <div className="news__title-div">
          <p className="news__title-div-heading">News & Updates</p>
          {/* <p className="news__title-div-text">
            Our executive team draws on decades of experience across multiple
            successful technology startups and helps guide the company towards
            its strategic goals.
          </p> */}
        </div>
        <NewsTable current={this.state.current}></NewsTable>
        <NewsPagination
          moveToPage={this.moveToPage}
          getCurrent={this.getCurrent}
        ></NewsPagination>
        
        {/* ****************FOOTER AND MODAL FOR PRIVACY POLICY****************** */}
        <div className="custom-modal-out">
          <div className="custom-modal-outer">
            <div className="custom-modal">
              <p className="close-icon">X</p>
              <p className="custom-modal-heading">
                TERMS, CONDITIONS AND PRIVACY POLICY
              </p>
              <p className="custom-modal-text">
                These terms of use are an agreement between Agnikul Cosmos
                Private Limited (“Agnikul”, “we”, “us” or “our”) and users of
                its website (“you”, “your” or “user”). This agreement (the
                “Agreement”) also governs your use of this website{" "}
                <a href="https://nikul.in">(https://www.agnikul.in/)</a> (the
                “Site”). By using the Site, you acknowledge that you have
                reviewed and agree to all of the terms of this Agreement and
                agree to be bound by them in connection with your use of the
                Site. By entering, accessing, browsing, submitting information
                to, or otherwise using this site, you acknowledge and agree to
                the following terms and conditions.
              </p>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Intellectual Property</p>
                <p className="custom-modal-text">
                  All intellectual property rights in the Site including
                  content, graphics and copyright works are owned by us. We
                  exclusively own all rights in the compilation, design and
                  layout of the Site.<br></br>
                  You may access, view and print the content on the Site
                  provided that you only use that content for your personal use
                  or otherwise in relation to using or considering our services.
                  <br></br>
                  You must obtain our written permission to copy, reproduce or
                  publish any of the content (including graphics, videos,
                  photographs or other copyright works) on the Site
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Third Party Websites</p>
                <p className="custom-modal_text">
                  From time to time, the Site may include features and
                  functionality that allow you to interact with other sites that
                  are not under our control, including social media websites. We
                  provide these features, functionality, and links to you only
                  as a convenience and do not endorse any linked websites or
                  social media sites and are not responsible for the contents or
                  transmission of any linked websites or social media sites.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">
                  Provision of Information and Privacy
                </p>
                <p className="custom-modal-text">
                  You are not required to provide personal information to us. If
                  you provide information to us, you will ensure that such
                  information is accurate and complete.<br></br>
                  We collect the personal information provided to us and may use
                  it for communicating with you, statistical analysis, and
                  research and development.<br></br>
                  We do not generally disclose personal information to third
                  parties for use for their own purposes. In some instances, we
                  may do so, including to our affiliates or providers who
                  complete transactions or perform services on our behalf, or if
                  we are required to by law.<br></br>
                  Any personal information you provide to us may be stored on
                  our providers’ secure servers. This may involve transferring
                  your information to countries which have less legal protection
                  for personal information than the countries in which you or we
                  are based.<br></br>
                  We may also collect technical data and related information
                  when you access or log on to the Site. This may include
                  information about your computer/tablet/mobile phone and the
                  way users arrive at, browse or interact with the Site. We may
                  collect this information through the use of cookies or other
                  means. If you want to disable cookies, you can do so by
                  changing your browser settings, although this may alter the
                  functionality of the Site. We use the technical information
                  collected to have a better understanding of how people use the
                  Site and how we might improve it
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">All Liabilities Excluded</p>
                <p className="custom-modal-text">
                  You agree that your use of this Site is at your sole risk.
                  Because of the number of possible sources of information
                  available through the Site, and the inherent hazards and
                  uncertainties of electronic distribution, there may be delays,
                  omissions, inaccuracies or other problems with such
                  information.<br></br>
                  To the extent permitted by law:
                </p>
                <ol>
                  <li className="custom-modal-text">
                    all warranties, representations and guarantees are excluded,
                    including suitability, fitness for purpose, appropriateness,
                    availability for use, accuracy or completeness of the Site
                    or the content on or accessed through it;
                  </li>
                  <li className="custom-modal-text">
                    under no circumstances shall Agnikul or its affiliates,
                    agents or licensors be liable to you or anyone else for any
                    damages (whether direct, indirect, punitive, incidental,
                    special, consequential or otherwise, or whether resulting
                    from tort, contract or other theories of law) including but
                    not limited to attorneys’ fees and lost profits, in
                    connection with, or in any manner arising out of: (1) the
                    use or inability to use this Site and its content; (2) any
                    goods or services obtained through third parties referenced
                    or made available on or through this Site; (3) any errors or
                    omissions in the content or information on the Site; or (4)
                    any computer virus or other programming device, even if
                    Agnikul is advised of the possibility thereof; and
                  </li>
                  <li className="custom-modal-text">
                    you indemnify us against all loss we suffer or incur as a
                    direct or indirect result of your failure to comply with
                    this Agreement.
                  </li>
                </ol>
                <p className="custom-modal-text">
                  If you become dissatisfied with this Site, or the terms,
                  conditions or policies governing this Site, your sole and
                  exclusive remedy is to discontinue using this Site. This
                  limitation on damages is essential to the agreement between
                  you and us and the Site would not be provided free of charge
                  without such limitation.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">
                  Governing Law and Jurisdiction
                </p>
                <p className="custom-modal-text">
                  The Site, all related content, and this Agreement shall be
                  governed by and construed in accordance with the laws of
                  India, without regard to the principles of conflicts of laws.
                  The courts of Chennai, India shall have exclusive jurisdiction
                  on any dispute that arises in relation to this Agreement or
                  your use of the Site.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Amendments</p>
                <p className="custom-modal-text">
                  We may amend this Agreement from time to time, and you should
                  ensure that you check and read the same regularly. If you
                  continue to use the Site after this Agreement is amended, you
                  are deemed to have agreed with the new terms of this
                  Agreement.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Contact</p>
                <p className="custom-modal-text">
                  If you have any queries, please contact privacy@agnikul.in
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <div className="footer-section">
                  <p className="footer-normal phone">Phone</p>
                  <p className="footer-bolder">+91 99625 07524</p>
                  <p className="footer-bolder">+91 96772 82356</p>
                  <p className="footer-bolder">+1 551 689 2314</p>
                </div>
              </div>
              <div className="col-sm border-column">
                <div className="footer-section">
                  <p className="footer-normal">Addresses</p>
                  <p className="footer-bolder">
                    Agnikul Cosmos Private Limited.
                  </p>
                  <p className="footer-bold">
                    National Center for Combustion R&D, <br></br>3rd floor, IIT
                    Madras, <br></br> Chennai 600036
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="footer-section footer-feel-free">
                  <p className="footer-normal">
                    Curious to know more about us ? Reach out to
                  </p>
                  <a href="mailto:curious@agnikul.in">
                    <p className="footer-bolder">curious@agnikul.in</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="footer-section">
                  <p className="footer-normal">Email</p>
                  <p className="footer-bolder">
                    <Link to="/career" className="nav">
                      Careers
                    </Link>{" "}
                    -
                    <a href="mailto:humancapital@agnikul.in">
                      humancapital@agnikul.in
                    </a>
                  </p>

                  <p className="footer-bolder">
                    <Link to="/book" className="nav">
                      Customers
                    </Link>{" "}
                    -
                    <a href="mailto:payloadpeople@agnikul.in">
                      payloadpeople@agnikul.in
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm border-column">
                <div className="footer-section">
                  <p className="footer-bolder">
                    Agnikul Cosmos Launch Vehicles Private Limited
                  </p>
                  <p className="footer-bold">
                    Kerala Startup Mission, Technopark, Thejaswini, G3B,
                    Technopark Rd, Karyavattom, Thiruvananthapuram, Kerala
                    695581
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="footer-section">
                  <div className="row">
                    <div className="col-xs">
                      <a
                        href="https://medium.com/agnikuls-blog"
                        target="_blank"
                      >
                        <p className="footer-bolder">Blog</p>
                      </a>
                    </div>
                    <div className="col-xs">
                      <Link to="/news" className="footer-bolder">
                        <p className="footer-bolder">News</p>
                      </Link>
                    </div>
                    <div className="col-xs">
                      <a
                        className="footer-bolder"
                        href="https://www.youtube.com/channel/UCZ4l5Je0PVUvSrHr76vP0wA/featured"
                        target="_blank"
                      >
                        <p className="footer-bolder">Videos</p>
                      </a>
                    </div>
                  </div>
                  <p className="footer-bolder book__terms__link">
                    Terms, Conditions and Privacy Policy
                  </p>
                  <div className="footer-social-logos">
                    <a
                      href="https://twitter.com/@agnikulcosmos"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://instagram.com/agnikul/" target="_blank">
                      <i
                        className="fa fa-lg fa-instagram"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/agnikul-cosmos/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsmodified;