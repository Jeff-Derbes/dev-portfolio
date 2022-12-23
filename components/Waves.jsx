import React from "react";

function Waves(props) {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 600"
      xmlns="http://www.w3.org/2000/svg"
      className="transition: duration-2000 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#002bdc"></stop>
          <stop offset="95%" stopColor="#32ded4"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,200 0,200 C 88.88038277511961,158.33492822966508 177.76076555023923,116.66985645933013 267,146 C 356.2392344497608,175.33014354066987 445.8373205741626,275.6555023923445 535,270 C 624.1626794258374,264.3444976076555 712.8899521531101,152.7081339712919 822,143 C 931.1100478468899,133.2918660287081 1060.6028708133972,225.51196172248802 1167,252 C 1273.3971291866028,278.488038277512 1356.6985645933014,239.244019138756 1440,200 C 1440,200 1440,600 1440,600 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#002bdc" />
          <stop offset="95%" stopColor="#32ded4" />
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,400 0,400 C 116.62200956937798,436.4976076555024 233.24401913875596,472.99521531100476 330,455 C 426.75598086124404,437.00478468899524 503.6459330143541,364.51674641148327 594,331 C 684.3540669856459,297.48325358851673 788.1722488038276,302.9377990430622 892,336 C 995.8277511961724,369.0622009569378 1099.665071770335,429.73205741626793 1191,445 C 1282.334928229665,460.26794258373207 1361.1674641148325,430.13397129186603 1440,400 C 1440,400 1440,600 1440,600 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      />
    </svg>
  );
}

export default Waves;
