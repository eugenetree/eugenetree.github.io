import { useEffect, useState } from 'react'
import { NotionRenderer } from 'react-notion';

import "react-notion/src/styles.css";

function App() {
  const [notionBlocksMap, setNotionBlocksMap] = useState<any>(null);

  useEffect(() => {
    fetch('https://notion-api.splitbee.io/v1/page/8d2bf2b3d08a469d85a7c75bcd63e594')
      .then((response) => response.json())
      .then((data) => setNotionBlocksMap(data));
  }, [])

  return notionBlocksMap && 
  <div style={{maxWidth: 500}}>
    <NotionRenderer blockMap={notionBlocksMap} hideHeader={false} />
  </div> 
}

export default App
