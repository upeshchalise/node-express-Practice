import express, { Request, Response } from "express";
import { Client } from "../entities/client";
import { Transaction, TransactionType } from "../entities/transaction";

const router = express.Router();

router.post(
  "/api/client/:clientId/transaction",
  async (req: Request, res: Response) => {
    const { clientId } = req.params;

    const { amount, type } = req.body;

    const client = await Client.findOne({
      where: {
        id: parseInt(clientId),
      },
    });

    if (!client) {
      return res.json({ msg: "client not found" });
    }

    const transaction = Transaction.create({
      amount,
      type,
      client,
    });

    await transaction.save();

    if (type === TransactionType.DEPOSIT) {
      client.balance = Number(client.balance) + amount;
    } else if (type === TransactionType.WITHDRAW) {
      client.balance = Number(client.balance) - amount;
    }

    await client.save();

    return res.json({ msg: "transaction successfull" });
  }
);

export { router as createTransaction };
