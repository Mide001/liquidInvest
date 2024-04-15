
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
                href="https://drive.google.com/file/d/1ssh8z1G_qcSUNnyM2ijBZGiNrxW1GdXB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9945FF] mt-4 text-gray-200 py-2 px-4 rounded-md inline-flex items-center"
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
