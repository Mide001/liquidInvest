import logo from "../assets/Liquid-Invest.png";

const Investication = () => {
  return (
    <section className="investication">
      <div className="container">
        <div className="investication-wrp">
          <div className="content">
            <div className="w-full lg:w-1/2 p-4 text-white">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4 mt-8">
                Smart Investments Start With Smart Decisions
              </h2>
              <p>
                Dive into our whitepaper and become part of a visionary circle
                of crypto investment!
              </p>
              <a
                href="https://staging-b0b8-liquidinvest.wpcomstaging.com/wp-content/uploads/2023/12/white_paper-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#658ad7] mt-4 text-gray-800 py-2 px-4 rounded-md inline-flex items-center"
              >
                <span className="mr-1">Whitepaper</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investication;
