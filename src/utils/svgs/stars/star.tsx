import { StarComponent } from "./star.style";

interface PropType {
  size: number;
  color?: string;
}

export default function Star(prop: PropType) {
  return (
    <StarComponent $starSize={prop.size}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt"
        height="512.000000pt"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={prop.color ? prop.color : "#D9D9D9"}
          stroke="none"
        >
          <path
            d="M2493 4980 c-17 -10 -37 -29 -44 -42 -7 -12 -158 -366 -335 -787
-178 -420 -325 -765 -327 -768 -3 -2 -373 -35 -823 -73 -451 -39 -834 -73
-852 -76 -19 -3 -50 -20 -70 -39 -34 -31 -37 -38 -37 -88 0 -41 5 -61 20 -77
11 -13 302 -267 647 -566 345 -299 629 -548 632 -552 3 -5 -80 -375 -185 -823
-104 -448 -189 -827 -189 -844 0 -66 63 -125 134 -125 35 0 74 23 1218 714
l278 168 352 -213 c1112 -669 1112 -669 1146 -669 69 0 132 60 132 125 0 23
-352 1563 -376 1647 -4 12 159 159 623 561 345 300 639 557 653 572 20 22 25
37 25 82 0 50 -3 57 -37 88 -20 19 -51 36 -70 39 -18 3 -379 35 -803 71 -423
36 -793 67 -822 71 -50 5 -52 6 -71 52 -11 26 -156 369 -322 762 -166 393
-309 728 -317 743 -31 62 -119 85 -180 47z"
          />
        </g>
      </svg>
    </StarComponent>
  );
}
