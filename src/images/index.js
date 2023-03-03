// function to import multiple files
function importAll(r) {
	let images = {};
    // r.keys() returns an array of all possible requests
    r.keys().forEach( item => {
        // replace './' in the names of the images with '' and assign the item to the key created
        images[item.replace('./', '')] = r(item); 
    });
	return images
}

// context which contains an array of all files present in 'images' directory
const context = require.context('../images', false, /\.(png|jpe?g|svg)$/)
// dropdown links images
const images = importAll(context);

import docs from './documentation.svg';
import docs2 from "./docs2.svg";
import docs3 from "./docs3.svg";
import docs4 from "./docs4.svg";
import docs5 from "./docs5.svg";
import docs6 from "./docs6.svg";
import docs7 from "./docs7.svg";
import globe from './globe.svg';
import globeGray from './globe-gray.svg';
import profService from './prof-service.svg';
import profService1 from './profService1.svg';
import profService2 from './profService2.svg';
import profService3 from './profService3.svg';
import profService4 from './profService4.svg';
import support from './support.svg';
import support1 from './support-1.svg';
import support2 from './support-2.svg';
import support3 from './support-3.svg';
import tools from './tools.svg';
import training from './training.svg';
import logo from './zscaler-logo.png';
import listDoc from './list-doc.svg';

export {
    docs,
    docs2,
    docs3,
    docs4,
    docs5,
    docs6,
    docs7,
    globe,
    globeGray,
    profService,
    profService1,
    profService2,
    profService3,
    profService4,
    support,
    support1,
    support2,
    support3,
    tools,
    training,
    logo,
    listDoc,
}

export default images