const encoder = new TextEncoder();

const greetText = encoder.encode(`Hello World \nMy nam is Forrest`);

await Deno.writeFile(`greet.txt`, greetText);