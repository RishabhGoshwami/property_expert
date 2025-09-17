// src/pages/Gallery.jsx
import React from "react";

// ✅ Example images
const galleryImages = [
  "https://scontent.fdel27-4.fna.fbcdn.net/v/t39.30808-6/548226344_703012266093455_5004783762460224569_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FgB8H-D1V3QQ7kNvwFIquV0&_nc_oc=AdlHX0AJSjXccxgnY55nK9yuLMydk3R3uRSGpc1MnkLVm5APBJb6OylnJVR-dePJpvZjvrWqVvVRyz4RaXLADuhg&_nc_zt=23&_nc_ht=scontent.fdel27-4.fna&_nc_gid=wwr3lAAyJQTXXMLBG0Wa6g&oh=00_AfaeSpeM-seTtSzU5q-o-tW413HWcTy2Ctfa-DHx38eMRw&oe=68D00BB0",
  "https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/546520622_699103356484346_2785278384637485403_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Fws2G86iJ9AQ7kNvwEOA4IB&_nc_oc=AdmhHKnYd6ktm00HzXH8bRYOEXiuXech7sCrfSM9khnTHjCYq-qK6hkFWR2CG74vz4TfaYKN38JPcdW-HNagKA0g&_nc_zt=23&_nc_ht=scontent.fdel27-5.fna&_nc_gid=pm0uT-0sHPe5HOrsaep4uA&oh=00_Afb10JfWHCkUdkfqK7WYAR1RvC5h5_6rFlJ1bGy3Q3h1kA&oe=68D02AC6",
  "https://scontent.fdel27-6.fna.fbcdn.net/v/t39.30808-6/469121795_17880471192189953_706461706583097804_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=apVhjd2FR78Q7kNvwESwnXi&_nc_oc=Adm0cF3vkG-mm4RgczmbCIV67Nx6RFLnvobpaIZTjGMsWYZXXaeL3FVAWXsu2SJDyxMDcPzhwcHLp4fT-m9S_S-T&_nc_zt=23&_nc_ht=scontent.fdel27-6.fna&_nc_gid=TmFidqjpD8-EVyY5c1s6zA&oh=00_AfYGFBo-bUkdJVM34QTR5H17Zm83Jq6yhPyTx7wQXA6yng&oe=68D03C78",
  "https://via.placeholder.com/400x300?text=Image+4",
  "https://via.placeholder.com/400x300?text=Image+5",
  "https://via.placeholder.com/400x300?text=Image+6",
];

export default function Gallery() {
  return (
    <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Our Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg group relative"
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
              Image {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
