import WebDevelopment from "../assets/pictures/web_development.jpg";
import { Button } from "../components/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/card";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Work = () => {
  return (
    <>
      <div className="flex flex-row-reverse mt-20 mb-40  gap-x-8 flex-wrap justify-center items-center">
        <figure>
          <img src={WebDevelopment} width="500px" height="500px" />
        </figure>
        <div className="w-[44rem] pr-8 pt-8 text-left">
          <div className="">
            <p className="text-xl">
              This website has been built with React JS using Radix UI, Tailwind
              CSS library for styling and built using vite.
            </p>
            {/* <p className="mt-4 hidden">
              In order to see the code repository of this website please enter
              your email id below and the github link will be sent to your email
              id.
            </p> */}
            <div className="mt-10">
              <Card className="bg-transparent card-shadow border-none font-sans">
                <CardHeader>
                  <CardTitle>
                    Currently, the below items are in development
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0">
                      <VpnLockIcon className="flex " />
                      <p className="pl-2">
                        Adding OAuth2 authentication and authorization feature.
                      </p>
                    </div>

                    <div className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0">
                      <AccessibilityNewIcon className="flex" />

                      <p className="pl-2">
                        Adding Redis capabilities for caching data.
                      </p>
                    </div>

                    <div className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0">
                      <TranslateIcon className="flex " />

                      <p className="pl-2">
                        Adding multiple language support (aka.
                        Internationalisation).
                      </p>
                    </div>

                    <div className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0">
                      <NotificationsIcon className="flex " />
                      <p className="pl-2">
                        Adding support for mailing services like
                        <Button variant="link" size="lg">
                          <a
                            href="https://mailchimp.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            MailChimp
                          </a>
                        </Button>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-32 mb-24">
        <em>
          You can find the source code for this website and much more at my
          <Button variant="link" size="sm">
            <a
              style={{ fontStyle: "italic" }}
              href="https://github.com/Axell93/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository
            </a>
          </Button>
          .
        </em>
      </div>
    </>
  );
};
