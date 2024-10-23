import Homepage from "@/modules/Homepage";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

// const getData = async () => {
//   const response = await fetch(`${BASE_URL}/api/homepage`);

//   if (!response.ok) {
//     throw new Error("ERROR while getting data");
//   }

//   const result = await response.json();
//   return result;
// };

export default async function Home() {
  // if (!BASE_URL) {
  //   return null;
  // }

  // const data = await getData();

  // if (!data) {
  //   return null;
  // }

  // console.log(data);

  return (
    <div>
      <Homepage />
    </div>
  );
}
