import express from "express";
import notFound from "./middleware/not-found.middleware";
import profileRouter from "./routes/profile.routes";
import skillRouter from "./routes/skill.routes";
import categoryRouter from "./routes/category.routes";
import projectRouter from "./routes/project.routes";
import experienceRouter from "./routes/experience.route";
import educationRouter from "./routes/education.routes";

const app = express();
app.use(express.json());
app.use("/api/profile", profileRouter);
app.use("/api/category", categoryRouter);
app.use("/api/skill", skillRouter);
app.use("/api/projects", projectRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/education", educationRouter);
app.use("/not-found", notFound);
export default app;
