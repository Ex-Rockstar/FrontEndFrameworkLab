import React from "react";
import ImageSlider from "./ImageSlider";

function App() {
  const imageList = [
  "https://images.unsplash.com/photo-1746980885762-d31b3ee71d4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675237625804-25deee797cf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Dynamic Image Slider</h1>
      <ImageSlider
        images={imageList}
        autoplay={true}
        interval={2500}
        showNavigation={true}
        transitionSpeed={800}
      />
    </div>
  );
}

export default App;
