/* eslint-disable func-names */
/* eslint-disable default-case */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try{
  const client = await clientPromise;
  const db = client.db("nft-playground");
  switch (req.method) {
    case "POST":
      const bodyObject = JSON.parse(req.body);
      const myPost = await db.collection("transactions").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      let leftDb;
      let rightDb;
      let page;
      let firstElement;
      let nextLeft;
      let nextRight;
      let rightBoolean;
      let leftBoolean
      console.log(req.query)
      let {timestamp}=req.query;
      timestamp=parseInt(timestamp,10)
      console.log(req.query.side)
      switch (req.query.side){
        case "left":
          leftDb = await db.collection("transactions").aggregate([
            {$match : {"timestamp":{"$gt" : timestamp}}},
            {$limit: 10},
            {$sort: {"timestamp": -1}}
          ]).toArray()
          firstElement = leftDb[0].timestamp;
          nextLeft = await db.collection("transactions").find({timestamp:{"$gt" : firstElement}}).limit(1).toArray();
          leftBoolean=(nextLeft.length!=0)
          rightBoolean=true
          res.json({ status: 200, data: leftDb,leftBoolean,rightBoolean})
          break;
        case "right":
          rightDb = await db.collection("transactions").aggregate([
            {$match : {"timestamp":{"$lt" : timestamp}}},
            {$sort: {"timestamp": -1}},
            {$limit: 10}
          ]).toArray()
          firstElement = rightDb[0].timestamp;
          nextRight = await db.collection("transactions").find({timestamp:{"$lt" : firstElement}}).sort({_id:-1}).limit(1).toArray();
          rightBoolean=(nextRight.length!=0)
          leftBoolean=true
          res.json({ status: 200, data: rightDb,leftBoolean,rightBoolean})
          break;
        case "initial":
          rightDb = await db.collection("transactions").find().sort({_id:-1});
          page = await rightDb.limit(10).toArray();
          firstElement = page[0].timestamp;
          nextRight = await db.collection("transactions").find({timestamp:{"$lt" : firstElement}}).sort({_id:-1}).limit(1).toArray();
          rightBoolean=(nextRight.length!=0)
          leftBoolean=false;
          res.json({ status: 200, data: page,leftBoolean,rightBoolean});
          break;
      }
      break;
    }
    
    }
    catch (error) {
      res.json(error);
      res.status(405).end();
    }
}