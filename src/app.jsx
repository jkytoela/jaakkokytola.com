import * as React from "react";
import { TimelineLite } from "gsap";
import useLeonSans from "./hooks/use-leonsans";

function App() {
  const canvasRef = React.useRef(null);
  const [isIntro, setIsIntro] = React.useState(true);

  const canvasOptions = {
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight,
    pixelRatio: 2,
  };

  const fontOptions = {
    text: "Hey",
    color: ["#FFFFFF"],
    size: 50,
    weight: 1,
  };

  const { leonSansRef } = useLeonSans(canvasRef, fontOptions, canvasOptions);

  const onComplete = () => {
    setIsIntro(false)
  }

  const triggerAnimate = React.useCallback(() => {
    if (leonSansRef.current === null) {
      return;
    }

    const animation = new TimelineLite();
    animation
      .fromTo(
        leonSansRef.current.drawing,
        { value: 0 },
        { value: 1, duration: 1.6, stagger: 1, ease: "Power2.inOut" }
      )
      .to(leonSansRef.current, {
        weight: 550,
        duration: 1,
        ease: "Power4.easeIn",
      })
      .to(leonSansRef.current, {
        tracking: 1000,
        duration: 0.35,
        ease: "Power4.easeIn",
        delay: 0.5,
      })
      .to(leonSansRef.current, {
        size: 400,
        weight: 350,
        duration: 1.35,
        ease: "Power4.easeIn",
      })
      .to(leonSansRef.current, {
        weight: 1,
        duration: 0.65,
        ease: "Power4.easeOut",
      })
      .to(leonSansRef.current, {
        weight: 900,
        size: 5000,
        ease: "Power4.easeIn",
        delay: 0.3,
      })
      .set(leonSansRef.current, {
        size: 15000,
        duration: 1.35,
        ease: "Power4.easeIn",
        onComplete: onComplete,
      });
  }, [leonSansRef]);

  React.useEffect(() => {
    triggerAnimate();
  }, [triggerAnimate]);

  if (isIntro) {
    return <canvas ref={canvasRef} />;
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF', height: '100vh', width: '100%' }}>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
