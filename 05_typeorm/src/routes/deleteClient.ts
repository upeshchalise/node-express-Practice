import { Client } from "../entities/client";
import express from "express";
const router = express.Router();

router.delete("/api/deleteClient/:clientId", async (req, res) => {
  const { clientId } = req.params;

  const response = await Client.delete(clientId);
  return res.json(response);
});

export { router as deleteClient };
