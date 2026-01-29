import { tinaField, useTina } from "tinacms/dist/react";
import type {
  HomepageQuery,
  HomepageQueryVariables,
} from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  variables: HomepageQueryVariables;
  data: HomepageQuery;
  query: string;
};

const HomePage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const homepage = data.homepage;

  return (
    <main>
      {homepage.hero && (
        <section
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${homepage.hero.background})` }}
          data-tina-field={tinaField(homepage, "hero")}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
            {homepage.hero.tagline && (
              <span
                className="block text-sm uppercase tracking-widest mb-4 opacity-80"
                data-tina-field={tinaField(homepage.hero, "tagline")}
              >
                {homepage.hero.tagline}
              </span>
            )}
            {homepage.hero.title && (
              <h1
                className="text-5xl md:text-7xl font-bold mb-6"
                data-tina-field={tinaField(homepage.hero, "title")}
              >
                {homepage.hero.title}
              </h1>
            )}
            {homepage.hero.description && (
              <div
                className="text-lg md:text-xl mb-8 opacity-90"
                data-tina-field={tinaField(homepage.hero, "description")}
              >
                <TinaMarkdown content={homepage.hero.description} />
              </div>
            )}
            {homepage.hero.cta && homepage.hero.cta.link && (
              <a
                href={homepage.hero.cta.link}
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all"
                data-tina-field={tinaField(homepage.hero.cta, "label")}
              >
                {homepage.hero.cta.label || "Learn More"}
              </a>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default HomePage;
