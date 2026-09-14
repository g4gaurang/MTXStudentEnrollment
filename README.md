# MTX Student Enrollment

An interactive product landing-page prototype for a configurable digital platform supporting student application, enrollment, placement, registration, and onboarding.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

## Content assumptions

* The prototype uses the approved product narrative supplied with the build request.
* The referenced source PDFs were not present in the repository when the prototype was created.
* Product interfaces, people, programs, application identifiers, and analytics are fictional.
* Analytics are labeled as illustrative and do not represent MTX or customer results.
* Education terminology, policies, decisions, and workflow rules are treated as institution-configured.

## Product safeguards

* No backend, database, authentication service, tracking service, or external API is used.
* The demonstration-request form does not send or retain entered information.
* Consequential admission, eligibility, residency, placement, and enrollment decisions remain with authorized staff.
* Automation is presented as controlled preparation and assistance with traceability and human review.
* The architecture does not require a particular cloud, CRM, low-code product, student system, or AI model.
* Integration categories and patterns do not imply that each connection is prebuilt.
* Privacy, security, accessibility, and regulatory language describes supporting capabilities rather than automatic compliance.

## GitHub Pages deployment

The Vite base path is `/MTXStudentEnrollment/`, matching the repository name. Static assets use Vite-compatible relative references. The site uses section anchors rather than client-side routes, so browser refreshes do not require a fallback document.

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys the `dist` directory on pushes to `main` or through manual dispatch.

If Pages has not been configured for this repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Run the **Deploy to GitHub Pages** workflow or merge a change to `main`.

No repository credentials are required by the application.
