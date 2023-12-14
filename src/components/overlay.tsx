import Image from "next/image";
import bg from '../../public/bg.jpg';

const NoiseOverlay = () => {
  return (
    <>

      <svg className="pointer-events-none fixed inset-0 isolate h-full w-full opacity-80 mix-blend-soft-light">
        <filter id="patrickxin">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#patrickxin)" />
      </svg>
    </>

  );
};

export default NoiseOverlay;
