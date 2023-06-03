import Myself from "../assets/pictures/anurag.png";

export const About = () => {
  return (
    <>
      <h1 className="font-bold mt-24 text-center mb-8 font-sans pl-16 sm:pl-0">
        Hi, I'm Anurag.
      </h1>
      <div className="flex justify-center mb-32 flex-wrap gap-x-8 items-center">
        <figure className="flex justify-center w-64 h-80 drop-shadow-2xl">
          <img
            className="shadow-2xl"
            src={Myself}
            alt="This is me!"
            width="220"
            height="400"
          />
        </figure>
        <article className="flex flex-col w-[32rem] pt-6 font-sans text-justify md:text-left">
          <p className="text-xl ">
            I usually go by my pen name Axell. I am a web technology enthusiast
            who enjoys working with various technologies as part of my daily
            routine. Outside of work, I have a passion for traveling, hiking,
            and exploring local food spots with my friends. Additionally, I
            actively participate in tech conferences in my area to stay updated
            on the latest ideas and trends shared by industry experts.
          </p>
        </article>
      </div>
    </>
  );
};
