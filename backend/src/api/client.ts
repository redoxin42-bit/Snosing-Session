const API_URL = "http://localhost:5000/api";

export async function uploadSessions(files: FileList) {
  const formData = new FormData();

  Array.from(files).forEach((file) => {
    formData.append("sessions", file);
  });

  const response = await fetch(`${API_URL}/sessions/upload`, {
    method: "POST",
    body: formData
  });

  return response.json();
}

export async function generatePrompt(data: {
  phone: string;
  telegramId: string;
  username: string;
}) {
  const response = await fetch(`${API_URL}/support/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
  });

  return response.json();
}
