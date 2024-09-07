import Css from "../assests/Css.png"
import Tailwind from "../assests/Tailwind.png"
import Html from "../assests/Html.png"
import NodeJs from "../assests/Nodejs.png"
import ReactJs from "../assests/React.png"
import Mongodb from "../assests/MongoDB.png"
import Javascript from "../assests/Javascript.png"

import Github from "../assests/GitHub.png"
import Php from "../assests/Php.png"
import Mysql from "../assests/Mysql.png"
import Express from "../assests/Expressjs.png"
import Frontend from '../assests/frontend.png'
import Backend from '../assests/backend.png'
import Cloud from '../assests/cloud.png'
import Mern from '../assests/mern.png'
import Learn from '../assests/Learn.png'
import Ecommerce from '../assests/Ecomerce.png'
import Chat from '../assests/chat.png'
import java from '../assests/java.png'
import springboot from '../assests/springboot.png'
import bootstrap from '../assests/bootstrap.png'
import { spring } from "framer-motion"

const services = [
    {
        title:"Frontend Developer",
        icon:Frontend,
    },
    {
        title:"Backend Developer",
        icon:Backend,
    },
    {
        title:"Java Developer",
        icon:Cloud,
    },
    {
        title:"MERN Developer",
        icon:Mern,
    }
];

const technologies = [
    {
        name:"HTML 5",
        icon:Html,
    },
    {
        name:"CSS 3",
        icon:Css,
    },
    {
        name:"Tailwind",
        icon:Tailwind,
    },
    {
        name: "BootStrap",
        icon:bootstrap,
    },
    {
        name:"Javascript",
        icon:Javascript,
    },
   
    {
        name:"Node.js",
        icon:NodeJs,
    },
    {
        name:"React.js",
        icon:ReactJs,
    },
    {
        name:"Express.js",
        icon:Express,
    },
    {
        name:"MongoDB",
        icon:Mongodb,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "SpringBoot",
        icon: springboot,
    },
   
    {
        name:"GitHub",
        icon:Github,
    },
    {
        name:"MySQL",
        icon:Mysql,
    },
    {
        name:"Php",
        icon:Php,
    },
   
    
];

const projects = [
    {
        name:"Canteen Management System",
        description:"An admin based canteen management website to handle accountability and maintains the records, best GUI, sale page, authorization and authentication.",
        tags : [
            {
                name:"Typescript",
                color:"blue-text-gradient"
            },
            {
                name:"React.js",
                color:"blue-text-gradient"
            },
            {
                name:"Bootstrap",
                color:"blue-text-gradient"
            },
        ],
        image:Learn,
        source_code_link:"",
        source_deploy_link:""
    },
    {
        name:"Chat App",
        description:"A chat app website facilitates real-time communication with instant messaging, video calls, and file sharing. It offers user authentication, customizable profiles, group chats, interactive conversations.",
        tags : [
            {
                name:"Typescript",
                color:"blue-text-gradient"
            },
            {
                name:"React.js",
                color:"blue-text-gradient"
            },
            {
                name:"Bootstrap",
                color:"blue-text-gradient"
            },
        ],
        image:Chat,
        source_code_link:"",
        source_deploy_link:""
    },
    {
        name:"E-Commerce",
        description:"An eCommerce website enables online shopping, offering products, secure payment, and delivery services. It features user-friendly navigation, search functionality, product listings, customer reviews, and various promotional offers.",
        tags : [
            {
                name:"Typescript",
                color:"blue-text-gradient"
            },
            {
                name:"React.js",
                color:"blue-text-gradient"
            },
            {
                name:"Bootstrap",
                color:"blue-text-gradient"
            },
        ],
        image:Ecommerce,
        source_code_link:"",
        source_deploy_link:""
    },
    
];
export {services,technologies,projects};