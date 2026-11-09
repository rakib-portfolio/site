1) EMAIL SETUP (contact form)
   - Open script.js, set  email:"your-real@gmail.com"
   - Upload the site to a live domain/host, send ONE test message from the Contact page.
   - FormSubmit emails you an "Activate Form" link. Click it once. After that every message arrives in your inbox.
   - Also change the email shown on contact.html.
   (WordPress: use Contact Form 7 / WPForms with your email instead, or keep this script.)

2) CV DOWNLOAD (Google Drive)
   - Upload CV to Drive > Share > "Anyone with the link" (Viewer) > Copy link.
   - Link looks like drive.google.com/file/d/FILE_ID/view  -> copy FILE_ID.
   - Open script.js, set  cvFileId:"FILE_ID"

3) SLIDER IMAGES
   - images/ folder has 5 profile-themed illustrations. To use your own photos, put them in images/
     and change the src names in index.html (img tags). Slides show faintly (opacity .28 in style.css: .sl img).

4) PAGE WIDTH
   Default 1366px. Visitors can switch 1200 / 1366 / Full from the top-right switch (shown on screens 1200px+). Choice is remembered.
   Change default: style.css -> var(--w,1366px)

5) SHOP & SERVICES
   - shop.html: set your real price on each product. Replace href="#" on every Buy/Download button
     with your payment-link or Drive-link (check which payment platform works in your country first).
   - services.html: replace "From $XX" with your prices.
   - Hire Me buttons open contact.html with the service name pre-filled in Subject.

6) SEARCH
   Sidebar search shows live suggestions and a full results page (search.html). To make a new page/product
   searchable, add a line in data.js (SITE_INDEX or PRODUCTS).

7) BUY FLOW (checkout.html)
   - Edit prices in data.js. Edit payment methods in script.js -> CONFIG.pay (bKash/Nagad/Rocket numbers, PayPal link).
   - Order goes to your email (same FormSubmit activation as the contact form). You verify the payment manually
     and send the file link to the buyer. For automatic delivery later, use a platform link (set "link" on a product in data.js)
     or WooCommerce on WordPress.
   - Free product: set CONFIG.freeLink.
