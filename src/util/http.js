export async function fetchLocation() {
  let url = "https://countriesnow.space/api/v0.1/countries/";

  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const location = await response.json();
  return location.data;
}
