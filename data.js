/* Products used by Shop, Checkout and Search. Edit price (p) here. */
const PRODUCTS=[
{
"id": "cost-sheet",
"t": "Cost Sheet Template",
"d": "Production cost sheet: material, labour and overhead.",
"f": "Excel",
"c": "Excel",
"p": 9,
"img": "cost"
},
{
"id": "mis-report",
"t": "Monthly MIS Report Template",
"d": "Budget vs actual, variance and summary dashboard.",
"f": "Excel / Google Sheets",
"c": "Excel",
"p": 12,
"img": "reports"
},
{
"id": "stock-register",
"t": "Stock & Inventory Register",
"d": "Stock in/out, balance and valuation sheet.",
"f": "Excel",
"c": "Excel",
"p": 8,
"img": "cost"
},
{
"id": "qb-xero-guide",
"t": "QuickBooks & Xero Starter Guide",
"d": "Step-by-step guide for freelance bookkeepers.",
"f": "PDF",
"c": "Guide",
"p": 15,
"img": "cloud"
},
{
"id": "portfolio-template",
"t": "Portfolio Website Template",
"d": "HTML, CSS, Bootstrap and WordPress-ready files.",
"f": "HTML / CSS / JS",
"c": "Website",
"p": 19,
"img": "web"
},
{
"id": "free-budget",
"t": "Free Budget vs Actual Sheet",
"d": "Try a template before you buy.",
"f": "Excel",
"c": "Free",
"p": 0,
"img": "reports"
}
];

const SITE_INDEX=[
{t:"Home",d:"Slider and featured work",u:"index.html",ty:"Page",k:"portfolio featured slider"},
{t:"About",d:"Skills, experience and education",u:"about.html",ty:"Page",k:"profile accountant developer"},
{t:"Services",d:"Hire me for accounting and web work",u:"services.html",ty:"Page",k:"hire freelance"},
{t:"Shop",d:"Digital products and templates",u:"shop.html",ty:"Page",k:"buy products store digital"},
{t:"Blog",d:"Articles on accounting, web and career",u:"blog.html",ty:"Page",k:"articles posts"},
{t:"Gallery",d:"Work, events and design",u:"gallery.html",ty:"Page",k:"photos images"},
{t:"Contact",d:"Send me a message",u:"contact.html",ty:"Page",k:"email message hire phone"},
{t:"Bookkeeping & Reports",d:"Monthly books and management reports",u:"services.html",ty:"Service",k:"ledger mis accounting"},
{t:"QuickBooks / Xero Setup",d:"Cloud accounting setup",u:"services.html",ty:"Service",k:"quickbooks xero cloud"},
{t:"WordPress Website",d:"Responsive, SEO-friendly website",u:"services.html",ty:"Service",k:"web design wordpress seo"},
{t:"Excel Template Customization",d:"Templates adjusted to your business",u:"services.html",ty:"Service",k:"excel spreadsheet formulas"},
{t:"Cost Sheet Basics",d:"How to prepare a simple production cost sheet",u:"blog.html",ty:"Blog",k:"accounting cost"},
{t:"HTML to WordPress Theme",d:"Convert a static design into a custom theme",u:"blog.html",ty:"Blog",k:"web development theme"},
{t:"QuickBooks vs Xero",d:"Which one suits freelancers better",u:"blog.html",ty:"Blog",k:"accounting cloud"},
{t:"Working Abroad",d:"Steps for building an international profile",u:"blog.html",ty:"Blog",k:"career job"},
{t:"On-page SEO Checklist",d:"Simple SEO steps for every new page",u:"blog.html",ty:"Blog",k:"seo web"},
{t:"Learning in Public",d:"Why sharing progress helps growth",u:"blog.html",ty:"Blog",k:"career"},
{t:"Skills",d:"Accounting, HTML/CSS, WordPress, PHP, SEO",u:"about.html",ty:"Section",k:"skill"},
{t:"Experience",d:"Work history",u:"about.html",ty:"Section",k:"job work"},
{t:"Education",d:"MBA and MBS",u:"about.html",ty:"Section",k:"mba mbs degree"},
{t:"Resume / CV",d:"Open About page, use Resume in the menu",u:"about.html",ty:"Section",k:"cv download resume"},
{t:"FAQ",d:"Common questions about projects and payment",u:"services.html",ty:"Section",k:"questions payment"},
{t:"Cost Accounting System",d:"Production costing and stock valuation",u:"index.html",ty:"Work",k:"featured"},
{t:"Financial Reports",d:"MIS, budget variance, reporting",u:"index.html",ty:"Work",k:"featured"},
{t:"Trading Analysis",d:"Market study and strategy notes",u:"index.html",ty:"Work",k:"featured markets"}
];
PRODUCTS.forEach(p=>SITE_INDEX.push({t:p.t,d:p.d,u:"checkout.html?p="+p.id,ty:"Product",k:p.c+" "+p.f+" buy download template $"+p.p}));
