import clsx from "clsx"

import Content from "@components/layout/content"

export default function HomePage() {
  return (
    <Content>
      <section className="px-2 pt-4 sm:px-4">
        <h1 className={clsx("font-mono text-2xl font-bold sm:text-4xl")}>
          <span className="">Michael</span>&nbsp;
          <span className="">In Jey</span>&nbsp;
          <span className="">Hwang</span>
        </h1>
        <p className="font-mono">
          UI software engineer, distance runner, and eater of foods
        </p>
      </section>
      <section className="space-y-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 shadow-md sm:space-y-4 dark:bg-zinc-800">
        <h1 className="text-2xl font-bold text-rose-400">About Me</h1>
        <p>
          I&apos;m a Software Engineer based out of San Francisco who likes to
          build UI/UX and solve problems with code. Right now, I am having fun
          building with Swift and SwiftUI!
        </p>
        <p>
          I&apos;ve recently returned from my 1 year sebbatical; traveling to 8
          countries, 31 cities, and 4 continents. Now I am looking for my next
          Software Engineering role where I can build with Swift and SwiftUI.
        </p>
        <p>
          Prior to my travels, I worked as a Software Engineer at  and
          previously co-founded the nonprofit OpenMeal. Before that, I graduated
          from Columbia University with a degree in Computer Science.
        </p>
        <p>
          When I&apos;m not coding, you can find me training for a marathon,
          traveling, or trying out new restaurants!
        </p>
      </section>
    </Content>
  )
}
