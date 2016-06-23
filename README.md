To deploy bucket:
1) cd spa
2) ./sspa deploy_bucket <name_of_bucket>


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
  "iamRoleArnLambda": "<IAM ARN HERE>",
  "apiGatewayApi": "s-crud-ops"
}

- (5) sls function deploy
- (6) sls endpoint deploy
- (7) Test endpoints using your favorite REST client or go to the app itself.



* NOTE on CORS: For our app, the browser requires a pre-flight OPTIONS method to be made as well as CORS to be enabled for certain methods (PUT/POST/DELETE).
To automatically deploy a standardized OPTIONS methods per API resource, use "serverless endpoint deploy --all". This is recommended through the CORS plugin: https://github.com/joostfarla/serverless-cors-plugin)

* NOTE on updating "s-crud-ops" source: when you push changes up, only include new functions (ex: coffees), package.json, s-project.json, s-resources-cf.json (cloudformation file). Everything else (meta, node_modules, env_var) will pollute our repo and could interfere with people installing project locally.
