import "../assets/styles/Overview.scss";
import img1 from "../assets/coin1.webp";
import img2 from "../assets/coin2.webp";
import img3 from "../assets/coin3.webp";


const Overview = () => {
  const items = [
    {
      img: img1,
      title: "Pepe Coin",
      text: "Pepe Coin's rise and fall was emblematic of the meme coin mania, where its lack of foundational value led to a dramatic 90% loss from its all-time high.",
    },
    {
      img: img2,
      title: "Doge Coin",
      text: "Dogecoin's trip from a viral joke to a serious asset was cut short, with a more than 90% slide from its high, underscoring the volatility of meme investments.",
    },
    {
      img: img3,
      title: "Floki Coin",
      text: "Floki Coin, caught in the wake of fleeting influencer hype, dropped over 90% from its zenith, highlighting the risks of celebrity-driven investments.",
    },
  ];

  return (
    <>
      <section className="overview" id="overview">
        <div className="container text-white">
          <h4 className="title">Overview</h4>
          <h1>Why Liquid Invest?</h1>
          <p className="container">
            At Liquid Invest, we’re redefining the landscape with a strategy
            designed for tangible results. It’s not just about trading
            tokens—it’s about shaping the future. Join us and make your mark in
            the next wave of cryptocurrency success. Start your journey with
            Liquid Invest today.
          </p>
        </div>

        <div className="container overview-wrp text-white">
          {items?.map((item, i) => (
            <div key={i} className="overview-item">
              <img
                className="h-15 w-15 mx-auto block"
                src={item.img}
                alt=""
              />

              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Overview;
