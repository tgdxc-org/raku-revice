"use client";
import { Data } from "@/app/page";
import { shuffleArray } from "@/libs/shuffleArray";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

interface Props {
  appDomain: string | undefined;
  data: Data[];
}

const Venue = ({ appDomain, data }: Props) => {
  const { windowSize } = useWindowSize();
  const [venueArray, setVenueArray] = useState<Data[]>();

  const venues = data.filter((item) => item.venueData !== null);

  const setArrayHandler = (width: number) => {
    if (width < 601) {
      return shuffleArray(venues).slice(0, 2);
    } else {
      return shuffleArray(venues).slice(0, 7);
    }
  };

  useEffect(() => {
    const array: Data[] = setArrayHandler(windowSize.width);
    setVenueArray(array);
  }, [windowSize]);

  return (
    <div className="w-full overflow-x-clip pt-8 pb-8 bg-slate-100 drop-shadow-[0_0_6px_rgba(0,0,0,0.2)]">
      {/* <h1 className='pb-6 text-center text-xl flex flex-col gap-1 text-black'>ご利用いただける会場<span className='text-xs text-slate-500 font-bold'>（一部抜粋）</span></h1> */}
      {venueArray && (
        <ul className="w-[200vw] grid grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(14,1fr)] gap-4 venuewrapper">
          {venueArray.map((item, i) => (
            <li key={i} className="bg-white p-2 drop-shadow-lg">
              <Link
                href={`${appDomain}/search/${item.area.id}/${item.id}`}
                className="hover:opacity-80 transition-all ease-in-out flex flex-col gap-2"
              >
                <img
                  className="aspect-video object-cover w-full"
                  src={`${appDomain}${item.outerThumbnail}`}
                  alt={`${item.venueName} ${item.hallName}`}
                />
                <div className="">
                  <p className="text-xs">
                    {item.venueName}
                    <br />
                    {item.hallName ? item.hallName : ""}
                  </p>
                  <p className="text-xs text-[#07A1C1]">
                    {item.capacity}ブース設置可能
                  </p>
                </div>
              </Link>
            </li>
          ))}
          {venueArray.map((item, i) => (
            <li key={i} className="bg-white p-2 drop-shadow-lg">
              <Link
                href=""
                className="hover:opacity-80 transition-all ease-in-out flex flex-col gap-2"
              >
                <img
                  className="aspect-video object-cover w-full"
                  src={item.outerThumbnail}
                  alt={`${item.venueName} ${item.hallName}`}
                />
                <div className="">
                  <p className="text-xs">
                    {item.venueName}
                    <br />
                    {item.hallName ? item.hallName : " "}
                  </p>
                  <p className="text-xs text-[#07A1C1]">
                    {item.capacity}ブース設置可能
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Venue;
