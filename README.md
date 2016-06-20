# AWS Serverless CRUD Operations

This serverless project provisions the following:

- 2 Lambda functions (use depends on primary key of the targeted DynamoDB table: either a simple or composite primary key)
- 6 agnostic endpoints per function that generates resources in API Gateway


**Simple Primary Key Endpoints**
- GET /spk/{table}/{hash}
- GET /spk/{table}/{hash}/{id}
- GET /spk/{table}/{hash}/{id}/{attribute}
- POST /spk/{table}/{hash}
- PUT /spk/{table}/{hash}/{id}
- DELETE /spk/{table}/{hash}/{id}


Explained

- {table} is the name of the target table
- {hash} is the name of the partition key
- {attribute} is the name of the lookup attribute
- {id} is the lookup value (usually the value of the partition key, except in the attribute endpoint case)


**Composite Primary Key Endpoints:**
- GET /cpk/{table}/{hash}/{range}
- GET /cpk/{table}/{hash}/{range}/{hashID}/{rangeID}
- GET /cpk/{table}/{hash}/{range}/{hashID}
- POST /cpk/{table}/{hash}/{range}
- PUT /cpk/{table}/{hash}/{range}/{hashID}/{rangeID}
- DELETE /cpk/{table}/{hash}/{range}/{hashID}/{rangeID}

Explained

- {table} is the name of the target table
- {hash} is the name of the partition key
- {range} is the name of the sort key
- {hashID} is the value of the partition key
- {rangeID} is the value of the sort key


**Set-up:**
## Getting Started with the React/Redux SPA (client folder)

- (1) Pull down repo locally (`git clone https://<username>@bitbucket.org/parivedasolutions/atl-aws-four-coffees-website.git`)
- (2) Run `npm install` from “client” folder (make sure that you are running at least Node 4.2 and npm 3.0)
- (3) Run `npm start` to test locally on `localhost:3000`
- (4) Compile the code so its ready to be deployed to S3 by running `npm run compile`
- (5) Manually edit “dist/index.html” so that the js scripts are properly referenced with the root path of "http://4coffees.robooffice.tech/“ rather than the IPAddress that the code provided. Will be updated soon.
- (6) Lastly, deploy code to S3 bucket (you need the AWS CLI and to configure your access key/secret key in advance) by using `aws s3 cp dist  s3://4coffees.robooffice.tech --recursive` this copies just the “dist" directory to our S3 bucket


The only directories of this project that you really should mess are “src” and “tests", everything else is part of the out-of-the-box starter-kit infrastructure.



# Getting Started with the Serverless API (installing project locally)

- (0) npm install serverless -g (install serverless globally)
- (1) cd /path/to/s-crud-ops
- (2) npm install
- (3) sls project install
- (3a) (select "dev" as stage)
- (3b) (create a new profile; it will prompt you for your AWS access key id and secret key)
- (3c) (select "us-east-1" as region)
- (4) UPDATE "_meta/variables/s-variables-dev-useast1.json"  (due to some weird glitch in serverless, when you pull down an existing project and want to work on the same API, it doesn't create certain variables necessary for the project.)

Copy and Paste the following: 

{
  "region": "us-east-1",
  "resourcesStackName": "s-crud-ops-dev-r",
  "iamRoleArnLambda": "<INSERT YOUR POLICY>"
- (5) sls function deploy
- (6) sls endpoint deploy
- (7) Test endpoints using your favorite REST client or go to the app itself.



* NOTE on CORS: For our app, the browser requires a pre-flight OPTIONS method to be made as well as CORS to be enabled for certain methods (PUT/POST/DELETE).
To automatically deploy a standardized OPTIONS methods per API resource, use "serverless endpoint deploy --all". This is recommended through the CORS plugin: https://github.com/joostfarla/serverless-cors-plugin)

* NOTE on updating "s-crud-ops" source: when you push changes up, only include new functions (ex: coffees), package.json, s-project.json, s-resources-cf.json (cloudformation file). Everything else (meta, node_modules, env_var) will pollute our repo and could interfere with people installing project locally.

