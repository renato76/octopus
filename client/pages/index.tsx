export default function Home() {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <div className="flex justify-center mt-6">
          <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        </div>
        <div className="mt-12">
          <button className="px-4 md:px-12 py-2 border border-solid border-sohoLights  hover:bg-sohoLights transition duration-700 ease-in-out rounded-lg cursor-pointer">
            <a href="/product">Get Started</a>
          </button>
        </div>
      </div>
    </main>
  );
}
