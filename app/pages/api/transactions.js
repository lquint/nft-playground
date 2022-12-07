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
      // const objectId= new ObjectId('6387c55043cae00008ce57d7')
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
          console.log(leftDb)
          firstElement = leftDb[0].timestamp;
          nextLeft = await db.collection("transactions").find({timestamp:{"$gt" : firstElement}}).limit(1).toArray();
          leftBoolean=(nextLeft.length!=0)
          console.log("here1")
          rightBoolean=true
          res.json({ status: 200, data: leftDb,leftBoolean,rightBoolean})
          break;
        case "right":
          console.log(timestamp)
          // rightDb = await db.collection("transactions").find({timestamp:{"$lt" : timestamp}}).sort({_id:-1});
          // page = await rightDb.limit(10).toArray();
          // console.log(page)
          rightDb = await db.collection("transactions").aggregate([
            {$match : {"timestamp":{"$lt" : timestamp}}},
            {$sort: {"timestamp": -1}},
            {$limit: 10}
        ]).toArray()
          firstElement = rightDb[0].timestamp;
          console.log(rightDb)
          nextRight = await db.collection("transactions").find({timestamp:{"$lt" : firstElement}}).sort({_id:-1}).limit(1).toArray();
          console.log(nextRight)
          rightBoolean=(nextRight.length!=0)
          leftBoolean=true
          console.log("here")
          res.json({ status: 200, data: rightDb,leftBoolean,rightBoolean})
          break;
        case "initial":
          /*
          await db.collection("transactions").deleteMany({tx:"01234"})
          const delayInMilliseconds = 1000; // 1 second
          for(let j=0;j<25;j +=1){
            
            // eslint-disable-next-line prefer-arrow-callback
            setTimeout(async function(index) {
              await db.collection("transactions").insertOne({method:`Test${index}`,tx:"01234",from:"-",to:"-",timestamp:new Date().valueOf()})
              console.log(j)
              // your code to be executed after 1 second
            }, j*delayInMilliseconds,j);
            
          }
          */
          rightDb = await db.collection("transactions").find().sort({_id:-1});
          console.log("initiaaaaal ?")
          page = await rightDb.limit(10).toArray();
          firstElement = page[0].timestamp;
          nextRight = await db.collection("transactions").find({timestamp:{"$lt" : firstElement}}).sort({_id:-1}).limit(1).toArray();
          rightBoolean=(nextRight.length!=0)
          leftBoolean=false;
          console.log(nextRight)
          console.log(nextRight.length)
                    
          res.json({ status: 200, data: page,leftBoolean,rightBoolean});
          break;
      }
      /*
      const allPosts = await db.collection("transactions").find({}).sort({_id:-1}).limit(1).toArray();
      const nextDoc = await db.collection("transactions").find().sort({_id:-1}).hasNext()
      const previousDoc = await db.collection("transactions").find().sort({_id:1}).hasNext()
      res.json({ status: 200, data: allPosts,previousDoc,nextDoc});
      */
      break;
    }
    
    }
    catch (error) {
      res.json(error);
      res.status(405).end();
    }
}