import { Statistic } from "antd";
import CountUp from "react-countup";

const Counter = () => {
  const formatter: any = (value: number) => (
    <CountUp end={value} separator="," />
  );
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="grid gap-2">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
            </div>
          </div>

          <div className="flip-box min-h-20">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={250}
                        formatter={formatter}
                        className="statics"
                      />
                      +
                    </div>
                    <div>No. of Projects Completed</div>
                  </div>
                </div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={250}
                        formatter={formatter}
                        className="statics2"
                      />
                      +
                    </div>
                    <div>No. of Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flip-box min-h-36">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={8}
                        formatter={formatter}
                        className="statics"
                      />
                      +
                    </div>
                    <div>States Worked In</div>
                  </div>
                </div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={8}
                        formatter={formatter}
                        className="statics2"
                      />
                      +
                    </div>
                    <div>States Worked In</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-box min-h-20">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
            </div>
          </div>
          <div className="flip-box min-h-36">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={50}
                        formatter={formatter}
                        className="statics3"
                      />
                      +
                    </div>
                    <div>Structural Engineers & Architects</div>
                  </div>
                </div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={50}
                        formatter={formatter}
                        className="statics4"
                      />
                      +
                    </div>
                    <div>Structural Engineers & Architects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flip-box min-h-20">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
            </div>
          </div>
          <div className="flip-box min-h-36">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={2000}
                        formatter={formatter}
                        className="statics"
                      />
                      +
                    </div>
                    <div>Running Meters of P-T Cable Installed</div>
                  </div>
                </div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={2000}
                        formatter={formatter}
                        className="statics2"
                      />
                      +
                    </div>
                    <div>Running Meters of P-T Cable Installed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-box min-h-20">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flip-box min-h-36">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={40}
                        formatter={formatter}
                        className="statics3"
                      />
                      +
                    </div>
                    <div>Cities Worked In</div>
                  </div>
                </div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={40}
                        formatter={formatter}
                        className="statics4"
                      />
                      +
                    </div>
                    <div>Cities Worked In</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-box min-h-20">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
              </div>
            </div>
          </div>
          <div className="flip-box min-h-36">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={8000}
                        formatter={formatter}
                        className="statics"
                      />
                      +
                    </div>
                    <div>Sq. Ft. Area covered</div>
                  </div>
                </div>
              </div>
              <div className="flip-box-back">
                <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                  <div>
                    <div className="text-2xl font-semibold flex justify-center">
                      <Statistic
                        value={8000}
                        formatter={formatter}
                        className="statics2"
                      />
                      +
                    </div>
                    <div>Sq. Ft. Area covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
