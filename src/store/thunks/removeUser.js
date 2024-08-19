import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  try {
    const response = await axios.delete(
      `http://localhost:3005/users/${user.id}`
    );
    console.log(response.data);
    return user;
  } catch (error) {
    console.error("Failed to delete user:", error);
    return isRejectedWithValue(error.response.data || "Failed to delete user");
  }
});

export { removeUser };
