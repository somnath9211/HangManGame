import Lavel1 from "../../assets/Images/1.svg";
import Lavel2 from "../../assets/Images/2.svg";
import Lavel3 from "../../assets/Images/3.svg";
import Lavel4 from "../../assets/Images/4.svg";
import Lavel5 from "../../assets/Images/5.svg";
import Lavel6 from "../../assets/Images/6.svg";
import Lavel7 from "../../assets/Images/7.svg";
import Lavel8 from "../../assets/Images/8.svg";

function HangMan({ step }) {
  const images = [
    Lavel1,
    Lavel2,
    Lavel3,
    Lavel4,
    Lavel5,
    Lavel6,
    Lavel7,
    Lavel8,
  ];

  return (
    <div>
      <img
        src={step >= images.length ? images[images.length - 1] : images[step]}
      />
    </div>
  );
}

export default HangMan;
