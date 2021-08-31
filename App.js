import "./styles.css";

export default function App() {
  var i;
  var slides=document.getElementsByClassName("slides");
  for(i=0;i<slides.length;i++){
    slides[i].style.display="hide";
  }

  return (
    <div>
      <div className="slides">
      <img src="https://source.unsplash.com/collection/190727/600x300" alt="fsdioj" style={{width:"100%"}} />

      <img src="https://source.unsplash.com/collection/190727/600x300" alt="fsdioj" style={{width:"100%"}} />

      <img src="https://source.unsplash.com/collection/190727/600x300" alt="fsdioj" style={{width:"100%"}} />

      <img src="https://source.unsplash.com/collection/190727/600x300" alt="fsdioj" style={{width:"100%"}} />
      </div>

    </div>
  );
}
