import exp from "express";
import cors from "cors";
import "dotenv/config";
import expenceRouter from "./routers/expense.route";
import settingRouter from "./routers/setting.router";
const app = exp();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(exp.json());

app.use("/api/expence",expenceRouter)

app.use("/api/settings",settingRouter)

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});