export async function GET() {
  const data = {
    prevWorkImage: [
      "https://ik.imagekit.io/icvij1rszoy/img1_R3ydh31H8.png?updatedAt=1729649691105",
      "https://ik.imagekit.io/icvij1rszoy/img2_ccv5L2gSH.png?updatedAt=1729649690918",
      "https://ik.imagekit.io/icvij1rszoy/img3_VYFn9k0V4y.png?updatedAt=1729649687507",
      "https://ik.imagekit.io/icvij1rszoy/img4_1Dt05F-H8i.png?updatedAt=1729649687784",
      "https://ik.imagekit.io/icvij1rszoy/img5_VRvrdW63aq.png?updatedAt=1729649688148",
      "https://ik.imagekit.io/icvij1rszoy/img6_XfCYnn5ic.png?updatedAt=1729649686847",
      "https://ik.imagekit.io/icvij1rszoy/img7_j8U8VDH50P.png?updatedAt=1729649688522",
      "https://ik.imagekit.io/icvij1rszoy/img8__ddl9v9Tv.png?updatedAt=1729649686426",
      "https://ik.imagekit.io/icvij1rszoy/img9_GFTwTcNjW.png?updatedAt=1729649687578",
      "https://ik.imagekit.io/icvij1rszoy/img10_YT8LOUPhlA.png?updatedAt=1729649687581",
      "https://ik.imagekit.io/icvij1rszoy/img11_9cihv_3ni.png?updatedAt=1729649688052",
      "https://ik.imagekit.io/icvij1rszoy/img12_mykZl0GGZ.png?updatedAt=1729649687954",
    ],
    heroImage:
      "https://ik.imagekit.io/icvij1rszoy/heroimg_AJGqYRq5E.png?updatedAt=1729654321304",
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
