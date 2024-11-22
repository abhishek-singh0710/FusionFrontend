// // import { useRef, useState } from "react";
// // import { useSelector } from "react-redux";
// // import { Button, Flex, Tabs, Text } from "@mantine/core";
// // import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
// // import ProjectsMaster from "../Profile/Projects/ProjectMaster";
// // import ThesisSupervisionMaster from "../Profile/ThesisSupervision/ThesisSupervisionMaster";
// // import EventMaster from "../Profile/EventsOrganised/EventMaster";
// // import VisitsMaster from "../Profile/Visits/VisitsMaster";
// // import ConferenceMaster from "../Profile/Conference/ConferenceMaster";
// // import PublicationMaster from "../Profile/Publications/PublicationsMaster";
// // import OtherMaster from "../Profile/Others/OtherMaster";
// // import MyProfileMaster from "../Profile/MyProfile/MyProfileMaster";
// // import classes from "../../Dashboard/Dashboard.module.css";
// // // import ProjectManagementFormMaster from "../Profile/ProjectManagementForms/ProjectManagementFormMaster";
// // import AboutMePage from "../Profile/AboutMe/AboutMe";

// // function ProfileButtons() {
// //   const [activeTab, setActiveTab] = useState("0");
// //   const tabsListRef = useRef(null);
// //   const userRole = useSelector((state) => state.user.role); // Access user role from Redux

// //   // Tab items data
// //   const tabItems = [
// //     { title: "Publications", component: <PublicationMaster /> },
// //     { title: "Projects", component: <ProjectsMaster /> },
// //     { title: "Thesis Supervision", component: <ThesisSupervisionMaster /> },
// //     { title: "Events", component: <EventMaster /> },
// //     { title: "Visits", component: <VisitsMaster /> },
// //     { title: "Conference/Symposium", component: <ConferenceMaster /> },
// //     { title: "Others", component: <OtherMaster /> },
// //     // { title: "Project Management Forms", component: <ProjectManagementFormMaster /> },
// //     { title: "My Profile", component: <MyProfileMaster /> },
// //     { title: "About Me", component: <AboutMePage /> },
// //   ];

// //   // Handle tab change (previous/next)
// //   const handleTabChange = (direction) => {
// //     const newIndex =
// //       direction === "next"
// //         ? Math.min(parseInt(activeTab, 10) + 1, tabItems.length - 1)
// //         : Math.max(parseInt(activeTab, 10) - 1, 0);
// //     setActiveTab(String(newIndex));
// //     tabsListRef.current.scrollBy({
// //       left: direction === "next" ? 50 : -50,
// //       behavior: "smooth",
// //     });
// //   };

// //   return (userRole === "Professor" || userRole === "Assistant Professor") ? (
// //     <>
// //       <Flex
// //         justify="flex-start"
// //         align="center"
// //         gap={{ base: "0.5rem", md: "1rem" }}
// //         mt={{ base: "1rem", md: "1.5rem" }}
// //         ml={{ md: "lg" }}
// //       >
// //         {/* Previous Button */}
// //         <Button
// //           onClick={() => handleTabChange("prev")}
// //           variant="default"
// //           p={0}
// //           style={{ border: "none" }}
// //         >
// //           <CaretCircleLeft
// //             className={classes.fusionCaretCircleIcon}
// //             weight="light"
// //           />
// //         </Button>

// //         {/* Tabs Section */}
// //         <div className={classes.fusionTabsContainer} ref={tabsListRef}>
// //           <Tabs value={activeTab} onTabChange={setActiveTab}>
// //             <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
// //               {tabItems.map((item, index) => (
// //                 <Tabs.Tab
// //                   value={String(index)}
// //                   key={index}
// //                   onClick={() => setActiveTab(String(index))}  // Make tabItems clickable
// //                   className={
// //                     activeTab === String(index)
// //                       ? classes.fusionActiveRecentTab
// //                       : ""
// //                   }
// //                 >
// //                   <Text>{item.title}</Text>
// //                 </Tabs.Tab>
// //               ))}
// //             </Tabs.List>
// //           </Tabs>
// //         </div>

// //         {/* Next Button */}
// //         <Button
// //           onClick={() => handleTabChange("next")}
// //           variant="default"
// //           p={0}
// //           style={{ border: "none" }}
// //         >
// //           <CaretCircleRight
// //             className={classes.fusionCaretCircleIcon}
// //             weight="light"
// //           />
// //         </Button>
// //       </Flex>

// //       {/* Display the active tab content */}
// //       {tabItems[parseInt(activeTab, 10)]?.component}
// //     </>
// //   ) : null;
// // }

// // export default ProfileButtons;

// import { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { Button, Flex, Tabs, Text } from "@mantine/core";
// import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
// import axios from "axios";
// import ProjectsMaster from "../Profile/Projects/ProjectMaster";
// import ThesisSupervisionMaster from "../Profile/ThesisSupervision/ThesisSupervisionMaster";
// import EventMaster from "../Profile/EventsOrganised/EventMaster";
// import VisitsMaster from "../Profile/Visits/VisitsMaster";
// import ConferenceMaster from "../Profile/Conference/ConferenceMaster";
// import PublicationMaster from "../Profile/Publications/PublicationsMaster";
// import OtherMaster from "../Profile/Others/OtherMaster";
// import MyProfileMaster from "../Profile/MyProfile/MyProfileMaster";
// import classes from "../../Dashboard/Dashboard.module.css";
// // import ProjectManagementFormMaster from "../Profile/ProjectManagementForms/ProjectManagementFormMaster";
// import AboutMePage from "../Profile/AboutMe/AboutMe";

// function ProfileButtons() {
//   const [activeTab, setActiveTab] = useState("0");
//   const tabsListRef = useRef(null);
//   const userRole = useSelector((state) => state.user.role); // Access user role from Redux

//   // Tab items data
//   const tabItems = [
//     { title: "Publications", component: <PublicationMaster /> },
//     { title: "Projects", component: <ProjectsMaster /> },
//     { title: "Thesis Supervision", component: <ThesisSupervisionMaster /> },
//     { title: "Events", component: <EventMaster /> },
//     { title: "Visits", component: <VisitsMaster /> },
//     { title: "Conference/Symposium", component: <ConferenceMaster /> },
//     { title: "Others", component: <OtherMaster /> },
//     // { title: "Project Management Forms", component: <ProjectManagementFormMaster /> },
//     { title: "My Profile", component: <MyProfileMaster /> },
//     { title: "About Me", component: <AboutMePage /> },
//   ];

//   // Handle tab change (previous/next)
//   const handleTabChange = (direction) => {
//     const newIndex =
//       direction === "next"
//         ? Math.min(parseInt(activeTab, 10) + 1, tabItems.length - 1)
//         : Math.max(parseInt(activeTab, 10) - 1, 0);
//     setActiveTab(String(newIndex));
//     tabsListRef.current.scrollBy({
//       left: direction === "next" ? 50 : -50,
//       behavior: "smooth",
//     });
//   };

// // Function to handle report generation and file download
// const handleGenerateReport = async () => {
//   const receiverIp = "your-server-ip"; // Replace with actual IP
//   const fileName = "report.pdf"; // Replace with your desired file name
//   const ipAddress = "user-ip-address"; // Replace with the user's IP address

//   try {
//     const response = await axios.post(
//       `http://${receiverIp}:8000/eis/api/report/`,
//       { file_name: fileName, ip_address: ipAddress },
//       { responseType: "blob" },
//     );

//     if (response.status === 200) {
//       const blob = new Blob([response.data], {
//         type: response.headers["content-type"] || "application/octet-stream",
//       });
//       const downloadUrl = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = downloadUrl;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       window.URL.revokeObjectURL(downloadUrl);
//       document.body.removeChild(link);
//     } else {
//       console.error(
//         `File download failed. Server responded with status: ${response.status}`,
//       );
//     }
//   } catch (error) {
//     if (error.response) {
//       console.error(
//         `Download failed with status: ${error.response.status}. ${error.response.data}`,
//       );
//     } else if (error.request) {
//       console.error(
//         "No response received from the server. Check the network or server status.",
//       );
//     } else {
//       console.error("Error in downloading file:", error.message);
//     }
//   }
// };

//   return userRole === "Professor" || userRole === "Assistant Professor" ? (
//     <>
//       <Flex
//         justify="flex-start"
//         align="center"
//         gap={{ base: "0.5rem", md: "1rem" }}
//         mt={{ base: "1rem", md: "1.5rem" }}
//         ml={{ md: "lg" }}
//       >
//         {/* Previous Button */}
//         <Button
//           onClick={() => handleTabChange("prev")}
//           variant="default"
//           p={0}
//           style={{ border: "none" }}
//         >
//           <CaretCircleLeft
//             className={classes.fusionCaretCircleIcon}
//             weight="light"
//           />
//         </Button>

//         {/* Tabs Section */}
//         <div className={classes.fusionTabsContainer} ref={tabsListRef}>
//           <Tabs value={activeTab} onTabChange={setActiveTab}>
//             <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
//               {tabItems.map((item, index) => (
//                 <Tabs.Tab
//                   value={String(index)}
//                   key={index}
//                   onClick={() => setActiveTab(String(index))} // Make tabItems clickable
//                   className={
//                     activeTab === String(index)
//                       ? classes.fusionActiveRecentTab
//                       : ""
//                   }
//                 >
//                   <Text>{item.title}</Text>
//                 </Tabs.Tab>
//               ))}
//             </Tabs.List>
//           </Tabs>
//         </div>

//         {/* Next Button */}
//         <Button
//           onClick={() => handleTabChange("next")}
//           variant="default"
//           p={0}
//           style={{ border: "none" }}
//         >
//           <CaretCircleRight
//             className={classes.fusionCaretCircleIcon}
//             weight="light"
//           />
//         </Button>

// {/* Generate Report Button */}
// <Button
//   onClick={handleGenerateReport}
//   variant="filled"
//   color="blue"
//   style={{ marginLeft: "auto", marginRight: "auto" }} // Align the button to the right
// >
//   Generate Report
// </Button>
//       </Flex>

//       {/* Display the active tab content */}
//       {tabItems[parseInt(activeTab, 10)]?.component}
//     </>
//   ) : null;
// }

// export default ProfileButtons;

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Flex, Tabs, Text } from "@mantine/core";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import axios from "axios";
import ProjectsMaster from "../Profile/Projects/ProjectMaster";
import ThesisSupervisionMaster from "../Profile/ThesisSupervision/ThesisSupervisionMaster";
import EventMaster from "../Profile/EventsOrganised/EventMaster";
import VisitsMaster from "../Profile/Visits/VisitsMaster";
import ConferenceMaster from "../Profile/Conference/ConferenceMaster";
import PublicationMaster from "../Profile/Publications/PublicationsMaster";
import OtherMaster from "../Profile/Others/OtherMaster";
import MyProfileMaster from "../Profile/MyProfile/MyProfileMaster";
import classes from "../../Dashboard/Dashboard.module.css";
// import ProjectManagementFormMaster from "../Profile/ProjectManagementForms/ProjectManagementFormMaster";
import AboutMePage from "../Profile/AboutMe/AboutMe";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";

function ProfileButtons() {
  const [activeTab, setActiveTab] = useState("0");
  const tabsListRef = useRef(null);
  const [breadCrumbItems, setBreadCrumbItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const userRole = useSelector((state) => state.user.role); // Access user role from Redux

  // Tab items data
  const tabItems = [
    {
      title: "Publications",
      component: (
        <PublicationMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    {
      title: "Projects",
      component: (
        <ProjectsMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    {
      title: "Thesis Supervision",
      component: (
        <ThesisSupervisionMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    {
      title: "Events",
      component: (
        <EventMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    {
      title: "Visits",
      component: (
        <VisitsMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    {
      title: "Conference/Symposium",
      component: (
        <ConferenceMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    {
      title: "Others",
      component: (
        <OtherMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    // { title: "Project Management Forms", component: <ProjectManagementFormMaster /> },
    {
      title: "My Profile",
      component: (
        <MyProfileMaster
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
    {
      title: "About Me",
      component: (
        <AboutMePage
          breadCrumbItems={breadCrumbItems}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      ),
    },
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

  // Function to handle report generation and file download
  const handleGenerateReport = async () => {
    // setLoading(true);
    // setError(null);
    try {
      const formData = new FormData();
      formData.append("username", "atul"); // Adjust this as needed
      const response = await axios.post(
        "http://127.0.0.1:8000/eis/api/report/",
        formData,
        {
          responseType: "blob",
        },
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report.pdf";
      link.click();
    } catch (error) {
      console.error(
        "Error downloading CV:",
        error.response ? error.response.data : error.message,
      );
      // setError("Error downloading CV. Please try again.");
    } finally {
      // setLoading(false);
    }
  };

  return userRole === "Professor" || userRole === "Assistant Professor" ? (
    <>
      <CustomBreadcrumbs breadCrumbs={breadCrumbItems} />
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
                  onClick={() => setActiveTab(String(index))} // Make tabItems clickable
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

        {/* Generate Report Button */}
        <Button
          onClick={handleGenerateReport}
          variant="filled"
          color="blue"
          style={{ marginLeft: "auto", marginRight: "auto" }} // Align the button to the right
        >
          Generate Report
        </Button>
      </Flex>

      {/* Display the active tab content */}
      {tabItems[parseInt(activeTab, 10)]?.component}
    </>
  ) : null;
}

export default ProfileButtons;
