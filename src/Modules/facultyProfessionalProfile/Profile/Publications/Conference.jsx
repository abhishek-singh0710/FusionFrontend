// import { useState } from "react";
// // import { Save } from "lucide-react";
// import axios from "axios";
// import {
//   MantineProvider,
//   Container,
//   Paper,
//   Title,
//   Grid,
//   TextInput,
//   Select,
//   Button,
//   Table,
//   FileInput,
//   Accordion,
// } from "@mantine/core";
// import { FloppyDisk, Trash, UploadSimple } from "@phosphor-icons/react";

// export default function Conference() {
//   const [inputs, setInputs] = useState({
//     author: "",
//     coAuthor: "",
//     conferenceName: "",
//     conferneceFile: "",
//     year: "",
//     title: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       const res = await axios.post("/author_insert", inputs);
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await axios.post("/emp_consultancy_projectsDelete", id);
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const years = Array.from({ length: 31 }, (_, i) => (2000 + i).toString());

//   // let tableData = [];
//   // useEffect(() => {
//   //   const getTableData = async () => {
//   //     try {
//   //       const res = await axios.get("/get_data");
//   //       tableData = res.data;
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   getTableData();
//   // }, []);

//   const tableData = Array.from({ length: 10 }, (_, index) => ({
//     id: `${index + 1}`,
//     title: `Title of Paper ${index + 1}`,
//     author: `Author ${String.fromCharCode(65 + index)}`,
//     conferenceName: `Details ${String.fromCharCode(65 + index)}`,
//     conferenceFile: `Download Link`,
//   }));

//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Container size="2xl" mt="xl">
//         <Paper
//           shadow="xs"
//           p="md"
//           withBorder
//           style={{ borderLeft: "8px solid #2185d0" }}
//         >
//           <Title order={2} mb="sm">
//             Add a Conference
//           </Title>
//           <form onSubmit={handleSubmit}>
//             <Grid>
//               <Grid.Col span={6}>
//                 <TextInput
//                   label="Author"
//                   placeholder="Author"
//                   value={inputs.author}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, author: e.target.value })
//                   }
//                   required
//                 />
//               </Grid.Col>
//               <Grid.Col span={6}>
//                 <TextInput
//                   label="Co-author(s)"
//                   placeholder="Co-author(s)"
//                   value={inputs.coAuthor}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, coAuthor: e.target.value })
//                   }
//                 />
//               </Grid.Col>
//               <Grid.Col span={6}>
//                 <TextInput
//                   label="Conference Name"
//                   placeholder="Name of the Conference"
//                   value={inputs.conferenceName}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, conferenceName: e.target.value })
//                   }
//                   required
//                 />
//               </Grid.Col>
//               <Grid.Col span={3}>
//                 <FileInput
//                   label="Conference File"
//                   placeholder="Choose file"
//                   icon={<UploadSimple size={14} />}
//                   value={inputs.conferenceFile}
//                   onChange={(file) =>
//                     setInputs({ ...inputs, conferenceFile: file })
//                   }
//                 />
//               </Grid.Col>
//               <Grid.Col span={3}>
//                 <Select
//                   label="Year"
//                   placeholder="Select year"
//                   data={years}
//                   value={inputs.year}
//                   onChange={(value) =>
//                     setInputs({ ...inputs, year: value || "" })
//                   }
//                   required
//                 />
//               </Grid.Col>
//               <Grid.Col span={12}>
//                 <TextInput
//                   label="Title"
//                   placeholder="Title"
//                   value={inputs.title}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, title: e.target.value })
//                   }
//                   required
//                 />
//               </Grid.Col>
//               <Grid.Col span={12}>
//                 <Accordion>
//                   <Accordion.Item label="Optional Conference Details">
//                     <Grid>{/* Add optional fields here */}</Grid>
//                   </Accordion.Item>
//                 </Accordion>
//               </Grid.Col>
//               <Grid.Col
//                 span={12}
//                 style={{ display: "flex", justifyContent: "flex-end" }}
//               >
//                 <Button
//                   type="submit"
//                   loading={isLoading}
//                   leftIcon={<FloppyDisk size={16} />}
//                 >
//                   Save
//                 </Button>
//               </Grid.Col>
//             </Grid>
//           </form>
//         </Paper>

//         <Paper mt="xl" p="md" withBorder>
//           <Title order={3} mb="sm">
//             Report:
//           </Title>
//           <div style={{ overflowX: "auto", maxHeight: "400px" }}>
//             {tableData.length === 0 ? (
//               <p>No Data Found</p>
//             ) : (
//               <Table striped highlightOnHover>
//                 <thead>
//                   <tr>
//                     <th>Sr.</th>
//                     <th>Title of Paper</th>
//                     <th>Authors</th>
//                     <th>Details</th>
//                     <th>Download</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.id}</td>
//                       <td>{data.title}</td>
//                       <td>{data.author}</td>
//                       <td>{data.details}</td>
//                       <td>
//                         <Button variant="outline" size="xs">
//                           Download
//                         </Button>
//                       </td>
//                       <td>
//                         <Button
//                           variant="filled"
//                           color="red"
//                           size="xs"
//                           leftIcon={<Trash size={14} />}
//                           onClick={() => handleDelete(data.id)}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             )}
//           </div>
//         </Paper>
//       </Container>
//     </MantineProvider>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MantineProvider,
  Container,
  Paper,
  Title,
  Grid,
  TextInput,
  Select,
  Button,
  Table,
  ScrollArea,
  ActionIcon,
} from "@mantine/core";
import { FloppyDisk, PencilSimple, Trash } from "@phosphor-icons/react";
import {
  getConferenceRoute,
  insertConferenceRoute,
  updateConferenceRoute,
  deleteConferenceRoute,
} from "../../../../routes/facultyProfessionalProfileRoutes";

export default function Conference() {
  const [inputs, setInputs] = useState({
    author: "",
    coAuthors: "",
    conferenceName: "",
    // conferenceFile: null,
    year: "",
    title: "",
    // venueHostInstitute: "",
    // dateOfSubmission: "",
    // dateOfAcceptance: "",
    // dateOfPublication: "",
    // pageNo: "",
    // status: "",
    // conferenceDates: "",
    // isbnNo: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAchievements = async () => {
    try {
      const res = await axios.get(getConferenceRoute);
      console.log(res.data);
      setTableData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch achievements on component mount
  useEffect(() => {
    fetchAchievements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("user_id", 5318); // Adjust this as needed
      formData.append("author", inputs.author);
      formData.append("title", inputs.title);
      formData.append("co_authors", inputs.coAuthors);
      formData.append("name", inputs.conferenceName);
      formData.append("year", inputs.year);
      if (editingId) {
        // Update the book
        formData.append("conferencepk", editingId);
        await axios.post(updateConferenceRoute, formData);
      } else {
        // Create a new book
        await axios.post(insertConferenceRoute, formData);
      }
      setInputs({
        author: "",
        coAuthors: "",
        conferenceName: "",
        // journalFile: null,
        year: "",
        title: "",
        // volume: "",
        // pageNo: "",
        // paperRefNo: "",
        // dateSubmission: "",
        // datePublication: "",
        // status: "",
        // category: "",
        // doi: "",
      });
      setEditingId(null); // Reset editing ID
      // Refresh the list of achievements
      fetchAchievements();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (achievement) => {
    if (window.confirm("Are you sure you want to delete this Conference?")) {
      try {
        // console.log(achievement)
        await axios.post(
          deleteConferenceRoute,
          new URLSearchParams({ pk: achievement }),
        ); // Adjust the delete URL as needed
        fetchAchievements();
      } catch (error) {
        console.error("Error deleting Conference:", error);
      }
    }
  };

  const handleEdit = (project) => {
    setInputs({
      author: project.authors,
      coAuthors: project.co_authors,
      conferenceName: project.name,
      year: project.year,
      title: project.title_paper,
      // volume: project.year,
      // pageNo: project.page_no,
      // paperRefNo: project.ref,
      // dateSubmission: project.dos,
      // datePublication: project.dop,
      // status: project.status,
      // category: project.is_sci ? "SCI" : "SCIE",
    });
    setEditingId(project.id);
  };

  const years = Array.from({ length: 31 }, (_, i) => (2000 + i).toString());

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="2xl" mt="xl">
        <Paper
          shadow="xs"
          p="md"
          withBorder
          style={{
            borderLeft: "8px solid #2185d0",
            backgroundColor: "#f9fafb",
          }}
        >
          <Title order={2} mb="sm" style={{ color: "#2185d0" }}>
            {inputs.id ? "Edit Conference" : "Add a Conference"}
          </Title>
          <form onSubmit={handleSubmit}>
            <Grid>
              <Grid.Col span={6}>
                <TextInput
                  label="Author"
                  placeholder="Author"
                  value={inputs.author}
                  onChange={(e) =>
                    setInputs({ ...inputs, author: e.target.value })
                  }
                  required
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  label="Co-author(s)"
                  placeholder="Co-Author"
                  value={inputs.coAuthors}
                  onChange={(e) =>
                    setInputs({ ...inputs, coAuthor: e.target.value })
                  }
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  label="Conference Name"
                  placeholder="Name of the Conference"
                  value={inputs.conferenceName}
                  onChange={(e) =>
                    setInputs({ ...inputs, conferenceName: e.target.value })
                  }
                  required
                />
              </Grid.Col>
              {/* <Grid.Col span={3}>
                <FileInput
                  label="Conference File"
                  placeholder="Choose File"
                  icon={<UploadSimple size={14} />}
                  value={inputs.conferenceFile}
                  onChange={(file) =>
                    setInputs({ ...inputs, conferenceFile: file })
                  }
                />
              </Grid.Col> */}
              <Grid.Col span={6}>
                <Select
                  label="Year"
                  placeholder="2021"
                  data={years}
                  value={inputs.year}
                  onChange={(value) => setInputs({ ...inputs, year: value })}
                  required
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Title"
                  placeholder="Title"
                  value={inputs.title}
                  onChange={(e) =>
                    setInputs({ ...inputs, title: e.target.value })
                  }
                  required
                />
              </Grid.Col>
              <Grid.Col span={12}>
                {/* <Accordion>
                  <Accordion.Item label="Optional Conference Details"> */}
                <details>
                  <summary style={{ cursor: "pointer", color: "#2185d0" }}>
                    Optional Journal Details
                  </summary>
                  <Grid gutter="md">
                    <Grid.Col span={6}>
                      <TextInput
                        label="Venue/Host Institute"
                        placeholder="Venue/Host Institute"
                        value={inputs.venueHostInstitute}
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            venueHostInstitute: e.target.value,
                          })
                        }
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Date of Submission(DOS)"
                        placeholder="Date/Time"
                        value={inputs.dateOfSubmission}
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            dateOfSubmission: e.target.value,
                          })
                        }
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Date of Acceptance(DOA)"
                        placeholder="Date/Time"
                        value={inputs.dateOfAcceptance}
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            dateOfAcceptance: e.target.value,
                          })
                        }
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Date of Publication(DOP)"
                        placeholder="Date/Time"
                        value={inputs.dateOfPublication}
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            dateOfPublication: e.target.value,
                          })
                        }
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Page No."
                        placeholder="Date of Publication"
                        value={inputs.pageNo}
                        onChange={(e) =>
                          setInputs({ ...inputs, pageNo: e.target.value })
                        }
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Select
                        label="Status"
                        placeholder="Status"
                        data={["Published", "Accepted", "Submitted"]}
                        value={inputs.status}
                        onChange={(value) =>
                          setInputs({ ...inputs, status: value })
                        }
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Conference Date(s)"
                        placeholder="SCI/SCIE"
                        value={inputs.conferenceDates}
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            conferenceDates: e.target.value,
                          })
                        }
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="ISBN No"
                        placeholder="Date of Issuance"
                        value={inputs.isbnNo}
                        onChange={(e) =>
                          setInputs({ ...inputs, isbnNo: e.target.value })
                        }
                      />
                    </Grid.Col>
                  </Grid>
                </details>
                {/* </Accordion.Item>
                </Accordion> */}
              </Grid.Col>
              <Grid.Col
                span={12}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  type="submit"
                  loading={isLoading}
                  leftIcon={<FloppyDisk size={16} />}
                >
                  Save
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>

        {/* <Paper mt="xl" p="md" withBorder>
          <Title order={3} mb="sm">
            Report:
          </Title>
          <div style={{ overflowX: "auto", maxHeight: "400px" }}>
            {tableData.length === 0 ? (
              <p>No Data Found</p>
            ) : (
              <Table striped highlightOnHover>
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Title of Paper</th>
                    <th>Authors</th>
                    <th>Details</th>
                    <th>Download</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.title}</td>
                      <td>{`${data.author}${
                        data.coAuthor ? ` , ${data.coAuthor}` : ""
                      }`}</td>
                      <td>{data.conferenceName}</td>
                      <td>
                        <Button variant="outline" size="xs">
                          Download
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="filled"
                          color="blue"
                          size="xs"
                          leftIcon={<Pencil size={14} />}
                          onClick={() => handleEdit(data)}
                          mr="xs"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="filled"
                          color="red"
                          size="xs"
                          leftIcon={<Trash size={14} />}
                          onClick={() => handleDelete(data.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Paper> */}

        <Paper mt="xl" p="md" withBorder>
          <Title order={3} mb="sm" style={{ color: "#2185d0" }}>
            Report:
          </Title>
          <ScrollArea>
            <Table
              striped
              highlightOnHover
              withBorder
              style={{ minWidth: "100%", borderCollapse: "collapse" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f8f9fa" }}>
                  {[
                    "Title Of Conference",
                    "Authors",
                    "Co-Authors",
                    "Conference Name",
                    "Year",
                    "Actions",
                  ].map((header, index) => (
                    <th
                      key={index}
                      style={{
                        textAlign: "center",
                        padding: "12px",
                        color: "#495057",
                        fontWeight: "600",
                        border: "1px solid #dee2e6",
                        backgroundColor: "#f1f3f5",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.length > 0 ? (
                  tableData.map((project) => (
                    <tr key={project.id} style={{ backgroundColor: "#fff" }}>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          border: "1px solid #dee2e6",
                        }}
                      >
                        {project.title_paper}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          border: "1px solid #dee2e6",
                        }}
                      >
                        {project.authors}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          border: "1px solid #dee2e6",
                        }}
                      >
                        {project.co_authors}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          border: "1px solid #dee2e6",
                        }}
                      >
                        {project.name}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          border: "1px solid #dee2e6",
                        }}
                      >
                        {project.year}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          border: "1px solid #dee2e6",
                        }}
                      >
                        <ActionIcon
                          color="blue"
                          onClick={() => handleEdit(project)}
                          variant="light"
                          style={{ marginRight: "8px" }}
                        >
                          <PencilSimple size={16} />
                        </ActionIcon>
                        <ActionIcon
                          color="red"
                          onClick={() => handleDelete(project.id)}
                          variant="light"
                        >
                          <Trash size={16} />
                        </ActionIcon>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      style={{
                        textAlign: "center",
                        padding: "12px",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      No Conference found.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </ScrollArea>
        </Paper>
      </Container>
    </MantineProvider>
  );
}
