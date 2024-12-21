// import ky from "ky";
import { api } from "../api";

export const loginUser = async (loginData) => {
  // console.log(loginData);
  const response = await fetch("http://localhost:3001/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

  console.log("LOGIN ACTION", response.json());
};

export const getMovies = async () => {
  try {
    const response = await api.get("movies", {
      cache: "no-store",
    });

    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "Something went wrong!" };
    }
  } catch (error) {
    if (error) {
      // Handle HTTP errors specifically
      const status = error?.response?.status; // HTTP status code (e.g., 404, 500)
      const responseBody = await error?.response?.json(); // Parse the response body if possible

      console.log("HTTP Error:", status, responseBody);
    } else {
      // Handle non-HTTP errors (e.g., network issues)
      console.log("Unknown error:", error);
    }
    return undefined;
  }
};
