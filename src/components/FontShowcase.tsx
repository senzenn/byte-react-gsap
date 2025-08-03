import { fontClasses, getArrayFont, getAuthorFont } from '../utils/fonts';

export default function FontShowcase() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Font Showcase</h1>

      {/* Array Font Family Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Array Font Family</h2>
        <div className="space-y-4">
          <p className={`text-lg ${fontClasses.array.regular}`}>
            Array Regular - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.array.wide}`}>
            Array Wide - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.array.semibold}`}>
            Array Semibold - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.array.semiboldWide}`}>
            Array Semibold Wide - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.array.bold}`}>
            Array Bold - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.array.boldWide}`}>
            Array Bold Wide - The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </section>

      {/* Author Font Family Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Author Font Family</h2>
        <div className="space-y-4">
          <p className={`text-lg ${fontClasses.author.extralight}`}>
            Author Extralight - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.author.light}`}>
            Author Light - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.author.regular}`}>
            Author Regular - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.author.medium}`}>
            Author Medium - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.author.semibold}`}>
            Author Semibold - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.author.bold}`}>
            Author Bold - The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-lg ${fontClasses.author.variable}`} style={{ fontWeight: 350 }}>
            Author Variable (weight 350) - The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </section>

      {/* Using helper functions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Using Helper Functions</h2>
        <div className="space-y-4">
          <p className={`text-lg ${getArrayFont('bold')}`}>
            Array Bold using helper function
          </p>
          <p className={`text-lg ${getAuthorFont('medium')}`}>
            Author Medium using helper function
          </p>
        </div>
      </section>
    </div>
  );
}
