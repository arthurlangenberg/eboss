export async function getCandidates() {
  const response = await fetch("http://localhost:3001/candidates");
  if (!response.ok) throw response;
  return response.json();
}
