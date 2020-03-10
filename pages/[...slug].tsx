import { useRouter } from "next/router";

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: ["FOO"] } }],
    fallback: true
  };
}

export async function getStaticProps({
  params
}: {
  params: {
    slug?: Array<string>;
  };
}) {
  return {
    props: {
      slugIdx1: params?.slug?.[0] ?? null,
      slugIdx2: params?.slug?.[1] ?? null
    }
  };
}

const Foo = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <div>
        Hello! Deploy me to Now, and if you try to access /foo, it will fail the
        first time with an unexpected error
      </div>
      <div>
        However, if you deploy to now, and try to access /FOO, it will work the
        first time
      </div>
    </>
  );
};

export default Foo;
