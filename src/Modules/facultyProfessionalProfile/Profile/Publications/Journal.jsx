// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   MantineProvider,
//   Container,
//   Title,
//   Paper,
//   Grid,
//   TextInput,
//   Select,
//   Button,
//   Table,
//   ActionIcon,
// } from "@mantine/core";
// import { DatePickerInput } from "@mantine/dates";
// import { FloppyDisk, PencilSimple, Trash } from "@phosphor-icons/react";
// import {
//   getFVisitsRoute
// } from "../../../../routes/facultyProfessionalProfileRoutes";

// export default function Journal() {
//   const [inputs, setInputs] = useState({
//     author: "",
//     coAuthors: "",
//     journalName: "",
//     journalFile: null,
//     year: "",
//     title: "",
//     volume: "",
//     pageNo: "",
//     paperRefNo: "",
//     dateSubmission: "",
//     datePublication: "",
//     status: "",
//     category: "",
//     doi: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [tableData, setTableData] = useState([]);
//   const [editingId, setEditingId] = useState(null); // For editing

//   // Fetch data using useEffect from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://127.0.0.1:8000/eis/api/fetch_journal");
//         setTableData(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!editingId) {
// const formData = new FormData();
// formData.append("user_id", 5318); // Adjust this as needed
// formData.append("authors", inputs.author);
// formData.append("title", inputs.title);
// formData.append("co_authors", inputs.coAuthors);
// formData.append("name", inputs.journalName);
// formData.append("book_title", inputs.title);
// formData.append("status", inputs.status);
// formData.append("ref", inputs.paperRefNo);
// formData.append("sci", inputs.category);
// formData.append("volume", inputs.volume);
// formData.append("page", inputs.pageNo);
// formData.append("year", inputs.year);
// formData.append("doi", inputs.doi);
// formData.append("dos", inputs.dateSubmission);
// formData.append("dop", inputs.datePublication);
// formData.append("doc_id", inputs.id);
//         const res = await axios.post(
//           "http://127.0.0.1:8000/eis/api/journal/",
//           formData,
//         );
//         console.log(res.data);
//         setTableData([...tableData, res.data]); // Add new data to the table
//       } else {
//         const formData = new FormData();
//         formData.append("user_id", 5318); // Adjust this as needed
//         formData.append("authors", inputs.author);
//         formData.append("title", inputs.title);
//         formData.append("co_authors", inputs.coAuthors);
//         formData.append("name", inputs.journalName);
//         formData.append("book_title", inputs.title);
//         formData.append("status", inputs.status);
//         formData.append("ref", inputs.paperRefNo);
//         formData.append("sci", inputs.category);
//         formData.append("volume", inputs.volume);
//         formData.append("page", inputs.pageNo);
//         formData.append("year", inputs.year);
//         formData.append("doi", inputs.doi);
//         formData.append("dos", inputs.dateSubmission);
//         formData.append("dop", inputs.datePublication);
//         formData.append("doc_id", inputs.id);
//         formData.append("journalpk", editingId);
//         const res = await axios.post(
//           "http://127.0.0.1:8000/eis/api/journal/edit",
//           formData,
//         );
//         console.log(res.data);
//         setTableData([...tableData, res.data]); // Add
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle delete action
//   const handleDelete = async (id) => {
//     try {
//       await axios.post("http://127.0.0.1:8000/eis/api/emp_research_papersDelete/");
//       setTableData(tableData.filter((item) => item.id !== id)); // Remove deleted data from the table
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Handle edit action
//   const handleEdit = (project) => {
//     setInputs({
//       author: project.authors,
//       coAuthors: project.co_authors,
//       journalName: project.name,
//       year: project.year,
//       title: project.title,
//       volume: project.year,
//       pageNo: project.page_no,
//       paperRefNo: project.ref,
//       dateSubmission: project.dos,
//       datePublication: project.dop,
//       status: project.status,
//       category: project.is_sci ? "SCI" : "SCIE",
//     });
//     setEditingId(project.id);
//   };

//   const years = Array.from({ length: 31 }, (_, i) => (2000 + i).toString());

//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Container size="2xl" mt="xl">
//         <Paper
//           shadow="xs"
//           p="md"
//           withBorder
//           style={{
//             borderLeft: "8px solid #2185d0",
//             backgroundColor: "#f9fafb",
//           }} // Light background for contrast
//         >
//           <Title order={2} mb="sm" style={{ color: "#2185d0" }}>
//             {inputs.id ? "Edit Journal" : "Add a Journal"}
//           </Title>
//           <form
//             onSubmit={inputs.id ? () => handleUpdate(inputs.id) : handleSubmit}
//           >
//             <Grid gutter="md">
//               <Grid.Col span={6}>
//                 <TextInput
//                   required
//                   label="Author"
//                   placeholder="Author"
//                   value={inputs.author}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, author: e.target.value })
//                   }
//                   style={{ padding: "10px" }} // Consistent padding
//                 />
//               </Grid.Col>
//               <Grid.Col span={6}>
//                 <TextInput
//                   required
//                   label="Co-author(s)"
//                   placeholder="Co-author(s)"
//                   value={inputs.coAuthors}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, coAuthors: e.target.value })
//                   }
//                   style={{ padding: "10px" }} // Consistent padding
//                 />
//               </Grid.Col>
//               <Grid.Col span={6}>
//                 <TextInput
//                   required
//                   label="Journal Name"
//                   placeholder="Journal Name"
//                   value={inputs.journalName}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, journalName: e.target.value })
//                   }
//                   style={{ padding: "10px" }} // Consistent padding
//                 />
//               </Grid.Col>
//               <Grid.Col span={3}>
//                 <TextInput
//                   type="file"
//                   label="Journal File"
//                   placeholder="Choose File"
//                   onChange={(e) =>
//                     setInputs({ ...inputs, journalFile: e.target.files[0] })
//                   }
//                   style={{ padding: "10px" }} // Consistent padding
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
//                   style={{ padding: "10px" }} // Consistent padding
//                 />
//               </Grid.Col>
//               <Grid.Col span={12}>
//                 <TextInput
//                   required
//                   label="Title"
//                   placeholder="Journal Title"
//                   value={inputs.title}
//                   onChange={(e) =>
//                     setInputs({ ...inputs, title: e.target.value })
//                   }
//                   style={{ padding: "10px" }} // Consistent padding
//                 />
//               </Grid.Col>
//               {/* <Grid.Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
//                 <Button
//                   type="submit"
//                   mt="md"
//                   loading={isLoading}
//                   leftIcon={<FloppyDisk size={16} />}
//                   style={{ backgroundColor: "#2185d0", color: "#fff" }} // Custom button styling
//                 >
//                   {inputs.id ? "Update" : "Save"}
//                 </Button>
//               </Grid.Col> */}
//               <Grid.Col span={12}>
//                 <details>
//                   <summary style={{ cursor: "pointer", color: "#2185d0" }}>
//                     Optional Journal Details
//                   </summary>
//                   <Grid gutter="md">
//                     <Grid.Col span={6}>
//                       <TextInput
//                         label="Volume No./Issue No."
//                         placeholder="Volume No./Issue No."
//                         value={inputs.volume}
//                         onChange={(e) =>
//                           setInputs({ ...inputs, volume: e.target.value })
//                         }
//                         style={{ padding: "10px" }} // Consistent padding
//                       />
//                     </Grid.Col>
//                     <Grid.Col span={6}>
//                       <TextInput
//                         label="Page No."
//                         placeholder="Page No."
//                         value={inputs.pageNo}
//                         onChange={(e) =>
//                           setInputs({ ...inputs, pageNo: e.target.value })
//                         }
//                         style={{ padding: "10px" }} // Consistent padding
//                       />
//                     </Grid.Col>
//                     <Grid.Col span={6}>
//                       <TextInput
//                         label="Paper Reference No."
//                         placeholder="Paper Reference No."
//                         value={inputs.paperRefNo}
//                         onChange={(e) =>
//                           setInputs({ ...inputs, paperRefNo: e.target.value })
//                         }
//                         style={{ padding: "10px" }} // Consistent padding
//                       />
//                     </Grid.Col>
//                     <Grid.Col span={6}>
//                       <DatePickerInput
//                         label="Date Of Submission"
//                         placeholder="Select date"
//                         value={inputs.dateSubmission}
//                         onChange={(date) =>
//                           setInputs({ ...inputs, dateSubmission: date })
//                         }
//                         style={{ padding: "10px" }} // Consistent padding
//                       />
//                     </Grid.Col>
//                     <Grid.Col span={6}>
//                       <DatePickerInput
//                         label="Date of Publication"
//                         placeholder="Select date"
//                         value={inputs.datePublication}
//                         onChange={(date) =>
//                           setInputs({ ...inputs, datePublication: date })
//                         }
//                         style={{ padding: "10px" }} // Consistent padding
//                       />
//                     </Grid.Col>
//                     <Grid.Col span={6}>
//                       <TextInput
//                         label="DOI"
//                         placeholder="DOI"
//                         value={inputs.doi}
//                         onChange={(e) =>
//                           setInputs({ ...inputs, doi: e.target.value })
//                         }
//                         style={{ padding: "10px" }} // Consistent padding
//                       />
//                     </Grid.Col>
//                     <Grid.Col span={6}>
//                       <Select
//                         label="SCI/SCIE"
//                         placeholder="Select category"
//                         data={[
//                           { value: "sci", label: "SCI" },
//                           { value: "scie", label: "SCIE" },
//                         ]}
//                         value={inputs.category}
//                         onChange={(value) =>
//                           setInputs({ ...inputs, category: value || "" })
//                         }
//                         style={{ padding: "10px" }} // Consistent padding
//                       />
//                     </Grid.Col>
//                   </Grid>
//                 </details>
//               </Grid.Col>
//               <Grid.Col
//                 span={12}
//                 style={{ display: "flex", justifyContent: "flex-end" }}
//               >
//                 <Button
//                   type="submit"
//                   mt="md"
//                   loading={isLoading}
//                   leftIcon={<FloppyDisk size={16} />}
//                   style={{ backgroundColor: "#2185d0", color: "#fff" }} // Custom button styling
//                 >
//                   {inputs.id ? "Update" : "Save"}
//                 </Button>
//               </Grid.Col>
//             </Grid>
//           </form>
//         </Paper>

//         <Paper mt="xl" p="md" withBorder>
//           <Title order={3} mb="sm" style={{ color: "#2185d0" }}>
//             Journal Report:
//           </Title>
//           {tableData.length === 0 ? (
//             <p>No Journals Recorded Yet</p>
//           ) : (
//             <Table striped highlightOnHover>
//               <thead>
//                 <tr>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "10px",
//                       color: "#2185d0",
//                     }}
//                   >
//                     Sr.
//                   </th>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "10px",
//                       color: "#2185d0",
//                     }}
//                   >
//                     Title of Paper
//                   </th>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "10px",
//                       color: "#2185d0",
//                     }}
//                   >
//                     Authors
//                   </th>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "10px",
//                       color: "#2185d0",
//                     }}
//                   >
//                     Journal Name
//                   </th>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "10px",
//                       color: "#2185d0",
//                     }}
//                   >
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tableData.map((project, index) => (
//                   <tr key={project.id}>
//                     <td style={{ textAlign: "left", padding: "10px" }}>
//                       {index + 1}
//                     </td>
//                     <td style={{ textAlign: "left", padding: "10px" }}>
//                       {project.title}
//                     </td>
//                     <td
//                       style={{ textAlign: "left", padding: "10px" }}
//                     >{`${project.authors}, ${project.coAuthors}`}</td>
//                     <td style={{ textAlign: "left", padding: "10px" }}>
//                       {project.journalName}
//                     </td>
//                     <td style={{ textAlign: "left", padding: "10px" }}>
//                       <Button
//                         variant="subtle"
//                         color="blue"
//                         leftIcon={<PencilSimple size={16} />}
//                         onClick={() => handleEdit(project)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="subtle"
//                         color="red"
//                         leftIcon={<Trash size={16} />}
//                         onClick={() => handleDelete(project.id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Paper>
//       </Container>
//     </MantineProvider>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import {
  MantineProvider,
  Container,
  Title,
  Paper,
  Grid,
  TextInput,
  Select,
  Button,
  Table,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { FloppyDisk, PencilSimple, Trash } from "@phosphor-icons/react";

export default function Journal() {
  const [inputs, setInputs] = useState({
    author: "",
    coAuthors: "",
    journalName: "",
    journalFile: null,
    year: "",
    title: "",
    volume: "",
    pageNo: "",
    paperRefNo: "",
    dateSubmission: "",
    datePublication: "",
    status: "",
    category: "",
    doi: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null); // For editing

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/eis/api/fetch_journal",
      );
      setTableData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch data using useEffect from the API
  useEffect(() => {
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("user_id", 5318); // Adjust this as needed
      formData.append("authors", inputs.author);
      formData.append("title", inputs.title);
      formData.append("co_authors", inputs.coAuthors);
      formData.append("name", inputs.journalName);
      formData.append("book_title", inputs.title);
      formData.append("status", inputs.status);
      formData.append("ref", inputs.paperRefNo);
      formData.append("sci", inputs.category);
      formData.append("volume", inputs.volume);
      formData.append("page", inputs.pageNo);
      formData.append("year", inputs.year);
      formData.append("doi", inputs.doi);
      formData.append("dos", inputs.dateSubmission);
      formData.append("dop", inputs.datePublication);
      formData.append("doc_id", inputs.id);
      if (editingId) {
        // Update the book
        formData.append("journalpk", editingId);
        await axios.post(
          "http://127.0.0.1:8000/eis/api/journal/edit",
          formData,
        );
      } else {
        // Create a new book
        await axios.post("http://127.0.0.1:8000/eis/api/journal/", formData);
      }
      setInputs({
        author: "",
        coAuthors: "",
        journalName: "",
        journalFile: null,
        year: "",
        title: "",
        volume: "",
        pageNo: "",
        paperRefNo: "",
        dateSubmission: "",
        datePublication: "",
        status: "",
        category: "",
        doi: "",
      });
      setEditingId(null); // Reset editing ID
      // Refresh the list of achievements
      const res = await axios.get(
        "http://127.0.0.1:8000/eis/api/fetch_journal",
      );
      setTableData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete action
  const handleDelete = async (achievement) => {
    if (window.confirm("Are you sure you want to delete this Book?")) {
      try {
        // console.log(achievement)
        await axios.post(
          "http://127.0.0.1:8000/eis/api/emp_research_papersDelete/",
          new URLSearchParams({ pk: achievement }),
        ); // Adjust the delete URL as needed
        fetchData();
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  // Handle edit action
  const handleEdit = (project) => {
    setInputs({
      author: project.authors,
      coAuthors: project.co_authors,
      journalName: project.name,
      year: project.year,
      title: project.title,
      volume: project.year,
      pageNo: project.page_no,
      paperRefNo: project.ref,
      dateSubmission: project.dos,
      datePublication: project.dop,
      status: project.status,
      category: project.is_sci ? "SCI" : "SCIE",
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
          }} // Light background for contrast
        >
          <Title order={2} mb="sm" style={{ color: "#2185d0" }}>
            {inputs.id ? "Edit Journal" : "Add a Journal"}
          </Title>
          <form onSubmit={handleSubmit}>
            <Grid gutter="md">
              <Grid.Col span={6}>
                <TextInput
                  required
                  label="Author"
                  placeholder="Author"
                  value={inputs.author}
                  onChange={(e) =>
                    setInputs({ ...inputs, author: e.target.value })
                  }
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label="Co-author(s)"
                  placeholder="Co-author(s)"
                  value={inputs.coAuthors}
                  onChange={(e) =>
                    setInputs({ ...inputs, coAuthors: e.target.value })
                  }
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label="Journal Name"
                  placeholder="Journal Name"
                  value={inputs.journalName}
                  onChange={(e) =>
                    setInputs({ ...inputs, journalName: e.target.value })
                  }
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <TextInput
                  type="file"
                  label="Journal File"
                  placeholder="Choose File"
                  onChange={(e) =>
                    setInputs({ ...inputs, journalFile: e.target.files[0] })
                  }
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <Select
                  label="Year"
                  placeholder="Select year"
                  data={years}
                  value={inputs.year}
                  onChange={(value) =>
                    setInputs({ ...inputs, year: value || "" })
                  }
                  required
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Title"
                  placeholder="Journal Title"
                  value={inputs.title}
                  onChange={(e) =>
                    setInputs({ ...inputs, title: e.target.value })
                  }
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              {/* <Grid.Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
                  mt="md"
                  loading={isLoading}
                  leftIcon={<FloppyDisk size={16} />}
                  style={{ backgroundColor: "#2185d0", color: "#fff" }} // Custom button styling
                >
                  {inputs.id ? "Update" : "Save"}
                </Button>
              </Grid.Col> */}
              <Grid.Col span={12}>
                <details>
                  <summary style={{ cursor: "pointer", color: "#2185d0" }}>
                    Optional Journal Details
                  </summary>
                  <Grid gutter="md">
                    <Grid.Col span={6}>
                      <TextInput
                        label="Volume No./Issue No."
                        placeholder="Volume No./Issue No."
                        value={inputs.volume}
                        onChange={(e) =>
                          setInputs({ ...inputs, volume: e.target.value })
                        }
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Page No."
                        placeholder="Page No."
                        value={inputs.pageNo}
                        onChange={(e) =>
                          setInputs({ ...inputs, pageNo: e.target.value })
                        }
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Paper Reference No."
                        placeholder="Paper Reference No."
                        value={inputs.paperRefNo}
                        onChange={(e) =>
                          setInputs({ ...inputs, paperRefNo: e.target.value })
                        }
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <DatePickerInput
                        label="Date Of Submission"
                        placeholder="Select date"
                        value={inputs.dateSubmission}
                        onChange={(date) =>
                          setInputs({ ...inputs, dateSubmission: date })
                        }
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <DatePickerInput
                        label="Date of Publication"
                        placeholder="Select date"
                        value={inputs.datePublication}
                        onChange={(date) =>
                          setInputs({ ...inputs, datePublication: date })
                        }
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="DOI"
                        placeholder="DOI"
                        value={inputs.doi}
                        onChange={(e) =>
                          setInputs({ ...inputs, doi: e.target.value })
                        }
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Select
                        label="SCI/SCIE"
                        placeholder="Select category"
                        data={[
                          { value: "sci", label: "SCI" },
                          { value: "scie", label: "SCIE" },
                        ]}
                        value={inputs.category}
                        onChange={(value) =>
                          setInputs({ ...inputs, category: value || "" })
                        }
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                  </Grid>
                </details>
              </Grid.Col>
              <Grid.Col
                span={12}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  type="submit"
                  mt="md"
                  loading={isLoading}
                  leftIcon={<FloppyDisk size={16} />}
                  style={{ backgroundColor: "#2185d0", color: "#fff" }} // Custom button styling
                >
                  {inputs.id ? "Update" : "Save"}
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>

        <Paper mt="xl" p="md" withBorder>
          <Title order={3} mb="sm" style={{ color: "#2185d0" }}>
            Journal Report:
          </Title>
          {tableData.length === 0 ? (
            <p>No Journals Recorded Yet</p>
          ) : (
            <Table striped highlightOnHover>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      color: "#2185d0",
                    }}
                  >
                    Sr.
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      color: "#2185d0",
                    }}
                  >
                    Title of Paper
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      color: "#2185d0",
                    }}
                  >
                    Authors
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      color: "#2185d0",
                    }}
                  >
                    Journal Name
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      color: "#2185d0",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((project, index) => (
                  <tr key={project.id}>
                    <td style={{ textAlign: "left", padding: "10px" }}>
                      {index + 1}
                    </td>
                    <td style={{ textAlign: "left", padding: "10px" }}>
                      {project.title}
                    </td>
                    <td
                      style={{ textAlign: "left", padding: "10px" }}
                    >{`${project.authors}, ${project.coAuthors}`}</td>
                    <td style={{ textAlign: "left", padding: "10px" }}>
                      {project.journalName}
                    </td>
                    <td style={{ textAlign: "left", padding: "10px" }}>
                      <Button
                        variant="subtle"
                        color="blue"
                        leftIcon={<PencilSimple size={16} />}
                        onClick={() => handleEdit(project)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="subtle"
                        color="red"
                        leftIcon={<Trash size={16} />}
                        onClick={() => handleDelete(project.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Paper>
      </Container>
    </MantineProvider>
  );
}
