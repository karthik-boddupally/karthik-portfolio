export default function SignLanguageMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-[#0d0507] border border-white/10 font-mono text-[11px]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-32 bg-black/40 border-r border-white/5 p-3 space-y-3 hidden sm:block">
          <p className="text-ink-100 text-[10px] font-sans font-semibold">Dashboard</p>
          <p className="text-ink-500 text-[10px] font-sans">Gesture Library</p>
          <div className="pl-2 space-y-1 text-ink-500 text-[10px] font-sans">
            <p>L</p><p>A</p><p>C</p><p>H</p><p>et..</p>
          </div>
          <p className="text-ink-500 text-[10px] font-sans">Dataset</p>
          <p className="text-ink-500 text-[10px] font-sans">Model:<br />HandNet v3.5</p>
          <p className="text-ink-500 text-[10px] font-sans">Settings</p>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 grid grid-cols-2 gap-2">
          {/* hand tracking box */}
          <div className="col-span-2 sm:col-span-1 bg-black/50 rounded-lg p-2 border border-white/5">
            <p className="text-ink-300 mb-2">HAND GESTURE RECOGNITION (LIVE INPUT)</p>
            <div className="relative h-28 rounded bg-gradient-to-br from-black/60 to-crimson/10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                <g stroke="#ff4757" strokeWidth="1.2" fill="none" opacity="0.9">
                  <path d="M50 90 L48 55 L30 40 M48 55 L40 30 M48 55 L50 25 M48 55 L60 30 M48 55 L68 42" />
                </g>
                <g fill="#ff4757">
                  {[[50, 90], [48, 55], [30, 40], [40, 30], [50, 25], [60, 30], [68, 42]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.4" />
                  ))}
                </g>
              </svg>
              <span className="absolute top-1 left-1 text-crimson-light font-semibold">ASL: L</span>
            </div>
            <p className="text-ink-300 mt-2">DETECTED: ASL - Letter 'L'</p>
            <p className="text-ink-500">Confidence: 98.4%</p>
          </div>

          {/* neural net */}
          <div className="col-span-2 sm:col-span-1 bg-black/50 rounded-lg p-2 border border-white/5">
            <svg viewBox="0 0 140 100" className="w-full h-28">
              {[0, 1, 2, 3].map((layer) =>
                [0, 1, 2, 3].map((node) => {
                  const x = 15 + layer * 38;
                  const y = 12 + node * 26;
                  if (layer === 3 && node > 0) return null;
                  return (
                    <g key={`${layer}-${node}`}>
                      {layer < 3 &&
                        [0, 1, 2, 3].map((nn) =>
                          layer === 2 && nn > 0 ? null : (
                            <line
                              key={nn}
                              x1={x}
                              y1={y}
                              x2={15 + (layer + 1) * 38}
                              y2={12 + nn * 26}
                              stroke="#ff4757"
                              strokeWidth="0.4"
                              opacity="0.35"
                            />
                          )
                        )}
                      <circle cx={x} cy={y} r="4" fill={layer === 0 ? "#5b9bd5" : "#ff4757"} opacity="0.9" />
                    </g>
                  );
                })
              )}
            </svg>
            <div className="flex justify-between text-ink-500 text-[9px] mt-1">
              <span>Input</span><span>Hidden</span><span>Hidden</span><span>Output</span>
            </div>
          </div>

          {/* gesture log + confidence chart */}
          <div className="col-span-2 bg-black/50 rounded-lg p-2 border border-white/5">
            <p className="text-ink-300 mb-1">GESTURE STREAM LOG</p>
            <p className="text-crimson-light mb-2">[L] (98.4%) | [A] (96.2%) | [C] (97.8%)</p>
            <svg viewBox="0 0 260 40" className="w-full h-10">
              <polyline
                points="0,30 20,15 40,25 60,10 80,20 100,8 120,22 140,12 160,18 180,6 200,16 220,10 240,20 260,14"
                fill="none"
                stroke="#ff2d3a"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
