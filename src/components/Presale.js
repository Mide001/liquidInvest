import CountDown from "./CountDown";
import ProgressBar from "./ProgressBar";

const Presale = () => {
  const softCap = 500; // Soft cap in SOL
  const hardCap = 1000; // Hard cap in SOL
  const currentAmount = 0; // Current amount raised in SOL

  return (
    <section className="presale" id="presale">
      <div className="container mx-auto px-4 py-8 text-center">
        <CountDown />
        <h2 className="text-3xl font-bold text-[#9945FF] mb-6 mt-4">
          #LQINV - Presale
        </h2>
        <p className="text-base text-gray-300 mb-4">
          20% of the $LQINV supply will be offered to early investors to back
          our idea and plan implementation to create one of the next crypto
          unicorns and reach among the top 20 earning protocols.
        </p>
        <p className="text-base text-gray-300 mb-4">
          $LQINV token will be offered at a fixed price of 0.01$ per token.
        </p>
        <p className="text-base text-gray-300 mb-8">
          Our target for the PreSale is to raise 1000 SOL
        </p>
        <p className="text-base text-gray-300 mb-8">
          Calculate the amount you would like to invest in order to receive your
          $LQINV token allocation. Minimum amount to invest is 0.5 SOL and
          maximum amount is 10 SOL.
        </p>
        <ProgressBar
          softCap={softCap}
          hardCap={hardCap}
          currentAmount={currentAmount}
        />
      </div>
    </section>
  );
};

export default Presale;
