import { Elysia} from "elysia";
import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import betterAuthView from "./utils/auth/auth-view";

//auth using betterAuth with ELysia, read upapp.listen(process.env.PORT || 8000);
const app = new Elysia()
  .use(swagger())
  .use(cors())
  .all("/api/auth/*", betterAuthView);

app.get("/", () => "Hello");

app.listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
