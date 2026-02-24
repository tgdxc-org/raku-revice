import { getVenueData } from "@/libs/client";
import Build from "./components/section/Build";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";
import GetLayout from "./components/section/GetLayout";
import Search from "./components/section/Search";
import Venue from "./components/section/Venue";
import Manual from "./components/section/Manual";
import FirstView2 from "./components/section/FirstView2";

export type Data = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    venueName: string,
    hallName: string,
    area: {
      id: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      revisedAt: string,
      area: string,
    },
    capacity: number,
    outerThumbnail: string,
    address: string,
    mapsrc: string,
    access: string,
    squareMetre: number,
    venueData: {
      id: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      revisedAt: string,
      venueName: string,
      venueId: {
          id: string
      },
      estimateFile1: string
    },
    website: string,
}

export default async function Home() {
  
  const data = await getVenueData(600);
  const appDomain = process.env.APP_DOMAIN;

  return (
    <>
      <FirstView2 appDomain={appDomain} data={data}/>
      {/* <FirstView data={data}/> */}
      <Venue appDomain={appDomain} data={data}/>
      <Search/>
      <div className="bg-slate-100">
        <GetLayout/>
      </div>
        <Build/>
        <Manual/>
        <Contact appDomain={appDomain} data={data}/>
      <Footer appDomain={appDomain}/>
    </>
  );
}
