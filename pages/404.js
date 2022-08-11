import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextScramble from "../components/home/TextScramble";
import Layout from "../components/Layout";

const PageNotFound = () => {
  return (
    <Layout
      customMeta={{
        title: "404 - Page Not Found",
        description: "404 error! Page not found.",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <Image
          src="/images/404.svg"
          width={250}
          height={250}
          objectFit="contain"
          priority={true}
          alt=""
        />
        <br />
        <br />
        <div className="font-cursive text-2xl text-center py-12">oops!  <TextScramble
              phrases={["page", "mlk3ahm"]}
              name={"error"}
            /> not found :{"("}</div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
