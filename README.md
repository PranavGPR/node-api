## Node.js machine test

### 1. Install Dependencies:

Install the dependencies by running the following command:

1. Using npm

```shell
npm i
```

2. Using Yarn

```shell
yarn
```

### 2. Run server:

To run the server, use the following command in the terminal:

1. Using npm:

```shell
npm run dev
```

2. Using yarn:

```shell
yarn dev
```

After running the command, the server starts up on the port: `5000`

### 3. Usage:

1. `/login`
   : First, login using any email and password to get a token. Copy that token for further usage.

2. `/cart , /checkout` : For using these routes, paste the token with the prefix `Bearer` and a space " " between them.
   <br />Example: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImVtYWlsIjoidXNlckBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJpYXQiOjE2NDE3OTM0MTV9.bKR8KZTFYW65yqeFycvc9avHGaI9ct8P5JtdBFuB3fA`
