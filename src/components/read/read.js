import React from "react";

export default function Read() {
  return (
    <section
      id="read"
      className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12"
    >
      <h2 className="text-6xl font-black mb-24 mt-24">
        The Fortnightly Read List
      </h2>
      <article className="-sm border-2 border-gray-100 bg-white mb-8 w-full md:w-3/4">
        <div className="flex items-start p-6">
          <img
            alt="RWA house made from tokens"
            src="https://www.datocms-assets.com/91360/1672162744-rwa_house_made_from_tokens.png"
            className="h-14 w-14 rounded-sm object-cover"
          />

          <div className="ml-4">
            <h3 className="font-medium sm:text-lg">
              <a
                href="https://blockworks.co/news/what-are-real-world-assets-defis-newest-yield"
                className="hover:underline"
              >
                What Are Real World Assets? DeFis Newest Yeild.
              </a>
            </h3>

            <p className="text-sm text-gray-700 line-clamp-2">
              An exploration of the how DeFi needs real world assets in order to
              grow and be able to provide yeild in economic downturns
            </p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Published By:
                <a
                  href="https://blockworks.co/news/what-are-real-world-assets-defis-newest-yield"
                  className="font-medium underline hover:text-gray-700"
                >
                  Blockworks
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <strong className="text-center rounded-tl-sm rounded-br-sm bg-orange-600 py-1 text-white w-20">
            <span className="text-[10px] font-medium sm:text-xs">ARTICLE</span>
          </strong>
        </div>
      </article>

      <article className="rounded-sm border-2 border-gray-100 bg-white mb-8 w-full md:w-3/4">
        <div className="flex items-start p-6">
          <img
            alt="Real World Assets on a Blueprint with Coins on top"
            src="https://www.datocms-assets.com/91360/1672103263-rwa_the-complete-guide.jpg"
            className="h-14 w-14 rounded-sm object-cover"
          />

          <div className="ml-4">
            <h3 className="font-medium sm:text-lg">
              <a
                href="https://www.youtube.com/watch?v=T_f4f9Mi3cA"
                className="hover:underline"
              >
                Bringing Real-World Assets to DeFi
              </a>
            </h3>

            <p className="text-sm text-gray-700 line-clamp-2">
              A discussion on how to bring real-world assets to bear and the
              challenges & opportunities that come with it.
            </p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Published By:
                <a
                  href="https://www.youtube.com/watch?v=T_f4f9Mi3cA"
                  className="font-medium underline hover:text-gray-700"
                >
                  Solana
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <strong className="text-center rounded-tl-sm rounded-br-sm bg-red-600 py-1 text-white w-20">
            <span className="text-[10px] font-medium sm:text-xs">VIDEO</span>
          </strong>
        </div>
      </article>

      <article className="rounded-sm border-2 border-gray-100 bg-white mb-8 w-full md:w-3/4">
        <div className="flex items-start p-6">
          <img
            alt="Real World Assets shown in a server connected with wires"
            src="https://www.datocms-assets.com/91360/1672104039-real-world-assets-node.png"
            className="h-14 w-14 rounded-sm object-cover"
          />

          <div className="ml-4">
            <h3 className="font-medium sm:text-lg">
              <a
                href="https://docsend.com/view/u53utyp2j4ycg7r6"
                className="hover:underline"
              >
                Unreal Primer on Real World Assets
              </a>
            </h3>

            <p className="text-sm text-gray-700 line-clamp-2">
              An exploration of real world assets that looks at ontology,
              problems, solutions, landscape, and predictions.
            </p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Published By:
                <a
                  href="https://docsend.com/view/u53utyp2j4ycg7r6"
                  className="font-medium underline hover:text-gray-700"
                >
                  Teej Ragsdale, Jack Chong, and Mukund Venkatakrishnan
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end min-w-24">
          <strong className="text-center rounded-tl-sm rounded-br-sm bg-blue-600 py-1 text-white w-20">
            <span className="text-[10px] font-medium sm:text-xs">BOOKLET</span>
          </strong>
        </div>
      </article>

      <article className="-sm border-2 border-gray-100 bg-white mb-8 w-full md:w-3/4">
        <div className="flex items-start p-6">
          <img
            alt="RWA house made from tokens"
            src="https://www.datocms-assets.com/91360/1672162744-rwa_house_made_from_tokens.png"
            className="h-14 w-14 rounded-sm object-cover"
          />

          <div className="ml-4">
            <h3 className="font-medium sm:text-lg">
              <a
                href="https://blog.defactor.com/trade-finance-the-new-asset-class-91d96c1aaf0a"
                className="hover:underline"
              >
                Trade Finance: The New Asset Class
              </a>
            </h3>

            <p className="text-sm text-gray-700 line-clamp-2">
              Defactor on how tokenized trade finance is opening a
              multi-trillion USD alternative asset class and bringing
              efficiencies and improved cash flow to financial trade.
            </p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Published By:
                <a
                  href="https://blog.defactor.com/trade-finance-the-new-asset-class-91d96c1aaf0a"
                  className="font-medium underline hover:text-gray-700"
                >
                  Defactor
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <strong className="text-center rounded-tl-sm rounded-br-sm bg-orange-600 py-1 text-white w-20">
            <span className="text-[10px] font-medium sm:text-xs">ARTICLE</span>
          </strong>
        </div>
      </article>
    </section>
  );
}
