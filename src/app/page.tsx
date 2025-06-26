export default function HomePage() {
  return (
    <div className="flex-col space-y-4">
      <section className="flex items-end pr-2">
        <div
          className="mr-4 size-64 flex-none rounded-full rounded-br-none border border-sky-100 bg-[url(/image/me.jpeg)] bg-cover shadow"
          title="Me in Kyoto, Japan with 2 dangos!"
        />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-shadow-xs">Hello!</h1>
          <p className="text-xl font-semibold text-shadow-xs">
            I&apos;m a software engineer with 4+ years of experience building
            web frontend and iOS apps based in San Francisco.
          </p>
        </div>
      </section>
      <section className="space-y-4 rounded-3xl border border-sky-200 bg-sky-100 p-4 text-lg shadow">
        <p>
          I&apos;ve recently returned from my 1 year sabbatical; traveling to 8
          countries, 31 cities, and 4 continents. Now I am looking for my next
          engineering role where I can build beautiful UI and create joyful user
          experiences.
        </p>
        <p>
          Prior to my travels, I worked as a software engineer at  and
          previously co-founded the nonprofit OpenMeal as a web frontend
          engineer. Before that, I graduated from Columbia University with a
          degree in Computer Science.
        </p>
        <p>
          When I&apos;m not coding, you can find me training for a marathon,
          traveling, or trying out new restaurants!
        </p>
      </section>
    </div>
  )
}
