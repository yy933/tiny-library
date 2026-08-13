import { Mail } from "lucide-react";
export default function AboutContactPage() {
  return (
    <>
      <section className="flex-1 flex flex-col justify-center px-6 py-8 md:py-16 mx-auto max-w-7xl">
        {/* top(desktop): Hro image and description */}
        <div className="space-y-6 max-w-2xl">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            WAYS TO REACH US
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground">
            Contact
          </h1>
          <ul className="space-y-3 list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed pl-1">
            <li>
              <strong className="font-semibold text-foreground">
                Book suggestions:
              </strong>{" "}
              Tell us what we should add to the shelf.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Corrections:
              </strong>{" "}
              Spotted an error? Let us know so we can fix it.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Careers:
              </strong>{" "}
              Interested in joining Tiny Library? Send a short note and we'll
              get back to you.
            </li>
          </ul>
          <div className="space-y-4 pt-2">
            <p>
              <Mail className="inline-block mr-2" />
              <a
                href="mailto:hello@tinylibrary.example"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                hello@tinylibrary.example
              </a>
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We're a small team, so we don't list a phone number—email is best.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
