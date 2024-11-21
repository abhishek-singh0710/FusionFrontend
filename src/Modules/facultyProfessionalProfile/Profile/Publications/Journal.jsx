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
  ActionIcon,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { FloppyDisk, PencilSimple, Trash } from "@phosphor-icons/react";
import { useSelector } from "react-redux";

export default function Journal() {
  const [inputs, setInputs] = useState({
    authors: "",
    co_authors: "",
    journalName: "",
    journalFile: null,
    year: "",
    title_paper: "",
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

  const pfNo = useSelector((state) => state.pfNo.value);


  // Fetch data using useEffect from the API
  useEffect(() => {
    setTimeout(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/eis/api/fetch_journals", {
          params: { pfNo },
        });
        setTableData(res.data);
        console.log("data");
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },5000);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!editingId) {
      const formData = new FormData();
      formData.append("user_id", 5318); // Adjust this as needed
      formData.append("authors", inputs.authors);
      formData.append("title_paper", inputs.title_paper);
      formData.append("co_authors", inputs.co_authors);
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
      console.log(formData);
      const res = await axios.post("http://127.0.0.1:8000/eis/api/journal/", formData);
      // console.log(res.data);
      setTableData([...tableData, res.data]); // Add new data to the table
      }
      else {
        const formData = new FormData();
      formData.append("user_id", 5318); // Adjust this as needed
      formData.append("authors", inputs.authors);
      formData.append("title_paper", inputs.title_paper);
      formData.append("co_authors", inputs.co_authors);
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
      formData.append("journalpk", editingId);
      const res = await axios.post("http://127.0.0.1:8000/eis/api/journal/edit", formData);
      console.log(res.data);
      setTableData([...tableData, res.data]); // Add 
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await axios.post("http://127.0.0.1:8000/eis/api/emp_journal_delete");
      setTableData(tableData.filter((item) => item.id !== id)); // Remove deleted data from the table
    } catch (error) {
      console.error(error);
    }
  };

  // Handle edit action
  const handleEdit = (project) => {
    setInputs({ 
      authors: project.authors,
      co_authors: project.co_authors,
      journalName: project.name,
      year: project.year,
      title_paper: project.title_paper, 
      volume: project.year,
      pageNo: project.page_no,
      paperRefNo: project.ref,
      dateSubmission: project.dos,
      datePublication: project.dop,
      status: project.status,
      category: project.is_sci?"SCI":"SCIE",
    });
    setEditingId(project.id);
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put("/api/update_journal/${id}", inputs);
      console.log(res.data);
      setTableData(
        tableData.map((item) => (item.id === id ? res.data : item))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const years = Array.from({ length: 31 }, (_, i) => (2000 + i).toString());

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="2xl" mt="xl">
        <Paper
          shadow="xs"
          p="md"
          withBorder
          style={{ borderLeft: "8px solid #2185d0", backgroundColor: "#f9fafb" }} // Light background for contrast
        >
          <Title order={2} mb="sm" style={{ color: "#2185d0" }}>
            {inputs.id ? "Edit Journal" : "Add a Journal"}
          </Title>
          <form onSubmit={inputs.id ? () => handleUpdate(inputs.id) : handleSubmit}>
            <Grid gutter="md">
              <Grid.Col span={6}>
                <TextInput
                  required
                  label="Author"
                  placeholder="Author"
                  value={inputs.authors}
                  onChange={(e) => setInputs({ ...inputs, authors: e.target.value })}
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label="Co-author(s)"
                  placeholder="Co-author(s)"
                  value={inputs.co_authors}
                  onChange={(e) => setInputs({ ...inputs, co_authors: e.target.value })}
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label="Journal Name"
                  placeholder="Journal Name"
                  value={inputs.journalName}
                  onChange={(e) => setInputs({ ...inputs, journalName: e.target.value })}
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <TextInput
                  type="file"
                  label="Journal File"
                  placeholder="Choose File"
                  onChange={(e) => setInputs({ ...inputs, journalFile: e.target.files[0] })}
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <Select
                  label="Year"
                  placeholder="Select year"
                  data={years}
                  value={inputs.year}
                  onChange={(value) => setInputs({ ...inputs, year: value || "" })}
                  required
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Title"
                  placeholder="Journal Title"
                  value={inputs.title_paper}
                  onChange={(e) => setInputs({ ...inputs, title_paper: e.target.value })}
                  style={{ padding: "10px" }} // Consistent padding
                />
              </Grid.Col>
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
                        onChange={(e) => setInputs({ ...inputs, volume: e.target.value })}
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Page No."
                        placeholder="Page No."
                        value={inputs.pageNo}
                        onChange={(e) => setInputs({ ...inputs, pageNo: e.target.value })}
                        style={{ padding: "10px" }} // Consistent padding
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Paper Reference No."
                        placeholder="Paper Reference No."
                        value={inputs.paperRefNo}
                        onChange={(e) => setInputs({ ...inputs, paperRefNo: e.target.value })}
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
                        onChange={(e) => setInputs({ ...inputs, doi: e.target.value })}
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
              <Grid.Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
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
  
        <Paper
          mt="xl"
          p="lg"
          withBorder
          shadow="sm"
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title order={3} mb="lg" style={{ color: "#2185d0" }}>
            Journal Report:
          </Title>
          <Table
            striped
            highlightOnHover
            withBorder
            style={{ minWidth: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                {["Sr.", "Title of Paper", "Author", "Co-Author", "Journal Name", "Action"].map(
                  (header, index) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? (
                tableData.map((project, index) => (
                  <tr key={project.id} style={{ backgroundColor: "#fff" }}>
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      {index + 1}
                    </td>
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
                      {`${project.authors}`}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      {`${project.co_authors}`}
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
                  <td colSpan="5" style={{ textAlign: "center", padding: "12px" }}>
                    No Journal Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Paper>
      </Container>
    </MantineProvider>
  );
  
}