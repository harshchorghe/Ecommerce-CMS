import { getData } from '@/app/utils/getdata';
import Image from 'next/image';


export default async function Home() {
  const response = await getData({ contentType: 'page' });
  console.log('Response from getData:', response);

  const page: any = Array.isArray(response) ? response[0] : null;

  if (!page || !Array.isArray(page.page_content)) {
    return <div>Error: No page data found.</div>;
  }

  return (
    <main className="space-y-20 px-4 md:px-10 py-10">
      {page.page_content.map((section: any, index: number) => {
        // HERO BLOCK
        if (section.block_1) {
          const hero = section.block_1;
          return (
            <section key={index} className="text-center">
              <h1 className="text-4xl font-bold mb-2">{hero.heading}</h1>
              <p className="text-lg text-gray-600 mb-6">{hero.sub_heading}</p>

              {hero.image?.url && (
                <div className="mx-auto max-w-sm">
                  <Image
                    src={hero.image.url}
                    alt={hero.image.title || 'Hero Image'}
                    width={hero.image.dimension?.width || 500}
                    height={hero.image.dimension?.height || 500}
                  />
                </div>
              )}

              {hero.call_to_action_button?.text && hero.call_to_action_button?.link && (
                <a
                  href={hero.call_to_action_button.link}
                  className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded"
                >
                  {hero.call_to_action_button.text}
                </a>
              )}
            </section>
          );
        }

        // PRODUCT GRID BLOCK
        if (section.product_grid) {
          const grid = section.product_grid;
          return (
            <section key={index} className="text-center">
              <h2 className="text-3xl font-semibold">{grid.title}</h2>
              <p className="text-gray-600 mb-6">{grid.description}</p>

              {/* Product Display Placeholder */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {grid.product_display?.length > 0 ? (
                  grid.product_display.map((product: any, idx: number) => (
                    <div key={idx} className="border p-4 rounded shadow">
                      <p>Product UID: {product.uid}</p>
                      {/* Replace with actual product rendering if available */}
                    </div>
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            </section>
          );
        }

        // CALL TO ACTION BLOCK
        if (section.call_to_action) {
          const cta = section.call_to_action;
          return (
            <section key={index} className="text-center bg-blue-50 py-10 rounded">
              <h2 className="text-2xl font-bold mb-4">{cta.heading}</h2>
              <a
                href={cta.button_field}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded"
              >
                {cta.button_text}
              </a>
            </section>
          );
        }

        // Fallback if block type is unknown
        return null;
      })}
    </main>
  );
}