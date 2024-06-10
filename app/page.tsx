import Image from "next/image";
import LocationIcon from "./components/svg/LocationIcon";
import Radio from "./components/Radio";
import { LiveAPIResponse } from "@/types";
import InstagramLogo from "./components/svg/InstagramLogo";
import Link from "next/link";

export default async function Home() {
  const liveData = (await fetch(
    "https://api.radiocult.fm/api/station/jah-jah-radio/schedule/live",
    {
      headers: { "x-api-key": process.env.RADIO_CULT_API_KEY! },
    },
  ).then((data) => data.json())) as LiveAPIResponse;

  return (
    <main className="min-h-screen">
      <section className="flex justify-center pt-12 md:pb-20 md:pt-20">
        <Radio liveData={liveData} />
        <Image
          className="absolute right-4 top-4 w-28 md:right-8 md:top-8 md:w-56 xl:top-12 xl:w-80"
          src="/jahjah-logo.png"
          alt="Jah Jah Radio logo"
          width="328"
          height="182"
        />
      </section>
      <section className="px-4 pb-12 text-center md:px-8 md:pb-20">
        <h2 className="pb-4 font-serif text-2xl md:text-4xl xl:text-7xl">
          Thursday June 13th
        </h2>
        <p className="font-sans text-xl italic md:text-2xl xl:text-4xl">
          Jah Jah launches Jah Jah Radio to celebrate the Adidas x Snipes
          collaboration
        </p>
      </section>
      <section className="px-4 md:px-8">
        <div className="grid grid-cols-[1fr,5fr] border-4 border-black bg-JJ-lightGray p-4 font-serif text-2xl md:block md:py-8 md:text-center md:text-4xl xl:border-8 xl:text-7xl">
          {performances.map(({ name, time }) => (
            <>
              <span className="inline-block pr-2 xl:pr-4">{time}</span>
              <span className="inline-block text-right text-JJ-blue md:pr-2 md:text-center xl:pr-4">
                {name}
              </span>
            </>
          ))}
        </div>
      </section>
      <section className="px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center font-sans text-lg italic md:text-2xl xl:text-3xl">
          <p className="pb-6">
            Join us in Paris this Thursday, June 13, to celebrate the Snipes x
            Adidas collaboration at the Jah Jah Studio.
          </p>
          <p>
            This event will also be an opportunity to bring together various
            artists to celebrate the Snipes x Adidas pair and the launch of Jah
            Jah Radio with live performances, dj sets and talks.
          </p>
        </div>
        <div className="flex flex-col items-center pt-12 text-center md:pt-20">
          <div className="pb-8">
            <LocationIcon className="h-12 w-12 xl:h-20 xl:w-20" />
          </div>
          <p className="pb-20 font-serif text-xl md:text-2xl xl:text-5xl">
            JAH JAH STUDIO
            <br />
            34 RUE DES PETITES ÉCURIES
            <br />
            75010 PARIS
          </p>
          <Link
            href="https://www.instagram.com/jahjahparis/"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <InstagramLogo className="h-20 w-20" />
          </Link>
        </div>
      </section>
      <section className="px-4 pb-20 md:px-8">
        <div className="grid border-4 border-black bg-JJ-lightGray font-sans text-base italic md:text-xl lg:grid-cols-3 lg:text-2xl xl:border-8">
          <div className="border-black p-4 lg:border-r-4 lg:p-8 xl:border-r-8">
            <h3 className="pb-4 font-serif text-lg md:text-xl lg:text-2xl">
              Creating connections through conversation, collaboration and
              community
            </h3>
            <p className="pb-6">
              JAH JAH Radio is an independent, non-profit internet radio station
              located in Paris, at JAH JAH Studio, 34 Rue des Petites Écuries.
              Our mission is to connect, inspire and empower through
              conversation, collaboration and community.
            </p>
            <h3 className="pb-4 font-serif text-lg md:text-xl lg:text-2xl">
              Redefining narratives
            </h3>
            <p>
              We strive to redefine and refocus the narratives of local artistic
              communities, with a particular emphasis on Parisian perspectives.
              At the same time, we cultivate and nurture relationships with
              similar projects worldwide. JAH JAH Radio showcases alternative
              sounds and ideas from diverse cultures and global influences.
            </p>
          </div>
          <div className="border-black p-4 lg:border-r-4 lg:p-8 xl:border-r-8">
            <h3 className="pb-4 font-serif text-lg md:text-xl lg:text-2xl">
              Providing a showcase and strengthening ties
            </h3>
            <p>
              JAH JAH Radio provides a showcase for local musicians, DJs,
              thinkers, moderators and content creators: an independent space
              for personal and intellectual expression through sound. It also
              serves as a platform for content generated during the JAH JAH
              Artist Residency. The station aims to strengthen links with
              visiting artists and community projects in Paris, as well as with
              other community initiatives around the world. By exchanging ideas,
              organizing workshops and co-creating programs, we aim to deepen
              the interconnection between Paris and the rest of the world, while
              leaving open the possibility of expanding our reach.
            </p>
          </div>
          <div className="p-4 lg:p-8">
            <h3 className="pb-4 font-serif text-lg md:text-xl lg:text-2xl">
              Building bridges{" "}
            </h3>
            <p className="pb-4">
              We aspire to develop and encourage connections between young
              artists and creators from around the world, with programming
              designed by us and for us. Our founding team is made up of
              industry professionals and artists from diverse backgrounds, with
              a wealth of experience and extensive networks in music, radio,
              visual arts, film and dance.
            </p>
            <p>
              In particular, we focus on young artists, offering them a platform
              to express their talents and connect with artists from all over
              the world.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-20 md:pb-40 md:pt-20">
        <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-8 px-20">
          <div>
            <Image
              src="/adidas.png"
              alt="Adidas logo"
              height="675"
              width="1200"
            />
          </div>
          <div>
            <Image
              className="mt-4"
              src="/snipes.png"
              alt="Snipes logo"
              height="143"
              width="349"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export const revalidate = 60;

const performances = [
  {
    name: "Daqui",
    time: "11:00",
  },
  {
    name: "Melanin (live + DJ)",
    time: "12:00",
  },
  {
    name: "Dr Wax",
    time: "13:00",
  },
  {
    name: "Bob Marlich",
    time: "14:00",
  },
  {
    name: "Podcast: How To Undertake Creative Projects In Paris? Animated by Tuco Gadamn, with Melanin and Mosiah Levy",
    time: "15:00",
  },
  {
    name: "TBA",
    time: "16:00",
  },
  {
    name: "Monomite",
    time: "17:00",
  },
  {
    name: "Mosiah Levy",
    time: "18:00",
  },
];
