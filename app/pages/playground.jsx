import React from 'react';
import PlaygroundTable from '../components/PlaygroundTable';

export default function Home() {
  React.useEffect(() => {
    document.getElementById("playgroundlink").classList.add('active-page');
    document.getElementById("aboutlink").classList.remove('active-page');
    document.getElementById("homelink").classList.remove('active-page');
    document.getElementById("transactionslink").classList.remove('active-page');
  });

  return (
    <div className="content page-standard">
      <PlaygroundTable />
    </div>
  );
}
