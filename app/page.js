import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Concursos</h1>
        <Link href="/quiz">
          <button>Empezar Concurso</button>
        </Link>
      </div>
    </main>
  );
}
