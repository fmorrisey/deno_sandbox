import { dayOfYear, weekOfYear } from "https://deno.land/std@0.151.0/datetime/mod";


console.log(dayOfYear(new Date("2022-08-04")));
console.log(weekOfYear(new Date("2022-08-04")));