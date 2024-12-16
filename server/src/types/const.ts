import { constSchema } from "../models/constModel";

export type Const = ReturnType<()=> typeof constSchema>
