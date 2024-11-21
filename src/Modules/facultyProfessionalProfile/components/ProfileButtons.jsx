import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Flex, Tabs, Text } from "@mantine/core";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import ProjectsMaster from "../Profile/Projects/ProjectMaster";
import ThesisSupervisionMaster from "../Profile/ThesisSupervision/ThesisSupervisionMaster";
import EventMaster from "../Profile/EventsOrganised/EventMaster";
import VisitsMaster from "../Profile/Visits/VisitsMaster";
import ConferenceMaster from "../Profile/Conference/ConferenceMaster";
import PublicationMaster from "../Profile/Publications/PublicationsMaster";
import OtherMaster from "../Profile/Others/OtherMaster";
import MyProfileMaster from "../Profile/MyProfile/MyProfileMaster";
import classes from "../../Dashboard/Dashboard.module.css";
import ProjectManagementFormMaster from "../Profile/ProjectManagementForms/ProjectManagementFormMaster";
import AboutMePage from "../Profile/AboutMe/AboutMe";

function ProfileButtons() {
  const [activeTab, setActiveTab] = useState("0");
  const tabsListRef = useRef(null);
  const [breadCrumbItems, setBreadCrumbItems] = useState([]);
  const userRole = useSelector((state) => state.user.role); // Access user role from Redux

  // Tab items data
  const tabItems = [
    { title: "Publications", component: <PublicationMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    { title: "Projects", component: <ProjectsMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    { title: "Thesis Supervision", component: <ThesisSupervisionMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    { title: "Events", component: <EventMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    { title: "Visits", component: <VisitsMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    { title: "Conference/Symposium", component: <ConferenceMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    { title: "Others", component: <OtherMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    // { title: "Project Management Forms", component: <ProjectManagementFormMaster /> },
    { title: "My Profile", component: <MyProfileMaster breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
    { title: "About Me", component: <AboutMePage breadCrumbItems={breadCrumbItems} setBreadCrumbItems={setBreadCrumbItems}/> },
  ];

  // Handle tab change (previous/next)
  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(parseInt(activeTab, 10) + 1, tabItems.length - 1)
        : Math.max(parseInt(activeTab, 10) - 1, 0);
    setActiveTab(String(newIndex));
    tabsListRef.current.scrollBy({
      left: direction === "next" ? 50 : -50,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const currentTab = tabItems[parseInt(activeTab, 10)];
    // console.log(currentTab);

    const breadcrumbs = [
      { title: "Home", href: "/dashboard" },
      { title: "FPS", href: "/facultyprofessionalprofile" },
      { title: currentTab.title, href: "#" },
    ].map((item, index) => (
      <Text key={index} component="a" href={item.href} size="16px" fw={600}>
        {item.title}
      </Text>
    ));
    // console.log("bread" ,breadcrumbs);

    setBreadCrumbItems(breadcrumbs);
    // console.log(breadcrumbItems);
    // console.log(activeTab);
  }, [activeTab]);

  return (userRole === "Professor" || userRole === "Assistant Professor") ? (
    <>
      <Flex
        justify="flex-start"
        align="center"
        gap={{ base: "0.5rem", md: "1rem" }}
        mt={{ base: "1rem", md: "1.5rem" }}
        ml={{ md: "lg" }}
      >
        {/* Previous Button */}
        <Button
          onClick={() => handleTabChange("prev")}
          variant="default"
          p={0}
          style={{ border: "none" }}
        >
          <CaretCircleLeft
            className={classes.fusionCaretCircleIcon}
            weight="light"
          />
        </Button>

        {/* Tabs Section */}
        <div className={classes.fusionTabsContainer} ref={tabsListRef}>
          <Tabs value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
              {tabItems.map((item, index) => (
                <Tabs.Tab
                  value={String(index)}
                  key={index}
                  onClick={() => setActiveTab(String(index))}  // Make tabItems clickable
                  className={
                    activeTab === String(index)
                      ? classes.fusionActiveRecentTab
                      : ""
                  }
                >
                  <Text>{item.title}</Text>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </div>

        {/* Next Button */}
        <Button
          onClick={() => handleTabChange("next")}
          variant="default"
          p={0}
          style={{ border: "none" }}
        >
          <CaretCircleRight
            className={classes.fusionCaretCircleIcon}
            weight="light"
          />
        </Button>
      </Flex>

      {/* Display the active tab content */}
      {tabItems[parseInt(activeTab, 10)]?.component}
    </>
  ) : null;
}

export default ProfileButtons;
