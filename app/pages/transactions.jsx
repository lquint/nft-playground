import React from 'react';


const Transactions = function transactions() {
  
  async function getDB(side,timestamp) {
    let res
    if(side==="initial"){
      const url=`${process.env.NEXT_PUBLIC_BASE_URL}/api/transactions?`
      const params=new URLSearchParams({
        "side":side,
        "timestamp":timestamp,
    })
      res= await fetch(url+params, {
        method: "GET",
      });
  } else{
    const url=`${process.env.NEXT_PUBLIC_BASE_URL}/api/transactions?`
    const params=new URLSearchParams({
      side,
      timestamp,
  })
    res= await fetch(url+params, {
      method: "GET",
    });
  }
    res = await res.json();
    return res
  };

  React.useEffect(() => {
      async function displayTransactions(side,timestamp){
        const res= await getDB(side,timestamp)
        let html=`
        <table class="w-full table-fixed mx-auto bg-slate-200">
        <thead class="border-b border-gray-400">
          <tr>
            <th class="w-1/12">Method</th>
            <th class="w-1/5">Txn Hash</th>
            <th class="w-1/5">From</th>
            <th class="w-1/5">To</th>
            <th class="w-1/6">Date (UTC)</th>
          </tr>
        </thead>
        <tbody>
        `
        const db=await res.data
        const firstTimestamp=db[0].timestamp;
        const lastTimestamp=db[db.length-1].timestamp;
        for(let i = 0; i < db.length; i += 1) {
            html += `
            <tr>
              <td class="text-center text-sm">${db[i].method}</td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].tx}</p></td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].from}</p></td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].to}</p></td>
              <td class="text-center text-sm">${new Date(db[i].timestamp).toISOString()}</td>
            </tr>
            `

        }
        html+=`
        </tbody>
        </table>
        <div className='flex pt-2'><button id="leftArrow" className='mx-auto'><</button><button  id="rightArrow" className='mx-auto'>></button></div>
        `
        const transactionList = document.getElementById("displayDB")
        transactionList.innerHTML=html;
        const leftArrow=document.getElementById("leftArrow");
        const rightArrow=document.getElementById("rightArrow")
        leftArrow.addEventListener("click",()=>{
          displayTransactions("left",firstTimestamp)
        })
        rightArrow.addEventListener("click",()=>{
          displayTransactions("right",lastTimestamp)
        })
        rightArrow.disabled=!res.rightBoolean
        leftArrow.disabled=!res.leftBoolean
    }
    displayTransactions("initial","")
  });

  return (
    <div className='mx-auto page-table'>
      <h1 className='text-2xl mt-7'>Transactions</h1>
      <p className='pb-5 mt-5 text-lg'>
        Transactions made from this web app will be listed right below
      </p>
      <div id="displayDB"/>
      
    </div>

  );
};

export default Transactions;