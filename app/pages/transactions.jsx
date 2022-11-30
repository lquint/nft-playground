import React from 'react';


const Transactions = function transactions() {
  
  const baseURL=process.env.BASE_URL

  async function getDB() {
    let res = await fetch(`${baseURL}/api/transactions`, {
      method: "GET"
    });
    res = await res.json();
    return res
  };

  React.useEffect(() => {
    async function displayTransactions(){
        const res= await getDB()
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
        const db=res.data
        for(let i = 0; i < db.length; i += 1) {
            html += `
            <tr>
              <td class="text-center text-sm">${db[i].method}</td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].tx}</p></td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].from}</p></td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">${db[i].to}</p></td>
              <td class="text-center text-sm">${db[i].timestamp}</td>
            </tr>
            `

        }
        html+=`
        </tbody>
        </table>
        `
        const transactionList = document.getElementById("displayDB")
        transactionList.innerHTML=html;
    }
    displayTransactions()
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