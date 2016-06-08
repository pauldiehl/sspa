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

1. (Create DynamoDB tables as needed)
 
2. serverless project install s-crud-ops

3. (Follow instructions for set-up)

4. serverless function deploy
 
5. serverless endpoint deploy
 
6. (Go to API Gateway and Enable CORS)

7. (Test using your favorite REST client service)

