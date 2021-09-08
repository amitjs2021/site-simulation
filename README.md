# site-simulation

POC with MVP

# How to Install and run :

- Please clone this repo on your local WS/Folder.
- Run NPM install.
- Once Installation done Please run following code - 'npm run both'.
- If you want individual server and client to run then run - 'npm run dev' and 'npm run server'.
- All server files located in API folder.
- All Simulation code is inside src folder.
- Entry component for Simulation is APP.js (we can use any name for now used APP).
- Currently PORT is hard coded , we can read from .dotEnv file as well.
- Currently PROXY is not set inside API call (simulation) - using hardcoded links 'http://locatlho4500/api/v1' - whic is not correct but for the the time being using this.
- Simulation app is using PORT 3000.
- Once app starts it will automatically launch simulation main page (where upload screen will visible first)

# Assumtions and Open issues:

- Whenever user open localhost://3000 - will always open UPLOAD page (which is annoying for now, we han handle this as well).
- For now all files type are allow to upload - but only sitemap.txt is reading for API return.
- NO unit test covered yet (will ad later).
- Once user upload sitemap.txt then screen will show file name and 100% status, then use need to take action to close this screen.
- For now behind overlay is visible (Simulation screen is visible not hidden) , we can do that as well based on conding if upload complete then only it should visible.
- Simulation flow - Added basic check but still there are few corner cases are not covered.
- If user refresh then only he will fetch new data from sitemap and some for directions flow, if count is more then two if type field is empty still allowing user to create new row.
