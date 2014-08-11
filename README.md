This example shows react and lazy loading in action w/ help from jspm

Watch the network tab to see the following when you click the reports link

    jspm will load an ES6 module on demand app/reports

**To run the react app locally**

    npm install

    jspm install react=github:reactjs/react-bower@0.10.0 -o "{main: 'react', format: 'global'}" -f
    jspm install react-nested-router=github:toranb/toranb-react-nested-router

    gulp

    python -m SimpleHTTPServer 3000

    visit http://localhost:3000 to see the running app
