import React from 'react';
import Image from 'next/image';

const aboutUsData = {
  title: "About Us",
  slug: "/about-us",
  page_content: [
    {
      block_1: {
        heading: "Who are we?",
        sub_heading: "We are the best E-com Service provider",
        image: {
          url: "https://eu-images.contentstack.com/v3/assets/blt9f7fb6656f851a15/blt11f5c62bad183ec5/685b85cd6e15c5ef01615276/laptop.jpg",
          title: "laptop.jpg",
        },
        call_to_action_button: {
          text: "",
          link: "",
        },
      },
    },
    {
      block_2: {
        content:
          "<p>We started this about 20 years ago and now we are reaching a great milestone.</p>",
        image: {
          url: "https://eu-images.contentstack.com/v3/assets/blt9f7fb6656f851a15/blt35516d969fb85ffa/685b860ab9ec9099da35c3b3/logo.jpg",
          title: "logo.jpg",
        },
      },
    },
    {
      image_gallery: {
        image: {
          url: "https://eu-images.contentstack.com/v3/assets/blt9f7fb6656f851a15/blt4442f35da54fd830/685b86a7bbfd7f01dfcfe521/chair.jpeg",
          title: "chair.jpeg",
        },
        caption: "",
      },
    },
    {
      image_gallery: {
        image: {
          url: "https://eu-images.contentstack.com/v3/assets/blt9f7fb6656f851a15/bltea558dd9ccbbd97e/685b86921bca8c0e7f8be695/cube.jpg",
          title: "cube.jpg",
        },
        caption: "",
      },
    },
  ],
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {aboutUsData.page_content.map((block, index) => {
          // Block 1 - Hero Content Block
          if (block.block_1) {
            const { heading, sub_heading, image } = block.block_1;
            return (
              <section
                className="mb-20 bg-white rounded-2xl shadow-lg overflow-hidden"
                key={index}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Text Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {heading}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {sub_heading}
                      </p>
                      <div className="flex items-center space-x-4 pt-4">
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">20</span>
                          </div>
                          <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-sm">+</span>
                          </div>
                        </div>
                        <span className="text-gray-600 font-medium">Years of Excellence</span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 lg:h-full min-h-[400px]">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </section>
            );
          }

          // Block 2 - Story Block
          if (block.block_2) {
            const { content, image } = block.block_2;
            return (
              <section
                className="mb-20 bg-white rounded-2xl shadow-lg overflow-hidden"
                key={index}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image - Left side on desktop */}
                  <div className="relative h-64 lg:h-full min-h-[400px] lg:order-1">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  </div>

                  {/* Text Content - Right side on desktop */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                    <div className="space-y-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Our Journey
                      </div>

                      <div
                        className="prose prose-lg text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />

                      {/* Timeline accent */}
                      <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">2004 - Founded</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">2024 - Milestone Reached</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          // Image Gallery
          if (block.image_gallery) {
            const { image } = block.image_gallery;
            return (
              <div
                className="mb-8 last:mb-0"
                key={index}
              >
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 relative h-64 md:h-80 lg:h-96">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Overlay content on hover */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-gray-800 font-medium capitalize">
                        {image.title.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}

        {/* Gallery Grid for image_gallery items */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Showcase</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of quality products and see what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutUsData.page_content
              .filter(block => block.image_gallery)
              .map((block, index) => {
                const { image } = block.image_gallery;
                return (
                  <div
                    className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    key={`gallery-${index}`}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white font-semibold text-lg capitalize mb-2">
                        {image.title.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                      </h3>
                      <div className="w-12 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their e-commerce needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;