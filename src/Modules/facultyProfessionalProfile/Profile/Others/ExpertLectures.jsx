import { useState, useEffect } from "react";
// import { Save } from "lucide-react";
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
  ActionIcon,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { FloppyDisk, PencilSimple, Trash } from "@phosphor-icons/react";
import {
  getTalkRoute,
  insertTalkRoute,
  deleteTalkRoute,
} from "../../../../routes/facultyProfessionalProfileRoutes";
import { useSelector } from "react-redux";

export default function ExpertLecturesForm() {
  const [inputs, setInputs] = useState({
    presentationType: "",
    place: "",
    date: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [Id, setId] = useState(0);
  const pfNo = useSelector((state) => state.pfNo.value);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(getTalkRoute, {
        params: { pfNo },
      });
      const projects = response.data;
      setTableData(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("user_id", 5318);
      formData.append("type", inputs.presentationType);
      formData.append("place", inputs.place);
      formData.append("title", inputs.title);
      formData.append("l_date", inputs.date);

      if (isEdit === false) {
        const res = await axios.post(insertTalkRoute, formData);
        console.log(res.data);
      } else {
        formData.append("lec_id", Id);
        const res = await axios.post(insertTalkRoute, formData);
        console.log(res.data);
        setEdit(false);
        setId(0);
      }

      fetchProjects(); // Refresh the list of achievements

      setInputs({
        presentationType: "",
        place: "",
        date: "",
        title: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (lecture) => {
    setInputs({
      presentationType: lecture.l_type,
      place: lecture.place,
      date: lecture.l_date ? new Date(lecture.l_date) : null,
      title: lecture.title,
    });

    setId(lecture.id);
    setEdit(true);
  };

  const handleDelete = async (talkId) => {
    if (window.confirm("Are you sure you want to delete this achievement?")) {
      try {
        await axios.post(deleteTalkRoute, new URLSearchParams({ pk: talkId })); // Adjust the delete URL as needed
        fetchProjects(); // Refresh the project list after deletion
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="2xl" mt="xl">
        <Paper
          shadow="xs"
          p="lg"
          withBorder
          style={{
            borderLeft: "8px solid #2185d0",
            backgroundColor: "#f9fafb",
          }} // Light background for contrast
        >
          <Title order={2} mb="lg" style={{ color: "#2185d0" }}>
            {" "}
            {/* Consistent color with border */}
            Add an Expert Lecture/Invited Talk
          </Title>
          <form onSubmit={handleSubmit}>
            <Grid gutter="md">
              <Grid.Col span={4}>
                <Select
                  label="Presentation Type"
                  placeholder="Select Presentation Type"
                  data={[
                    { value: "EL", label: "Expert Lecture (EL)" },
                    { value: "IT", label: "Invited Talk (IT)" },
                  ]}
                  value={inputs.presentationType}
                  onChange={(value) =>
                    setInputs({ ...inputs, presentationType: value || "" })
                  }
                  required
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput
                  label="Place"
                  placeholder="Place"
                  value={inputs.place}
                  onChange={(e) =>
                    setInputs({ ...inputs, place: e.target.value })
                  }
                  required
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <DateInput
                  label="Date"
                  placeholder="Select date"
                  value={inputs.date}
                  onChange={(value) => setInputs({ ...inputs, date: value })}
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
                  Save
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>

        {/* <Paper mt="xl" p="lg" withBorder style={{ backgroundColor: "#ffffff" }}>
          <Title order={3} mb="lg" style={{ color: "#2185d0" }}>
            Report:
          </Title>
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px" }}>Sr.</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Presented</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Title</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Place</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Date</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "10px" }}>
                    No Lectures/Talks Recorded Yet
                  </td>
                </tr>
              ) : (
                tableData.map((lecture) => (
                  <tr key={lecture.id}>
                    <td style={{ textAlign: "left", padding: "10px" }}>{lecture.id}</td>
                    <td style={{ textAlign: "left", padding: "10px" }}>{lecture.l_type}</td>
                    <td style={{ textAlign: "left", padding: "10px" }}>{lecture.title}</td>
                    <td style={{ textAlign: "left", padding: "10px" }}>{lecture.place}</td>
                    <td style={{ textAlign: "left", padding: "10px" }}>{lecture.l_date}</td>
                    <td style={{ textAlign: "left", padding: "10px" }}>
                      <ActionIcon
                        color="blue"
                        onClick={() => handleEdit(lecture)}
                      >
                        <PencilSimple size={16} />
                      </ActionIcon>
                      <ActionIcon
                        color="red"
                        onClick={() => handleDelete(lecture.id)}
                      >
                        <Trash size={16} />
                      </ActionIcon>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Paper> */}

        <Paper
          mt="xl"
          p="lg"
          withBorder
          shadow="sm"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title order={3} mb="lg" style={{ color: "#2185d0" }}>
            Report:
          </Title>
          <Table
            striped
            highlightOnHover
            withBorder
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                {["Sr.", "Presented", "Title", "Place", "Date", "Actions"].map(
                  (header, index) => (
                    <th
                      key={index}
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        border: "1px solid #dee2e6",
                        color: "#495057",
                        fontWeight: "600",
                      }}
                    >
                      {header}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      border: "1px solid #dee2e6",
                    }}
                  >
                    No Lectures/Talks Recorded Yet
                  </td>
                </tr>
              ) : (
                tableData.map((lecture, index) => (
                  <tr key={lecture.id} style={{ backgroundColor: "#fff" }}>
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
                      {lecture.l_type}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      {lecture.title}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      {lecture.place}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      {lecture.l_date}
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
                        onClick={() => handleEdit(lecture)}
                        variant="light"
                        style={{ marginRight: "8px" }}
                      >
                        <PencilSimple size={16} />
                      </ActionIcon>
                      <ActionIcon
                        color="red"
                        onClick={() => handleDelete(lecture.id)}
                        variant="light"
                      >
                        <Trash size={16} />
                      </ActionIcon>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Paper>
      </Container>
    </MantineProvider>
  );
}