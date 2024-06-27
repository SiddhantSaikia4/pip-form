import { Button, Link } from "@mui/material";

const Title = () => (
  <div className="text-7xl break-all">
    <span className="text-xl block text-italic">
      PIP FORM
      {/* <span className="text-nerd-primary">Link Below</span> */}
    </span>
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
