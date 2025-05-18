// Import images
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
// You can add more images later if needed:
// import img4 from "./assets/image4.jpg";
// import img5 from "./assets/image5.jpg";

// Import the ImageSlider component
import ImageSlider from "./ImageSlider";

// Store images in an array
const images = [img1, img2, img3];

// Main App component
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ImageSlider 
        images={images} 
        autoplay={true} 
        slidesPerView={1} 
        loop={true} 
      />
    </div>
  );
}

export default App;
