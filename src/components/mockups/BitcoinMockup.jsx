export default function BitcoinMockup() {
  const candles = [
    { x: 10, o: 30, c: 22, h: 34, l: 18 },
    { x: 25, o: 22, c: 26, h: 30, l: 19 },
    { x: 40, o: 26, c: 18, h: 28, l: 14 },
    { x: 55, o: 18, c: 24, h: 27, l: 15 },
    { x: 70, o: 24, c: 16, h: 26, l: 12 },
    { x: 85, o: 16, c: 20, h: 23, l: 12 },
    { x: 100, o: 20, c: 12, h: 22, l: 9 },
    { x: 115, o: 12, c: 18, h: 20, l: 9 },
    { x: 130, o: 18, c: 22, h: 25, l: 15 },
    { x: 145, o: 22, c: 30, h: 33, l: 20 },
    { x: 160, o: 30, c: 26, h: 34, l: 23 },
    { x: 175, o: 26, c: 34, h: 37, l: 24 },
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden bg-[#0d0507] border border-white/10 font-mono text-[11px]">
      <div className="flex items-center justify-between bg-crimson/90 px-3 py-2">
        <p className="text-white font-sans font-semibold text-[11px]">BITCOIN PRICE PREDICTION DASHBOARD</p>
      </div>
      <div className="flex">
        <div className="w-28 bg-black/40 border-r border-white/5 p-3 space-y-2 hidden sm:block font-sans text-[10px] text-ink-500">
          <p className="text-crimson-light">Overview</p>
          <p>Charts</p>
          <p>Predictions</p>
          <p>Indicators</p>
          <p>Portfolio</p>
        </div>

        <div className="flex-1 p-3">
          <div className="flex flex-wrap gap-4 mb-3 font-sans">
            <div>
              <p className="text-ink-500 text-[9px]">Key Metrics</p>
              <p className="text-ink-100 font-semibold">$68,543.21</p>
            </div>
            <div>
              <p className="text-ink-500 text-[9px]">24h Change</p>
              <p className="text-green-400 font-semibold">+3.15%</p>
            </div>
            <div>
              <p className="text-ink-500 text-[9px]">7d Change</p>
              <p className="text-green-400 font-semibold">+7.8%</p>
            </div>
          </div>

          <div className="bg-black/50 rounded-lg p-2 border border-white/5">
            <p className="text-ink-300 font-sans mb-1">BTC/USD Price History &amp; Prediction</p>
            <svg viewBox="0 0 220 60" className="w-full h-24">
              {candles.map((c, i) => (
                <g key={i}>
                  <line x1={c.x} y1={60 - c.h} x2={c.x} y2={60 - c.l} stroke="#ff4757" strokeWidth="1" />
                  <rect
                    x={c.x - 3}
                    y={60 - Math.max(c.o, c.c)}
                    width="6"
                    height={Math.max(Math.abs(c.o - c.c), 1.5)}
                    fill={c.c >= c.o ? "#3fae5a" : "#ff2d3a"}
                  />
                </g>
              ))}
              {/* prediction line */}
              <polyline
                points="175,26 190,20 205,14 220,8"
                fill="none"
                stroke="#3fae5a"
                strokeWidth="1.5"
                strokeDasharray="3,2"
              />
            </svg>
            <div className="flex justify-between text-ink-500 text-[9px] mt-1 font-sans">
              <span>Jun 2023</span><span>Jun 2024</span><span className="text-green-400">Price Prediction</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mt-3 font-sans">
            {["Trading Volume", "Fear & Greed", "Sentiment", "Recent Events"].map((label) => (
              <div key={label} className="bg-black/40 rounded p-1.5 text-center border border-white/5">
                <p className="text-ink-500 text-[8px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
