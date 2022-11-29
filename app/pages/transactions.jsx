import React from 'react';


const Transactions = function transactions() {
  
  

  async function getDB() {
    let res = await fetch("http://localhost:3000/api/transactions", {
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
            <th class="w-1/6">Timestamp</th>
          </tr>
        </thead>
        <tbody>
        `
        const db=res.data
        for(let i = 0; i < db.length; i += 1) {
            html += `
            <tr>
              <td class="text-center text-sm">${db[i].title}</td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">0x8c6d2b1dd3919ebf44db2762f4efcf3b1d74cbe1699aaf5ab4d25f2e6d12bd74</p></td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">0xe8f93a2a3b260341bb0bd6d951478cdc56faa703</p></td>
              <td class="w-1/5 text-center mx-auto"><p class="text-sm mx-auto w-9/12 text-center text-ellipsis overflow-hidden">0x8ba5488f536e379ab35be9f7a4ecb8c41e27baad</p></td>
              <td class="text-center text-sm">${db[i].content}</td>
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
        Transactions made from this web app will be listed right below <a className='underline' href='https://github.com/lquint/nftCenter' target="_blank" rel="noopener noreferrer">here</a>
      </p>
      <div id="displayDB"/>
    </div>

  );
};

export default Transactions;