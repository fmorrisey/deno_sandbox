import { serve } from "https://deno.land/std@0.149.0/http/server.ts";

serve(req => new Response("Hello World\n"));