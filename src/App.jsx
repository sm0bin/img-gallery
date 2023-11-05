import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("images.json")
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])
  return (
    <div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
        {
          images.map(image => (
            <div key={image.id}>
              <img src={image.url} alt="" />
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default App;