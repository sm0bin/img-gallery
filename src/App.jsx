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
        <img className="col-span-2 row-span-2" src="https://i.ibb.co/S6RZfK9/image-10.jpg" alt="" />
        {
          images.map(image => (
            <div key={image.id} className="border rounded-xl overflow-hidden relative">
              <img src={image.url} alt="" />
              <input type="checkbox" name={image.id} className="bg-white checkbox absolute top-6 left-6" />

            </div>
          ))
        }
      </div>

    </div>
  );
};

export default App;
