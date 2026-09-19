import express from "express";
import notFound from "./middleware/not-found.middleware";
import profileRouter from "./routes/profile.routes";
import skillRouter from "./routes/skill.routes";
import categoryRouter from "./routes/category.routes";

const app = express();
app.use(express.json());
app.use("/api/profile", profileRouter);
app.use("/api/category", categoryRouter);
app.use("/api/skill", skillRouter);
app.use("/not-found", notFound);

export default app;
