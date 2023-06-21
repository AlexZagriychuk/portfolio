import ElementUtils from "./elementUtils.js"


function generatePortfolioProjectHTML({title, fullWebsiteUrl, githubUrl, showWebsiteLink, techStack, shortDescription, fullDescriptionBullets}) {
    let res = `
        <li class="portfolio__project" tabindex="0">
          <h3 class="portfolio__project-title">${title}</h3>
          <div class="portfolio__project-preview-and-info">
            <iframe class="portfolio__project-preview" src="${fullWebsiteUrl}" scrolling="no" tabindex="-1"></iframe>
            <div class="portfolio__project-preview-overlay"></div>
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
        res += `<a class="portfolio-project-link icon-desktop-1" href="${fullWebsiteUrl}" target="_blank">Website</a>`
    }
           
    res += `
                <a class="portfolio-project-link icon-github-circled" href="${githubUrl}" target="_blank">Github</a>
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
            "Open to new job opportunities."
        ],
        aboutMeTextParagraphs: [
            "I started my career in the software industry as a manual tester. After learning some programming skills outside of work and applying them to creating a few small utilities and automating some manual work processes, I fell in love with programming.",
            "I have 8.5 years of total experience working in the software industry. I worked as a manual tester for 2 years and then I switched to the Test Automation / Developer In Test role and have been working in this role for 6.5 years (including almost 2 years in Canada).",
            "Now I want to leverage all my previously acquired skills and experience, start a new chapter in my technical career and switch from the SDET role into the Web Developer role (Frontend, Full Stack, or Backend Web Developer).",
        ],
        lifeFacts: [
            "Learned English while never being in any English-speaking country (before I moved to Canada). Achieved very high score for a non-native language speaker on my IELTS General English language proficiency exam (Overall band = 8.5, Reading = 9.0, Listening = 8.5, Speaking = 8.0, Writing = 7.5; where 9.0 is the maximum possible test score)",
            "Moved to Canada in the middle of the COVID pandemic (at the end of August 2020) as a permanent resident"
        ],
        hobbies: [
            "Watching sports (NFL, NBA, NHL, Football/Soccer, Golf, F1, and other) and playing sports computer games",
            "Viewing the content about personal finances and investments (stocks and real estate BRRRR method)",
            "Watching YouTube videos on a broad range of software-related topics",
            "Playing golf and enjoying the natural beauty of Vancouver, BC",
            "Trying out new hobbies (snowboarding, Latin dancing)",
        ],
        portfolio: {
            disclaimer: "A few HTML + CSS / JavaScript / React + TypeScript portfolio projects I created while taking a mentorship-based Frontend Development course (no copy-pasting from tutorials, this program has tasks and code reviews with feedback from a mentor):",
            projects: [
                {
                    title: "React App (Posts/Todos/Users)",
                    fullWebsiteUrl: "https://alexzagriychuk.com/react/",
                    githubUrl: "https://github.com/AlexZagriychuk/react-learning",
                    showWebsiteLink: true,
                    techStack: "React, Redux, TypeScript, CSS",
                    shortDescription: "Interactive React App with Posts, Todos, and Users pages. Data fetched via API (Redux controls the state, RTK Query caches API responses to avoid redundant network load).",
                    fullDescriptionBullets: [
                        "Interactive React SPA with Posts, Todos, and Users pages (Redux controls the global state)",
                        "Data is fetched via API from https://jsonplaceholder.typicode.com/ (RTK Query caches API requests and responses to avoid redundant network load)",
                        "Users data is being used by all 3 pages (Posts, Todos, Users)",
                        "An active user can be changed by clicking on the button at the top right corner (Todos data and Posts styles would be different based on the currently active user)",
                        "When the ToDo items' completed checkbox is clicked, the UI is updated optimistically right away. API mutation is fired after a delay (debounce) to avoid sending multiple API requests for fast changes of the same ToDo item. If the ToDo item has not actually changed (even number of completed clicks) the API mutation request will not be fired. If the API mutation request has failed, the UI data and state will be rolled back.",
                        "On the Users page, we can click on a user and open detailed user information (with multiples tabs of content)",
                    ]
                },
                {
                    title: "Comfy (furniture shop)",
                    fullWebsiteUrl: "https://alexzagriychuk.com/comfy/",
                    githubUrl: "https://github.com/AlexZagriychuk/javascript-learning/tree/main/task2_8",
                    showWebsiteLink: true,
                    techStack: "HTML5, CSS3, JavaScript",
                    shortDescription: "This responsive website has functionality to +/-/remove items from the cart from different pages. The cart's state is being stored in the browser's localStorage.",
                    fullDescriptionBullets: [
                        "This responsive website has the functionality to +/-/remove items from the cart from different pages (Home, Products, Cart sidebar)",
                        "The cart's state is shared between all pages and is being stored in the browser's localStorage",
                        "On the Products page, we can use filters to specify what products we want to see"
                    ]
                },
                {
                    title: "The Bike Shop",
                    fullWebsiteUrl: "https://alexzagriychuk.com/bikeshop/",
                    githubUrl: "https://github.com/AlexZagriychuk/html-css/tree/master/Task_1.5_Create_Bike_shop_website",
                    showWebsiteLink: true,
                    techStack: "HTML5, CSS3",
                    shortDescription: "Responsive design is created by me from scratch. The website supports different browsers, including IE11.",
                    fullDescriptionBullets: [
                        "This responsive website is created using HTML5 and CSS3 only (except for the burger menu button in the mobile view) while trying to follow the BEM methodology.",
                        "The website supports different browsers, including IE11.",
                        "The website is designed by me from scratch including the logo/favicon, which is designed in https://www.designevo.com/ (following the training task which required to create 3 pages: Home, About Us, and Contact)", 
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
                        "The portfolio website is created using HTML5, CSS3, and a little bit of JavaScript. Hosted the website on Netlify.",
                        "Faced with a problem when attempting to display another website (The Bike Shop) as a 'nested route' of the portfolio website ('alexzagriychuk.com/bikeshop/'). Solved it by using the Netlify '_redirects' file with splat option activated ('/bikeshop/*  https://.../:splat 200').",
                        "The second major problem I went through was that the 'nested route' website, opened by the URL without closing slash '/' ('alexzagriychuk.com/bikeshop'), would break after attempting to navigate to another page ('ABOUT US', 'CONTACT') because, without the closing slash, all relative paths would try to get resources in the root page 'alexzagriychuk.com/' rather than the current page 'alexzagriychuk.com/bikeshop/'. I created a workaround solution by adding the 'Snippet injection' in the Netlify 'Build & deploy' / 'Post processing' section. This snippet adds JavaScript code before the end of the 'head' section of the 'nested route' website`s index.html file. This code adds the slash at the end of the URL if the 'nested route' website is opened without the trailing slash in the URL."
                    ]
                },
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


    // Rendering content
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
