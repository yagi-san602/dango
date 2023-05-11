import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {
  const [memo, setMemo] = useState<number>(0);
  const [dspCount, setDspCount] = useState<string>('0');
  const [flgMath, setFlgMath] = useState<string>('ON'); // OFF：表示値に追加、ON：表示値クリア
  const [flgDot, setFlgDot] = useState<string>('OFF');  // OFF：カンマ未入力、ON：カンマ入力
  const [flgCal, setFlgCal] = useState<string>('');     // +/*-：直前に設定された演算子、''：演算子なし（=）
  //const [labourHours, setLabourHours] = useState<string>('0');
  let operator : '+' | '-' | '*' | '/' | '=';

//数字入力関数
function hitNumber (num: string ):void {
  let d = dspCount;
  let math = flgMath;
  if (math === 'ON') {d = '0';}
  if (d === '0') {
    d = `${num}`;
  } else {
    d = `${d}${num}`;
  }
  setFlgMath('OFF');
  setDspCount(d);
};

//ドット入力関数 ※数字入力と統合するかも
function hitDot (num: string ):void {
  let d = dspCount;
  let math = flgMath;
  if (math === 'ON') {d = '0';}
  if (flgDot === 'OFF') {
    d = `${d}${num}`;
    setFlgDot('ON');
  }
  setFlgMath('OFF');
  setDspCount(d);
};

//演算子入力関数
function hitOperator (ope: typeof operator):void {
  let math = flgMath;
  let cal = flgCal;
  let ans = 0;
  if (math === 'OFF') {
    switch(cal){
      case '+':
        ans = memo + Number(dspCount);
        break;
      case '-':
        ans = memo - Number(dspCount);
        break;
      case '*':
        ans = memo * Number(dspCount);
        break;
      case '/':
        ans = memo / Number(dspCount);
        break;
      default :
        ans = Number(dspCount);
        break;
    }
    setMemo(ans);
    setDspCount(`${ans}`);
    setFlgMath('ON');
    setFlgDot('OFF');
  }
  setFlgCal(ope);
};

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
                hitNumber('1');
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('2');
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('3');
              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitOperator('+');
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('4');
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('5');
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('6');
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitOperator('-');
              }}>
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('7');
              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('8');
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('9');
              }}>
              <span className="select-none text-xl">9</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitOperator('*');
              }}>
              <span className="select-none text-xl">*</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitDot('.');
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitNumber('0');
              }}>
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitOperator('=');
              }}>
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hitOperator('/');
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
