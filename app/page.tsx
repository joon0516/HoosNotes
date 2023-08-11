import Feed from "@/app/components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Learn & Share</h1>
      <br></br>
      <div>
        <p className="inline-block UVAOrange font-bold">Hoos</p>
        <p className="inline-block UVABlue font-bold">Notes</p>{" "}
        <p className="inline-block">
          is an open-source project where students at UVA can
          share good study materials.
        </p>
      </div>

      <Feed />
    </section>
  );
}
