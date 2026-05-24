import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import sessionRoutes from "./routes/sessions";
import supportRoutes from "./routes/support";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/sessions", sessionRoutes);
app.use("/api/support", supportRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
