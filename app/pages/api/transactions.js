/* eslint-disable default-case */
/* eslint-disable no-case-declarations */

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nft-playground");
  switch (req.method) {
    case "POST":
      const bodyObject = JSON.parse(req.body);
      const myPost = await db.collection("transactions").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("transactions").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}