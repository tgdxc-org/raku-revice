import { Data } from "@/app/page";
import Link from "next/link";
import React from "react";


interface Props {
  appDomain: string | undefined;
  data: Data[];
}

const ChoseArea = ({ appDomain, data }: Props) => {
  const areaList = [
    {
      label: "全国",
      href: `${appDomain}/search`,
    },
    {
      label: "関東",
      href: `${appDomain}/search/q519yevsf4_y`,
    },
    {
      label: "中部",
      href: `${appDomain}/search/ajr3bzwc5`,
    },
    {
      label: "関西",
      href: `${appDomain}/search/3av8w4y1fp`,
    },
  ];

  return (
    <>
      <h1 className="text-base md:text-3xl font-bold leading-[1.5em] py-2 mx-auto w-fit text-white mt-[100px] mb-10">
      開催地や行いたいイベントの規模から<br/>
      条件に合った会場を探せます
      </h1>
      <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-8 w-full text-center rounded-3xl items-center mx-auto bg-slate-100 drop-shadow-lg">
        <p className="text-base sm:text-2xl font-bold text-nowrap w-full flex flex-col gap-4">
          <span className="text-xs sm:text-base font-normal text-white border-2 bg-[#08A1C1] py-1 px-12 w-fit mx-auto">
            {data.length}会場掲載中
          </span>
          まずは開催地を選択
        </p>
        <ul className="grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-4 justify-center w-full">
          {areaList.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="inline-block bg-slate-900 text-sm md:text-2xl px-6 md:px-16 py-2 sm:py-4 rounded-sm text-nowrap text-white hover:bg-slate-600 transition-all ease-in-out"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChoseArea;
