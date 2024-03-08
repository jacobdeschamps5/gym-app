# Install server dependencies and run server
```
cd server
npm install
npm start or npm run dev (nodemon)
```


# Install client dependencies and run client
```
cd client
npm install
npm run dev
```

# Proxy
```
//vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api':'http://localhost:8080',
    },
  },
  plugins: [react()],
})

```
This configuration sets up a proxy in the client. The proxy redirects requests made to paths starting with '/api' to the local server running on 'http://localhost:8080'. Used for development convenience. 
