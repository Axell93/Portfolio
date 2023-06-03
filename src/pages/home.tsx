import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

export const Home = () => {
  return (
    <>
      <div>
        <div className="flex justify-start mt-12">
          <div className="font-[proximanova] translate-x-[-300%] animate-slide-in-text bg-clip-text text-transparent text-[40px] md:text-[80px] sm:text-[65px] bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]">
            Websites
          </div>
          <div className="font-[proximanova] leading-[3] translate-x-[-320%] delay-1000 animate-slide-in-text bg-clip-text text-transparent text-[40px] md:text-[80px] sm:text-[65px] bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]">
            Reimagined
          </div>
        </div>
        <div className="text-[color:var(--foreground)] text-xl md:w-[75%] sm:w-4/6 mx-9 font-sans text-justify sm:text-left">
          <p>
            As a highly skilled full-stack web developer, I specialize in
            JavaScript, Java, and Dotnet languages, with proficiency in MySQL
            for database management. I am driven by a strong desire to create
            high-performance, dependable, and secure applications that address
            diverse challenges. I consistently update my knowledge to deliver
            innovative and cutting-edge solutions to clients in this fast-paced
            and evolving landscape.
          </p>
        </div>
        <div className="flex flex-col gap-9 justify-around mt-40 mb-24 ml-2 md:ml-20">
          <h2>Projects I have worked on: </h2>
          <Card className="flex w-full md:w-2/4 drop-shadow-2xl border-none flex-col">
            <CardHeader className="flex-row">
              <LabelImportantIcon />
              <CardTitle className="text-[20px] pl-2">
                ADP - Workforce Now On the Go
              </CardTitle>
            </CardHeader>
            <CardContent className="flex p-6">
              <p className=" text-[20px] text-justify">
                It's an integrated payroll and time & attendance software for
                business owners short on time. The application, built using the
                ReactJS and NodeJS stack, follows a microservices architecture.
                My primary focus has been on frontend development, specifically
                creating rich and user-friendly UI components. Additionally, I
                have taken on the responsibility of leading the scrum activities
                for the team and providing technical insights to ensure a
                thorough understanding of the project requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="flex  w-full md:w-2/4  drop-shadow-2xl border-none  flex-col">
            <CardHeader className="flex-row">
              <LabelImportantIcon />
              <CardTitle className="text-[20px] pl-2">
                Investment Banking Trading Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="flex p-6">
              <p className="text-[20px] text-justify">
                This is a desktop trading platform for one of the largest banks
                in the United States. This platform is exclusively used by
                brokers to conduct transactions in the trade market. Leveraging
                Windows Dotnet technology, our primary focus has been on
                managing the order submission flow.
              </p>
            </CardContent>
          </Card>
          <Card className="flex  w-full md:w-2/4  drop-shadow-2xl border-none flex-col">
            <CardHeader className="flex-row">
              <LabelImportantIcon />
              <CardTitle className="text-[20px] pl-2">
                Time and Attendance Management
              </CardTitle>
            </CardHeader>
            <CardContent className="flex p-6">
              <p className="text-[20px] text-justify">
                We have worked on the internal application for Infosys that
                effectively tracks employee leave and attendance. Utilizing
                Dotnet MVC 4.5, our team has been dedicated to expanding the
                application's capabilities to include features such as leave
                requests, leave balance management, and work-from-home requests,
                all accessible from a single screen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
