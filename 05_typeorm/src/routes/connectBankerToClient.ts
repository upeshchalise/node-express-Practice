import express from "express";
const router = express.Router();

import { Client } from "../entities/client";
import { Banker } from "../entities/banker";

router.put("/api/banker/:bankerId/client/:clientId", async (req, res) => {
  const { bankerId, clientId } = req.params;

  const banker = await Banker.findOne({
    where: { id: parseInt(bankerId) },
  });

  const client = await Client.findOne({ where: { id: parseInt(clientId) } });

  if (!banker || !client) {
    return res.json({ msg: `client or banker not found` });
  }

  banker.clients = [client];
  banker.save();

  return res.json({ msg: "banker connected to client" });
});

export { router as connectBankerToClient };
