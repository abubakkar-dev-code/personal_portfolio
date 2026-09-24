import api from "../api/api";

const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export default getProjects;
