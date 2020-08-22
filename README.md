# engl210ehandbook


## 1. Overview
***
### 1.1. About
This `engl210ehandbook` repository contains the codebase for the entirely static [uwhandbook.online](https://uwhandbook.online) website created as a group project for the *Genres of Technical Communication* course ([ENGL 210E](https://uwaterloo.ca/english/course-descriptions-200-level#e210e)) at the University of Waterloo. This online handbook serves as a guide for freshman and prospective mathematics faculty students about the following topics: the mathematics faculty, first-year math and cs courses, food, navigation, student life, and student services.

In this assignment, the content, distribution medium, and implementation details of each group's student handbook was up to the group's discretion. Our team chose to implement our handbook as an online website rather than a physical resource since (1) there is no distribution cost involved and (2) the information is much more easily accessible.

\>\> `Contributors`: [Alexander Lipianu](https://github.com/alipianu), Alyssa Livermore, Brian Fong, [Johyeon Lee](https://github.com/johyeonlee), [Marcel Sauve](https://github.com/voidEnum), Mohammed Sidiq, [Yiran Li](https://github.com/Ranlit).

### 1.2. Contents
1. Overview
  1. About
  2. Contents
  3. File Structure
2. Details
  1. Site Content
  2. Implementation Notes

### 1.3. File Structure
```text
.
├── assets/*				                  :: Site-wide assets
├── checklists                        :: Checklists directory
│   ├── assets/*                      :: Checklist page assets
│   └── success.html                  :: Success checklist page
├── faculty                           :: Faculty directory
│   ├── assets/*                      :: Faculty page assets
│   ├── courses                       :: Faculty courses directory
│   │   ├── assets/*                  :: Course-specific pages assets
│   │   └── *.html                    :: Course-specific pages
│   └── introduction.html             :: Faculty landing page
├── food                              :: Food directory
│   ├── assets/*                      :: Food page assets
│   ├── data/*.json                   :: Food page data
│   ├── food.html                     :: Food landing page
│   ├── on-campus.html                :: On-campus food page
│   └── off-campus.html               :: Off-campus food page
├── navigation                        :: Navigation directory
│   ├── assets/*                      :: Navigation map page assets
│   ├── instructions                  :: Navigation instruction directory
│   │   ├── assets/*                  :: Navigation instruction page assets
│   │   ├── timhortons-access.html    :: The accessibility-friendly MC -> Tim Hortons navigation instructions
│   │   └── timhortons.html           :: The MC -> Tim Hortons navigation instructions
│   ├── campus-court.html             :: The Campus Court Plaza map featuring service information
│   ├── navigation.html               :: The campus map featuring building, bus, food, and service information
│   └── university-shops.html         :: The University Shops Plaza map featuring service information 
├── services                          :: Services directory
│   ├── assets/*                      :: Service page assets
│   ├── accessability.html            :: AccessAbility page
│   ├── campus-wellness.html          :: Campus Wellness page
│   ├── ceca.html                     :: CECA page
│   ├── financial.html                :: Student Financial Services page
│   ├── services.html                 :: Student services landing page
│   ├── student-sucess.html           :: Student Success Office page
│   └── turnkey.html                  :: Turnkey Desk page
├── student-life                      :: Student life directory
│   ├── assets/*                      :: Student life page assets
│   ├── off-campus.html               :: Off-campus student life page
│   ├── on-campus.html                :: On-campus student life page
│   └── student-life.html             :: Student life landing page
├── .gitignore
├── CNAME
├── favicon-*x*.png
├── footer.js                         :: Injects footer
├── header.js                         :: Injects header
├── index.html                        :: UW Handbook landing page
└── README.md                         :: This file (RECURSION!)
```


## 2. Details
***
### 2.1 Site Content
The content of the UW Handbook is segmented into three main categories (Academic, Students, and Other). The Academic portion of the handbook focuses on information pertaining to the mathematics faculty, first-year mathematics courses, and academic success. Inside, students can find degree checklists, course information, important links, and tips/tricks. The Students portion of the handbook focuses on information pertaining to student life and university-provided student services. Inside, students can find details about popular clubs, the student government, off-campus student hotspots, AccessAbility, Campus Wellness, Turnkey, Student Success Office, CECA, and Student Financial Services. The Other portion of the handbook focuses on information pertaining to food and navigation. Inside, students can find maps of the campus and nearby plazas, step-by-step navigational instructions, an overview of the on-campus food locations, an off-campus menu item suggestion generator, and an overview of nearby off-campus restaurants.

### 2.2 Implementation Notes
This website was developed and submitted by a group of students predominantly from the Arts faculty as a deliverable for an English course. Due to technical and time constraints, the team opted to implement the UW Handbook using HTML, CSS, Bootstrap, JavaScript, and jQuery. All maps are static images. The UW Handbook is hosted and deployed via GitHub pages.
