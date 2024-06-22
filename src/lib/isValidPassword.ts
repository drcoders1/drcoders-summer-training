export async function isValidPassword(
  password: string,
  hashedPassword: string,
) {
  console.log(await hashThePassword(password));

  return (await hashThePassword(password)) === hashedPassword;
}

async function hashThePassword(password: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(password),
  );

  return Buffer.from(arrayBuffer).toString("base64");
}
