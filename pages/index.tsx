import { Button, Link } from "@mui/material";

const Title = () => (
  <div className="text-7xl break-all">
    <span className="text-xl block text-italic">
      Stop worrying about bullsh#t.{" "}
      <span className="text-nerd-primary">Start coding now!</span>
    </span>
    <span className="text-nerd-primary">NextJS</span>,
    <span className="text-nerd-secondary">Typescript</span>,
    <span>TailwindCSS</span>
    <span className="text-sm">starter</span>
    <Link href="/form">
      <Button className="block mx-auto py-4">See the form</Button>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div>
      <main className="max-w-xl h-screen mx-auto flex items-center">
        <Title />
      </main>
    </div>
  );
}
