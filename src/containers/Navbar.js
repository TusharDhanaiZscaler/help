import React from "react";
import NavLink from "../components/NavLink";
import Logo from "../components/Logo";
import Link from "../components/Link";
import Dropdown from "./Dropdown";

// zscaler logo
import logo from '../images/zscaler-logo.png';

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

//icon
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
    render() {
        return (
            <div className="row px-3 px-md-5">
                <Logo image={logo} className="h-75" />
                <div className="col-12 col-xl-8 px-4 px-xl-0 d-xl-flex align-items-xl-center">
                    <NavLink className="col-12 col-xl-3 py-1">
                        <Dropdown name="Documentation">
                            <Link 
                                href="#" 
                                className="text-decoration-none link d-flex fw-light small py-1" 
                                text="Secure Internet and SaaS Access (ZIA)"
                                image={images["globe.svg"].default}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Secure Private Access (ZPA)"
                                image={images["docs2.svg"].default}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Digital Experience Monitoring (ZDX)"
                                image={images['docs3.svg'].default}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Workload Segmentation (ZWS)"
                                image={images['docs4.svg'].default}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Zscaler Connectors"
                                image={images['docs5.svg'].default}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Data Protection"
                                image={images['docs6.svg'].default}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Threat Protection"
                                image={images['docs7.svg'].default}
                            />
                        </Dropdown>
                    </NavLink>
                    <NavLink className="col-12 col-xl-2 py-1">
                        <Dropdown name="Support">
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Phone Support" image={images['support-1.svg'].default} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Login to See My Tickets" image={images['support-2.svg'].default} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Submit Ticket" image={images['support-3.svg'].default} />
                        </Dropdown>
                    </NavLink>
                    <NavLink className="col-12 col-xl-3 py-1">
                        <Dropdown name="Professional Services">
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Deployment Services"
                                image={images['profService1.svg'].default} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Professional Services Credits"
                                image={images['profService2.svg'].default} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Staff Augmentation"
                                image={images['profService3.svg'].default} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Custom SOW"
                                image={images['profService4.svg'].default} />
                        </Dropdown>
                    </NavLink>
                    <NavLink className="col-12 col-xl-3 ms-xl-2 py-1 blue-bottom-border">
                        <div>
                            <Link href="#" className="text-decoration-none text-dark w-100" text="Training & Certification" />
                        </div>
                    </NavLink>
                    <NavLink className="col-12 col-xl-1 py-1 blue-bottom-border">
                        <div>
                            <Link href="#" className="text-decoration-none text-dark w-100" text="Tools" />
                        </div>
                    </NavLink>
                </div>
                <NavLink className="col-12 col-xl-1 px-4 d-xl-flex align-items-xl-center">
                    <Dropdown 
                        name="EN"
                        icon={faGlobeAsia}
                    >
                        <div className="">
                            <div>
                                <Link href="#" className="text-decoration-none small fw-light link ps-2" text="English" />
                            </div>
                            <div>
                                <Link href="#" className="text-decoration-none small fw-light link ps-2" text="日本" />
                            </div>
                        </div>
                    </Dropdown>
                </NavLink>
            </div>
        )
    }
}

export default Navbar