import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<number>(0);
  const [memo, setMemo] = useState<number>(0);
  const [dspCount, setDspCount] = useState<string>('0');
  const [flgMath, setFlgMath] = useState<string>('1');
  const [flgDot, setFlgDot] = useState<string>('0');
  const [flgCal, setFlgCal] = useState<string>('0');
  const [labourHours, setLabourHours] = useState<string>('0');

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{dspCount}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '1';
                } else {
                  d = d + '1';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '2';
                } else {
                  d = d + '2';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '3';
                } else {
                  d = d + '3';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let math = flgMath;
                let cal = flgCal;
                let ans = 0;
                if (math === '0') {
                  switch(cal){
                    case '1':
                      ans = memo + count;
                      break;
                    case '2':
                      ans = memo - count;
                      break;
                    case '3':
                      ans = memo * count;
                      break;
                    case '4':
                      ans = memo / count;
                      break;
                    default :
                      ans = count;
                      break;
                  }
                  setMemo(ans);
                  setDspCount(`${ans}`);
                  setFlgMath('1');
                  setFlgDot('0');
                }
                setFlgCal('1');
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '4';
                } else {
                  d = d + '4';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '5';
                } else {
                  d = d + '5';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '6';
                } else {
                  d = d + '6';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let math = flgMath;
                let cal = flgCal;
                let ans = 0;
                if (math === '0') {
                  switch(cal){
                  case '1':
                    ans = memo + count;
                    break;
                  case '2':
                    ans = memo - count;
                    break;
                  case '3':
                    ans = memo * count;
                    break;
                  case '4':
                    ans = memo / count;
                    break;
                  default :
                    ans = count;
                    break;
                  }
                  setMemo(ans);
                  setDspCount(`${ans}`);
                  setFlgMath('1');
                  setFlgDot('0');
                }
                setFlgCal('2');
              }}>
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '7';
                } else {
                  d = d + '7';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '8';
                } else {
                  d = d + '8';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '9';
                } else {
                  d = d + '9';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">9</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let math = flgMath;
                let cal = flgCal;
                let ans = 0;
                if (math === '0') {
                  switch(cal){
                  case '1':
                    ans = memo + count;
                    break;
                  case '2':
                    ans = memo - count;
                    break;
                  case '3':
                    ans = memo * count;
                    break;
                  case '4':
                    ans = memo / count;
                    break;
                  default :
                    ans = count;
                    break;
                  }
                  setMemo(ans);
                  setDspCount(`${ans}`);
                  setFlgMath('1');
                  setFlgDot('0');
                }
                setFlgCal('3');
              }}>
              <span className="select-none text-xl">*</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (flgDot === '0') {
                  d = d + '.';
                  setFlgDot('1');
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let d = dspCount;
                let math = flgMath;
                if (math === '1') {d = '0'}
                if (d === '0') {
                  d = '0';
                } else {
                  d = d + '0';
                }
                setDspCount(d);
                setCount(Number(d));
                setFlgMath('0');
              }}>
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let math = flgMath;
                let cal = flgCal;
                let ans = 0;
                if (math === '0') {
                  switch(cal){
                    case '1':
                      ans = memo + count;
                      break;
                    case '2':
                      ans = memo - count;
                      break;
                    case '3':
                      ans = memo * count;
                      break;
                    case '4':
                      ans = memo / count;
                      break;
                    default :
                      ans = count;
                      break;
                  }
                  setMemo(0);
                  setDspCount(`${ans}`);
                  setFlgMath('1');
                  setFlgDot('0');
                }
                setFlgCal('0');
              }}>
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let math = flgMath;
                let cal = flgCal;
                let ans = 0;
                if (math === '0') {
                  switch(cal){
                  case '1':
                    ans = memo + count;
                    break;
                  case '2':
                    ans = memo - count;
                    break;
                  case '3':
                    ans = memo * count;
                    break;
                  case '4':
                    ans = memo / count;
                    break;
                  default :
                    ans = count;
                    break;
                  }
                  setMemo(ans);
                  setDspCount(`${ans}`);
                  setFlgMath('1');
                  setFlgDot('0');
                }
                setFlgCal('4');
              }}>
              <span className="select-none text-xl">/</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
