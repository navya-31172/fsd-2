NAVYA@DESKTOP-RPCKFI2 MINGW64 ~
$ cd 24ktk3

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3
$ mkdir client
mkdir: cannot create directory ‘client’: File exists

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3
$ cd client

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ mkdir server
mkdir: cannot create directory ‘server’: File exists

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ mkdir src
mkdir: cannot create directory ‘src’: File exists

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ cd ..

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3
$ touch client/index.html
touch client/vite.config.js
touch client/src/main.jsx
touch client/src/App.jsx
touch client/src/styles.css

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3
$ touch server/server.js

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3
$ code .

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3
$ npm run dev
npm error code ENOENT
npm error syscall open
npm error path C:\Users\Kavya\24ktk3\package.json
npm error errno -4058
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open 'C:\Users\Kavya\24ktk3\package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: C:\Users\Kavya\AppData\Local\npm-cache\_logs\2026-11-10T14_37_25_683Z-debug-0.log

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3
$ cd client

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ npm init -y
Wrote to C:\Users\Kavya\24ktk3\client\package.json:

{
  "scripts": {
    "dev": "vite"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {},
  "name": "client",
  "version": "1.0.0",
  "description": "",
  "main": "vite.config.js",
  "keywords": [],
  "type": "commonjs"
}



NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ npm install react react-dom

changed 1 package, and audited 21 packages in 19s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ npm install vite @vitejs/plugin-react

up to date, audited 21 packages in 2s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ npm install lucide-react

up to date, audited 21 packages in 2s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ cd ../server

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm init -y
Wrote to C:\Users\Kavya\24ktk3\server\package.json:

{
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.21.2",
    "cors": "^2.8.5"
  },
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "keywords": [],
  "type": "commonjs"
}



NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm install express

added 7 packages, removed 4 packages, changed 23 packages, and audited 71 packages in 6s

19 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm install cors

up to date, audited 71 packages in 3s

19 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm pkg set scripts.start="node server.js"

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm start
npm notice run server@1.0.0 start
npm notice run node server.js
Server running at http://localhost:5000


NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm start
npm notice run server@1.0.0 start
npm notice run node server.js
Server running at http://localhost:5000


NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm run dev
npm error Missing script: "dev"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: C:\Users\Kavya\AppData\Local\npm-cache\_logs\2026-11-10T14_41_06_808Z-debug-0.log

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ cd ../server

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm install

up to date, audited 71 packages in 2s

19 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ npm run dev
npm error Missing script: "dev"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: C:\Users\Kavya\AppData\Local\npm-cache\_logs\2026-11-10T14_42_38_594Z-debug-0.log

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/server
$ cd ../client

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ npm install

up to date, audited 21 packages in 2s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

NAVYA@DESKTOP-RPCKFI2 MINGW64 ~/24ktk3/client
$ npm run dev
npm notice run client@1.0.0 dev
npm notice run vite
(!) Your Vite config uses features that are unsupported by `configLoader: 'native'`, which is planned to become the default in a future major version of Vite:
  - ESM syntax in a file loaded as CommonJS (vite.config.js:2:1). Use a `.mjs` extension or set `"type": "module"` in the closest package.json
Set `VITE_CONFIG_NATIVE_IGNORE_WARNING=true` to suppress this warning.
8:13:23 pm [vite] (client) Re-optimizing dependencies because lockfile has changed

  VITE v8.3.7  ready in 475 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

npm notice run client@1.0.0 dev
npm notice run vite
(!) Your Vite config uses features that are unsupported by `configLoader: 'native'`, which is planned to become the default in a future major version of Vite:
  - ESM syntax in a file loaded as CommonJS (vite.config.js:2:1). Use a `.mjs` extension or set `"type": "module"` in the closest package.json
Set `VITE_CONFIG_NATIVE_IGNORE_WARNING=true` to suppress this warning.

  VITE v8.3.7  ready in 258 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help




