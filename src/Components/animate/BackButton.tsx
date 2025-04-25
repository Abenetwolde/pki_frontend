"use client";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <button
      onClick={handleGoBack}
      className="bg-white text-center w-40 rounded-2xl h-14 relative text-black text-xl font-semibold group"
      type="button"
    >
      <div className="bg-yellow-600 rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[154px] z-10 duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#000000"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#000000"
          ></path>
        </svg>
      </div>
           <Typography textAlign={"center"} variant="h5" component="div" gutterBottom className="translate-x-2">
                    Go back
                  </Typography>
      {/* <p className="translate-x-2">Go Back</p> */}
    </button>
  );
}