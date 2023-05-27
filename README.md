# Jobs Api
## Version: 1.0


### /auth/register

#### POST
##### Summary:

registerUser

##### Description:

creates a new user in database

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

null

### /auth/login

#### POST
##### Summary:

loginUser

##### Description:

Log in the user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

null

### /jobs

#### POST
##### Summary:

createJob

##### Description:

creates a new job

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearer | |

#### GET
##### Summary:

getAlljobs

##### Description:

get the list of all the jobs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /jobs/{id}

#### GET
##### Summary:

getJob

##### Description:

get the details of all the jobs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The job ID | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearer | |

#### DELETE
##### Summary:

deleteJob

##### Description:

Delete the particular job

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The job ID | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearer | |

#### PATCH
##### Summary:

updateJob

##### Description:

Edit the details of the job

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The job ID | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearer | |
