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
        <table class="w-full table-fixed mx-auto">
        <thead class="border-b border-[#BABABA]">
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
            <tr class="border-t border-[#BABABA] ">
              <td class="text-center border-r border-[#BABABA]">${db[i].method}</td>
              <td class="w-1/5 text-center mx-auto border-r border-[#BABABA]"><p class=" mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].tx}</p></td>
              <td class="w-1/5 text-center mx-auto border-r border-[#BABABA]"><p class=" mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].from}</p></td>
              <td class="w-1/5 text-center mx-auto border-r border-[#BABABA]"><p class=" mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].to}</p></td>
              <td class="text-center ">${new Date(db[i].timestamp).toISOString()}</td>
            </tr>
            `

        }
        html+=`
        </tbody>
        </table>
        <div class='flex  items-center justify-center py-2 border-b border-t border-[#BABABA]'><button id="leftArrow" className='mx-2'><</button><button  id="rightArrow" class='mx-2'>></button></div>
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
    <div className='mx-auto page-table min-h-max'>
      <h1 className='text-[80px] font-bold'>Transactions</h1>
      <p className='pb-5 text-[20px]'>
        Transactions made from this web app will be listed right below
      </p>
      <div id="displayDB" className='mt-6 text-[20px]'/>
      
    </div>

  );
};

export default Transactions;