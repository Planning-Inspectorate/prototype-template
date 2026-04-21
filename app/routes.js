//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

import {createRoutes} from "./views/cases/index.js";
import govukPrototypeKit from "govuk-prototype-kit";
import {applyAzureHostingFix} from "./azure-hosting-fix.js";

applyAzureHostingFix();

const router = govukPrototypeKit.requests.setupRouter();

router.use((req, res, next) => {
   if (!req.session?.cases) {
       // add some default cases
       req.session.cases = [
           {
               id: 1,
               reference: 'REF/001',
               submissionDate: new Date('2026-04-20T00:00:00.000Z'),
               description: 'A big case to deal with'
           },
           {
               id: 2,
               reference: 'REF/002',
               submissionDate: new Date('2026-05-20T00:00:00.000Z'),
               description: 'Case 2'
           }
       ];
   }
   next();
});

// Add your routes here

router.use('/my-journey', createRoutes());
