import axios from "axios";
import { useEffect, useState }  from "react";
import ArticleList from "./ArticleList";


function App() {
  const [channels, setChannels] = useState([]);

  console.log(channels);

  const getChannels = async () => {
    try {
      const res = await axios.get("http://localhost:4000/channels");
      setChannels(res.data);

    } catch (error){
      console.log(error);
    }
  }

  useEffect (() => {
    getChannels();
  },[])
  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5">
        RSS-Feed
      </h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4">
        Đọc báo giáo dục
      </h2>

      <div className="grid grid-cols-4 gap-1">
        {channels.map((item) => 
          <ArticleList 
            key = {item.id}
            id = {item.id}
            name = {item.name}
            imageUrl = {item.imageUrl}
          />
        )}
      </div>
      
      
    </>
  );
}

export default App;
