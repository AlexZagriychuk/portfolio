import ElementUtils from "./elementUtils.js"


function generatePortfolioProjectHTML({title, fullWebsiteUrl, githubUrl, showWebsiteLink, techStack, shortDescription, fullDescriptionBullets}) {
    let res = `
        <li class="portfolio__project" tabindex="0">
          <h3 class="portfolio__project-title">${title}</h3>
          <div class="portfolio__project-preview-and-info">
            <iframe class="portfolio__project-preview" src="${fullWebsiteUrl}" scrolling="no" tabindex="-1"></iframe>
            <div class="portfolio__project-info">
              <div class="portfolio__project-description short-description">
                <p><span>Tech stack: ${techStack}.</span> ${shortDescription}</p>
                <a class="portfolio__project-show-info project-show-more">Show more...</a>
              </div>
              <div class="portfolio__project-description full-description">
                <p>Tech stack: ${techStack}</p>
                  <ul>
    `

    fullDescriptionBullets.forEach(bullet => {
        res += `\n              <li>${bullet}</li>`
    })
                
    res += `
                </ul>
                <a class="portfolio__project-show-info project-show-less">Show less...</a>
              </div>
              <div class="portfolio__project-links">`
    
    if(showWebsiteLink) {
        res += `<a class="portfolio-project-link icon-desktop-1" href="${fullWebsiteUrl}" target="_blank" tabindex="-1">Website</a>`
    }
           
    res += `
                <a class="portfolio-project-link icon-github-circled" href="${githubUrl}" target="_blank" tabindex="-1">Github</a>
              </div>
            </div>
          </div>
        </li> <!-- /portfolio__project -->
    `

    return res
}

function generateCertificateHTML({pdfUrl, imageUrl, title, date}) {
    let res = `
        <li>
            <a class="certificates__cert" href="${pdfUrl}" target="_blank">
            <div class="cert__desc">
                <h3 class="cert__title">${title}</h3>
                <div class="cert__date">Date: ${date}</div>
            </div>
            <div class="cert__photo">
                <img src="${imageUrl}" alt="">
            </div>
            </a>
        </li>
    `

    return res
}


export function renderContent() {
    const content = {
        introDescParagraphs: [
            "Hello, my name is Alexander Zagriychuk.",
            "I am a Software Developer living in Vancouver, BC, Canada.",
        ],
        aboutMeTextParagraphs: [
            "I started my career in the software industry as a manual tester. After learning some programming skills outside of work and applying them to creating a few small utilities and automating some manual work processes, I fell in love with programming.",
            "I worked as a manual tester for 2 years and then I switched to a test automation / developer in test role and have been working in this role for 6.5 years (including almost 2 years in Canada).",
        ],
        lifeFacts: [
            "Learned English while never being in any English-speaking country (before I moved to Canada). Achieved very high score (for a non-native language speaker) on my IELTS General English language proficiency exam (Overall band = 8.5, Reading = 9.0, Listening = 8.5, Speaking = 8.0, Writing = 7.5; where 9.0 is the maximum possible test score)",
            "Moved to Canada in the middle of pandemic (at the end of August 2020) as a permanent resident"
        ],
        hobbies: [
            "Watching sports (NFL, NBA, NHL, Football/Soccer, Golf, F1, and other) and playing sports computer games",
            "Viewing the content about personal finances and investments (stocks and real estate BRRRR method)",
            "Watching YouTube videos on a broad range of software-related topics",
            "Playing golf and enjoying the natural beauty of Vancouver, BC",
        ],
        portfolio: {
            disclaimer: "A few HTML/CSS portfolio projects that I created while taking a mentorship-based HTML/CSS course to improve my knowledge in these technologies:",
            projects: [
                {
                    title: "The Bike Shop",
                    fullWebsiteUrl: "https://alexzagriychuk.com/bikeshop/",
                    githubUrl: "https://github.com/AlexZagriychuk/html-css/tree/master/Task_1.5_Create_Bike_shop_website",
                    showWebsiteLink: true,
                    techStack: "HTML5, CSS3",
                    shortDescription: "Responsive design was created by me from scratch. The website supports different browsers, including IE11.",
                    fullDescriptionBullets: [
                        "This responsive website was created using HTML5 and CSS3 only (except for the burger menu button in the mobile view) while trying to follow the BEM methodology.",
                        "The website supports different browsers, including IE11.",
                        "The website was designed by me from scratch (following the training task which required to create 3 pages: Home, About Us, and Contact), including the logo/favicon, which was designed in https://www.designevo.com/"
                    ]
            
                },
                {
                    title: "Portfolio Website",
                    fullWebsiteUrl: "https://alexzagriychuk.com",
                    githubUrl: "https://github.com/AlexZagriychuk/portfolio",
                    showWebsiteLink: false,
                    techStack: "HTML5, CSS3, JavaScript",
                    shortDescription: "Hosted the website on Netlify. Went through the problems with linking another website as a 'nested route' of the portfolio.",
                    fullDescriptionBullets: [
                        "The portfolio website was created using HTML5, CSS3, and a little bit of JavaScript. Hosted the website on Netlify.",
                        "Faced with a problem when attempted to display another website (The Bike Shop) as a 'nested route' of the portfolio website ('alexzagriychuk.com/bikeshop/'). Solved it by using the Netlify '_redirects' file with splat option activated ('/bikeshop/*  https://.../:splat 200').",
                        "The second major problem I went through was that the 'nested route' website, opened by the URL without closing slash '/' ('alexzagriychuk.com/bikeshop'), would break after attempting to navigate to another page ('ABOUT US', 'CONTACT'), because without the closing slash, all relative paths would try to get resources in the root page 'alexzagriychuk.com/' rather than the current page 'alexzagriychuk.com/bikeshop/'. I created a workaround solution by adding the 'Snippet injection' in the Netlify 'Build & deploy' / 'Post processing' section. This snippet adds JavaScript code before the end of the 'head' section of the 'nested route' website`s index.html file. This code adds the slash at the end of the URL if the 'nested route' website is opened without the trailing slash in the URL."
                    ]
                }
            ]
        },
        certificates: [
            {
                pdfUrl: "./resources/certificates/Java%208%20Certificate.pdf",
                imageUrl: "./resources/certificates/Java%208%20Certificate.jpg",
                title: "Oracle Certified Associate, Java SE 8 Programmer",
                date: "April 2018",
            },
            {
                pdfUrl: "./resources/certificates/ISTQB%20Certificate.pdf",
                imageUrl: "./resources/certificates/ISTQB%20Certificate.jpg",
                title: "ISTQB Certified Tester, Foundation Level",
                date: "March 2013",
            },
        ]
    }


    const introDescElem = document.querySelector(".intro__desc")
    const aboutMeTextElem = document.querySelector(".about-me__text")
    const aboutMeLifeFactsListElem = document.getElementById("about-me__life-facts-list")
    const aboutMeHobbiesListElem = document.getElementById("about-me__hobbies-list")
    const portfolioDisclaimerElem = document.querySelector(".portfolio__disclaimer")
    const portfolioListElem = document.querySelector(".portfolio__list")
    const certificatesListElem = document.querySelector(".certificates__list")

    content.introDescParagraphs.forEach(introDescParagraph => {
        ElementUtils.createAndAppendElement(introDescElem, "p", "", introDescParagraph)
    })

    content.aboutMeTextParagraphs.forEach(aboutMeTextParagraph => {
        ElementUtils.createAndAppendElement(aboutMeTextElem, "p", "", aboutMeTextParagraph)
    })

    content.lifeFacts.forEach(lifeFact => {
        ElementUtils.createAndAppendElement(aboutMeLifeFactsListElem, "li", "", lifeFact)
    })

    content.hobbies.forEach(hobby => {
        ElementUtils.createAndAppendElement(aboutMeHobbiesListElem, "li", "", hobby)
    })

    portfolioDisclaimerElem.textContent = content.portfolio.disclaimer

    content.portfolio.projects.forEach(project => {
        let portfolioListItemElem = ElementUtils.createAndAppendElement(portfolioListElem, "li", "")
        portfolioListItemElem.outerHTML = generatePortfolioProjectHTML(project)
    })

    content.certificates.forEach(certificate => {
        let certificatesListItemElem = ElementUtils.createAndAppendElement(certificatesListElem, "li", "")
        certificatesListItemElem.outerHTML = generateCertificateHTML(certificate)
    })
}
