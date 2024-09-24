

var teams = [
    {
        name: "Team 1",
        imageUrl: "assets/images/Birendra-Balakrishnan.png",
        heading: "Birendra Balakrishnan",
        subheading: "Chief Revenue Officer",
        text: "Birendra combines strategic acumen, entrepreneurial success, and technical mastery. A strategic powerhouse, he is committed to driving innovation in the ever-evolving digital landscape. He boasts an impressive track record of working with premier industry solutions, particularly Adobe and Sitecore, leading to an unparalleled understanding of content management, digital marketing, and customer experience optimization, ensuring Vertis remains at the cutting edge of digital transformation, mastering the intricacies of Adobe's suite and translating them into actionable strategies for clients."
    },
    {
        name: "Team 2",
        imageUrl: "assets/images/gurlin-singh.png",
        heading: "gurlin singh lamba",
        subheading: "Chief Technology Officer",
        text: "A highly accomplished and results-driven Technical Architect, Gurlin is the Vertis tech genius who drives innovation. Bridging the gap between business needs and technical requirements, he brings a deep understanding of emerging technologies and industry best practices. With more than a decade of hands-on experience in architecting, designing, and implementing complex IT solutions, he has delivered innovative, scalable, and efficient solutions for diverse organizations."
    },
    {
        name: "Team 3",
        imageUrl: "assets/images/Paul-hourihane.png",
        heading: "paul Hourihane",
        subheading: "Chief Strategy Officer",
        text: "Paul has worked for more than 30 years in the advertising, marketing and communications industry. As a seasoned leader, he's managed multinational agencies and advised on the implementation of martech, Customer Experience (CX), and ecommerce solutions. His technical prowess spans Adobe, Salesforce, Oracle, IBM, AB Tasty, and Optimizely platforms. Paul, residing in Singapore since 1995, is not only a strategic professional but also a community contributor, serving on a variety of company and industry boards and advising the Singapore government on data privacy legislation."
    },
    {
        name: "Team 4",
        imageUrl: "assets/images/Akaljot-Singh-Malik.png",
        heading: "Akaljot singh malik",
        subheading: "Technical Program Manager",
        text: "Akaljot brings broad industry expertise and people skills to the Vertis table, having managed teams of over 150 across APAC when working with Sitecore and Accenture. Specializing in optimizing business and systems processes, he excels as a technical Content Management System (CMS) specialist. With a strong commitment to crystal-clear communication, Akaljot develops comprehensive project plans, manages content schemas, achieves productivity targets, and delivers exceptional customer service."

    },
    {
        name: "Team 5",
        imageUrl: "assets/images/Thom-Puiman.png",
        heading: "thom puiman",
        subheading: "Sitecore Head Architect",
        text: "Thom leads technical architecture and project delivery while driving Proof of Concept (P) development. In his prior role as a Partner Technical Enablement Manager with Sitrecorehe supported partners in understanding Sitecore's offerings, conducted technical training, and represented the brand globally. Beginning as a Solutions Architect in Singapore, Thom contributed to Sitecore's global leadership in digital experience platforms, enabling personalized content delivery for top brands. His career includes pivotal consultancy and development roles, spanning VCCP, DigitasLBi, inSided Media, Relephant, and Assistance Software, In London and Amsterdam he was responsible for backend development, CMS implementation, leading Sitecore development strategies, and refining release processes, showcasing his diverse expertise in technology."
    },
    {
        name: "Team 6",
        imageUrl: "assets/images/Joanne-Yu.png",
        heading: "Joanne Yu",
        subheading: "Sales Manager",
        text: "Joanne is a passionate and results-driven sales professional with a proven track record in strategic sales planning and account management. She combines in-depth market analysis with a personalized touch, ensuring that each client's unique needs are met while maximizing their marketing ROI and driving growth, while fostering long-lasting relationships with major clients."
    },
    {
        name: "Team 7",
        imageUrl: "assets/images/Thillai-Ganesh.png",
        heading: "Thillai ganesh",
        subheading: "Adobe Practice Lead ",
        text: "Thillai Ganesh Chelian brings more than 15 years of experience in technical project consulting and management, gained with Adobe, Deloitte, and LatentView. His expertise spans analytics, ERP implementation, CRM integrations, marketing technology transformations, and customer data platforms. An expert in Adobe, Google, and Optimizely platforms, Thillai is pivotal in Vertis' technological evolution."
    },
    {
        name: "Team 8",
        imageUrl: "assets/images/Rena-Rajadorai.png",
        heading: "rena rajadorai",
        subheading: "Head of Data Analytics",
        text: "Rena brings over 14 years experience to her pivotal role at Vertis as the Head of Data & Analytics gained with telecoms leader Celcom Axiata, business consultancy Kantar Malaysia, and global market research group Taylor Nelson Sofres. With a robust background in data analytics and digital solutions, Rena excels in designing data systems to elevate business capabilities. She has successfully implemented a Digital Assets Management system, and is expert in social media listening and SEO strategies. Rena's skill set extends to Computer Assisted Telephone Interviewing (CATI) operations, product management, and strategic planning, where she consistently achieves operational profitability and success."
    },
    {
        name: "Team 9",
        imageUrl: "assets/images/GinLu.png",
        heading: "Gin lu",
        subheading: "User Experience Lead",
        text: "Gin, an integral part of research and IT solution integration initiatives, has contributed her user experience expertise to diverse Vertis projects across many industries - from Dell and Prudential to MSF and Dragon Capital. Gin has also lead a series of industry workshops, both locally and internationally, focusing on design thinking, customer journey mapping, and beyond. Before venturing into the world of IT solutions, she worked in events management providing her with an ability to adapt quickly, along with excellent communication and problem-solving skills."
    },


];


function openModal(team) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var modalHeading = document.getElementById("modalHeading");
    var modalSubheading = document.getElementById("modalSubheading");
    var modaltext = document.getElementById("modaltext");
    modalImage.innerHTML = "<img src='" + team.imageUrl + "' alt='Team Image'>";
    modalHeading.textContent = team.heading;
    modalSubheading.textContent = team.subheading;
    modaltext.textContent = team.text;
    modal.style.display = "block";
}



function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


window.addEventListener("click", function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

console.log(triggerElements, "DOM content has loaded");
