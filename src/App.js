import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Beyond from "./components/Beyond";
import Investication from "./components/Investication";
import Overview from "./components/Overview";
import PieChartComponent from "./components/PieChartComponent";
import Presale from "./components/CountDown";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const chartData = {
    labels: [
      "10% - Liquidity",
      "7% - Marketing",
      "8% - Airdrops",
      "5% - VIP Presale",
      "10% - Public Presale",
      "60%- Vested",
    ],
    datasets: [
      {
        data: [10, 7, 8, 5, 10, 60],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF5733",
          "#9B59B6",
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Beyond />
      <Investication />
      <Overview />
      <PieChartComponent
        header="Tokenomics Overview"
        description="Explore the distribution of tokens with this insightful pie chart. Each segment represents a specific category, providing a visual breakdown of the percentage allocation across different aspects of the token ecosystem."
        data={chartData}
      />
      <Presale />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
