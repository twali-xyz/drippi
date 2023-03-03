export default async function handleJoinWaitlist(email: string) {
  const response = await fetch("/api/postgres.api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: email }),
  });
  return await response;
}
