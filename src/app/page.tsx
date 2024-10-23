import Homepage from "@/modules/Homepage";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/homepage`
  );
  const result = await response.json();

  console.log(result);

  return (
    <div>
      <Homepage />
    </div>
  );
}
