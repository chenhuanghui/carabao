import Image from "next/image";
import VideoSection from "@/components/video-section";
import IntroduceSection from "@/components/introduce-section";

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_1fr_20px] items-start justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-dark w-full max-w-4xl mx-auto border-[#BBF517] border-4 rounded-2xl shadow-lg overflow-hidden">
      
      {/* Header with Carabao Logo */}
      <header className="w-full flex justify-center items-start bg-gradient-to-b from-[#BBF517] via-[#BBF517] to-[transparent]">
        <Image
          src="/image.jpg" // Update this path to your Carabao logo image
          alt="Carabao Logo"
          width={150} // Adjust the width as needed
          height={50} // Adjust the height as needed
        />
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {/* Video Section */}
        <VideoSection />

        {/* Introduce Section */}
        <IntroduceSection />

        {/* Social Post Link Submission */}
        <section className="w-full">
          <h2 className="text-xl font-bold text-white">Join the Campaign</h2>
          <form className="flex flex-col gap-4">
            <input
              type="url"
              placeholder="Enter your social post link"
              className="border p-2 rounded"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </form>
        </section>

        {/* Quantity of Attendees and Social Post Links */}
        <section className="w-full">
          <h2 className="text-xl font-bold text-white">Campaign Stats</h2>
          <p className="text-white">Number of Attendees: <span id="attendee-count">0</span></p>
          <p className="text-white">Social Post Links Submitted: <span id="post-count">0</span></p>
        </section>

        {/* Campaign Introduction and Steps */}
        <section className="w-full">
          <h2 className="text-xl font-bold text-white">About the Campaign</h2>
          <p className="text-white">Introduce the campaign here...</p>
          <h3 className="text-lg font-semibold text-white">How to Join</h3>
          <ol className="list-decimal list-inside text-white">
            <li>Step 1: Description of step 1...</li>
            <li>Step 2: Description of step 2...</li>
            <li>Step 3: Description of step 3...</li>
          </ol>
        </section>

        {/* FAQ Section */}
        <section className="w-full">
          <h2 className="text-xl font-bold text-white">FAQ</h2>
          <details className="text-white">
            <summary>Question 1?</summary>
            <p>Answer to question 1...</p>
          </details>
          <details className="text-white">
            <summary>Question 2?</summary>
            <p>Answer to question 2...</p>
          </details>
        </section>

        {/* Footer */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </main>
    </div>
  );
}
