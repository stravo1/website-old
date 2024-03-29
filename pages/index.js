import Layout from "../components/Layout";
import Pixelated from "../components/home/Pixelated";
import Section from "../components/home/Section";
import Text from "../components/home/Text";
import TextScramble from "../components/home/TextScramble";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    console.log("hello! visit https://github.com/stravo1/website for the source code. cheers :)");
    setLoaded(true);
  }, []);
  return (
    <Layout>
      <div
        id="scroll"
        className="h-screen overflow-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Section>
          <Pixelated>hello world!</Pixelated>
          <Text>
            i{"'"}m sayantan, <br />
            another web developer <br />
            from india.
            <br />
            <br />
            {"< "}
            {loaded ? <TextScramble phrases={["welcome", "scroll gently"]} name={"one"} /> : "welcome"}
            {" />"}
          </Text>
        </Section>
        <Section>
          <Pixelated>
            {loaded ? <TextScramble
              phrases={[
                "vuejs",
                "react",
                "flutter",
                "nextjs",
                "tail wind",
                "type script",
                "rust",
                "fire base",
                "gcp",
                "aws",
              ]}
              name={"two"}
            /> : "skills"}
          </Pixelated>
          <Text>
            proficient in web-dev.
            <br />
            learning flutter.
            <br />
            loving anime.
            <br />
            <br />
            {"< "}
            <a href="https://github.com/stravo1/website">
              <span className="underline hover:text-red-500 hover:font-medium transition-all">
                code
              </span>
            </a>
            {" />"}
          </Text>
        </Section>
        <Section>
          <Pixelated>
            <Link href={"/contact"}>
              <a className="hover:text-red-500 transition-all">say hello!</a>
            </Link>
          </Pixelated>
          <Text>
            view my resume{" "}
            <a
              className="underline hover:text-red-500 transition-all"
              href="https://drive.google.com/uc?export=download&id=1KVd90yD-P-9q9FaUv9STBpEJ6E-BsWzG"
            >
              here
            </a>{" "}
            ;{")"} <br />
            and get in touch!
            <br />
            <br />
            {"< "}
            <TextScramble
              phrases={["thank you", "visit again"]}
              name={"three"}
            />
            {" />"}
          </Text>
        </Section>
      </div>
    </Layout>
  );
}
