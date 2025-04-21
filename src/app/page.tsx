import { Youtube, Linkedin, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full max-w-4xl">
      <div className="text-center sm:text-left">
    <h1 className="text-4xl sm:text-5xl font-bold mb-2">
       Hi there! 👋
    </h1>
    <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
      Welcome to Rifan's portfolio — I’m glad you’re here 
    </p>
  </div>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="https://github.com/RevanNasser/trpc-react-native.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-1">tRPC in React Native</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 p-6">
                Simple RN App that demonstrates how to use tRPC for efficient server communication in a React Native app. 
                The app includes features like fetching a custom greeting based on user input and displaying a user list from a mock tRPC server in a dynamic table.
              </p>
              <img
                src="https://raw.githubusercontent.com/RevanNasser/trpc-react-native/main/tRPC-react-native-DEMO.gif"
                className="rounded-lg shadow-md w-full max-w-xl"
              />
            </a>
            <a
              href="https://github.com/RevanNasser/Minecraft-Items-Explorer.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-1">Minecraft Items Explorer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 p-6">
                Minecraft Items Explorer is a React Native app that allows users to explore and search for Minecraft items.
              </p>
              <img
                src="https://raw.githubusercontent.com/RevanNasser/Minecraft-Items-Explorer/main/minecraft-items-explorer.gif"
                className="rounded-lg shadow-md w-full max-w-xl"
              />
            </a>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/RevanNasser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          GitHub
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/rifan-alshahrani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          LinkedIn
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/@RevanAcademy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube />
          YouTube
        </a>
      </footer>
    </div>
  );
}
