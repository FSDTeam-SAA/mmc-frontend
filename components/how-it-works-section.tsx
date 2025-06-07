import { ProcessStep } from "@/components/process-step";
import Image from "next/image";

const steps = [
  {
    number: "/assets/01.png",
    title: "Registration",
    description:
      " Sign up for an account by providing your details and verifying your email. Once registered, you can start browsing and bidding.",
    icon: "/assets/work1.png",
    color: "#d0e8ff",
  },
  {
    number: "/assets/02.png",
    title: "Select Product",
    description:
      "Browse through our auctions and find the items you're interested in. Click on any product to see details and place your bid.",
    icon: "/assets/work2.png",
    color: "#e2ffe7",
  },
  {
    number: "/assets/03.png",
    title: "Go to Bidding",
    description:
      " Enter your bid amount and join the auction in real time. Keep an eye on updates to stay ahead of other bidders!",
    icon: "/assets/work3.png",
    color: "#ffe1db",
  },
  {
    number: "/assets/04.png",
    title: "Make Payment",
    description:
      " If you win, proceed to secure payment through our trusted system. Once complete, your item will be prepared for delivery.",
    icon: "/assets/work4.png",
    color: "#fff9dd",
  },
];

export function HowItWorksSection() {
  return (
    <section className="mt-24">
      <div className="relative mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold text-center mb-10">
          How does it work?
        </h1>

        {/* Background Line */}
        <div className="absolute top-[40%] z-0 pointer-events-none w-full">
          <Image
            src="/assets/work-liner.png"
            alt="work liner"
            width={1440}
            height={210}
            className="w-full"
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10 container">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              icon={step.icon}
              description={step.description}
              color={step.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
