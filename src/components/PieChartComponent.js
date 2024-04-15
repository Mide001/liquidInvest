"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const PieChartComponent = ({ header, description, data }) => {
  return (
    <section className="tokenommics" id="tokenomics">
         <div className="bg-[#171717] flex flex-col md:flex-row p-4">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2 text-[#9945FF]">{header}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <div className="md:w-1/2 p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mb-4 md:mb-0 p-4">
            <Pie data={data} />
          </div>
          <div className="flex flex-col p-4 mt-6">
            {data.labels.map((label, index) => (
              <div key={index} className="flex items-center mb-2">
                <div
                  className="w-4 h-4 mr-2"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <span className="text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-300 mt-4 text-center">
          Total Token Supply: 10,000,000,000
        </div>
      </div>
    </div>
    </section>
  );
};

export default PieChartComponent;
