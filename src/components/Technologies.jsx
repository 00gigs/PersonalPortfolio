import React from "react";
import { FaJava, FaNode,FaWordpressSimple} from "react-icons/fa";
import { FaReact,FaPython } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb,SiJavascript,SiExpress,SiCsharp,SiTypescript} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { LiaPhp } from "react-icons/lia";
import { DiDjango } from "react-icons/di";
const Technologies = () => {
  return (
    <div>
      <div className="font-roboto font-bold text-4xl moving-text tracking-widest  shadow-2xl bg-slate-300 p-1 rounded-xl">
         TOOLBOX 🧰
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-14 ml-[2rem] gap-5">
        <div>
          <FaReact className="text-[3rem] bg-[#2fa2cc] rounded-xl" />
          <p className=" font-roboto mt-3 text-sm md:text-base lg:text-lg ">
            Enables interactive user interfaces with reusable components,
            virtual DOM for efficient updates, and a vast ecosystem for web app
            development.
          </p>
        </div>
        <div>
          <TbBrandNextjs className="text-[3rem] bg-slate-200 rounded-xl" />
          <p className=" font-roboto mt-2">
            Optimizes React apps with server-side rendering, static site
            generation, and automatic code splitting, enhancing performance and
            SEO.
          </p>
        </div>
        <div>
          <DiDjango className="text-[3rem] bg-green-500 rounded-xl" />
          <p className=" font-roboto">
            {" "}
            Comprehensive Python framework offers rapid development, a
            built-in admin panel, and robust security features for complex web
            applications.
          </p>
        </div>
        <div>
          <FaWordpressSimple className="text-[3rem] bg-slate-200 rounded-xl" />
          <p className=" font-roboto mt-2">
            Flexible content management system for creating and managing
            client content  with ease, featuring thousands of themes and plugins for
            customization.
          </p>
        </div>
        <div>
          <SiJavascript className="text-[3rem] bg-yellow-300 rounded-xl" />
          <p className=" font-roboto mt-2">
            {" "}
            An essential language for web development, enabling interactive web
            content, client-side scripting, used as the backbone of modern web
            applications.
          </p>
        </div>
        <div>
          <SiTypescript className="text-[3rem] bg-blue-300 rounded-xl" />
          <p className=" font-roboto mt-2">
            Enhances JavaScript with static typing, facilitating code
            reliability and maintainability, ideally used for large-scale application
            development.
          </p>
        </div>
        <div>
          <FaPython className="text-[3rem] bg-gradient-to-r from-blue-300 to-yellow-300  rounded-xl" />
          <p className=" font-roboto mt-2">
            Python: Used for data driven web development, data analysis, AI, and
            scientific computing, praised for its readability and extensive
            libraries.
          </p>
        </div>
        <div>
          <LiaPhp className="text-[3rem] bg-purple-500 rounded-xl" />
          <p className=" font-roboto mt-2">
            Powers dynamic web content and applications,  used for
            server-side scripting, database integration, and content management
            systems.
          </p>
        </div>
        <div>
          <FaJava className="text-[3rem] bg-gradient-to-r from-red-600 to-blue-300  rounded-xl" />
          <p className=" font-roboto mt-2">
            Platform-independent, object-oriented programming language used for
            its portability, security features, and  application at enterprise scale.
          </p>
        </div>
        <div>
          <SiCsharp className="text-[3rem] bg-blue-500 rounded-xl" />
          <p className=" font-roboto mt-2">
            {" "}
            Allows control over system resources and performance, suited for
            system/software development, game programming, and real-time
            applications.
          </p>
        </div>
        <div>
          <BiLogoPostgresql className="text-[3rem] bg-blue-200 rounded-xl" />
          <p className=" font-roboto mt-2">
            Feature-rich SQL database allowing advanced data types, full-text
            search, and ACID compliance for reliable transactional processing.
          </p>
        </div>
        <div>
          <SiMongodb className="text-[3rem] bg-green-700 rounded-xl" />
          <p className=" font-roboto mt-2">
            NoSQL database  for implementing scalability and flexibility with a
            document model, suitable for applications needing rapid development
            and horizontal scaling.
          </p>
        </div>
        <div>
          <GrMysql className="text-[3rem] bg-gradient-to-r from-blue-300 to-[#ef7529] rounded-xl" />
          <p className=" font-roboto mt-2">
            Relational database system, using  reliability and
            efficiency for web applications and supporting a range of
            programming languages.
          </p>
        </div>
        <div>
          <FaNode className="text-[3rem] bg-[#15a03b] rounded-xl" />
          <p className=" font-roboto mt-2">
            Event-driven JavaScript runtime environment, allowing scalable
            server-side and networking applications, popular for its
            non-blocking I/O model.
          </p>
        </div>
        <div>
          <SiExpress className="text-[3rem] bg-slate-200 rounded-xl" />
          <p className=" font-roboto mt-2">
            Web application framework for Node.js, simplifies the development
            of web applications and RESTful APIs with minimal overhead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
