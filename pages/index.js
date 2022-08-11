import Layout from "../components/Layout";
import Pixelated from "../components/home/Pixelated";
import Section from "../components/home/Section";
import Text from "../components/home/Text";
import TextScramble from "../components/home/TextScramble";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Section>
        <Pixelated>hello world!</Pixelated>
        <Text>
          i{"'"}m sayantan, <br />
          another web developer <br />
          from india.
          <br />
          <br />
          {"< welcome />"}
        </Text>
      </Section>
      <Section>
        <Pixelated>
          <TextScramble />
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
            href="https://drive.google.com/uc?export=download&id=12cECmNNsjan0-wHYLIA0jwTsX7KEApJ5"
          >
            here
          </a>{" "}
          ;{")"} <br />
          and get in touch!
          <br />
          <br />
          {"< html />"}
        </Text>
      </Section>
    </Layout>
  );
}
