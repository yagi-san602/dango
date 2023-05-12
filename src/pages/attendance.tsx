import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

type LabourHour = {
  start: string;
  end: string;
};

const IndexPage: NextPage = (): ReactElement => {
//  const [count, setCount] = useState<number>(0);
  const [labourHours, setLabourHours] = useState<string>('');
  const [labourStart, setLabourStart] = useState<string>('');
  const [labourEnd, setLabourEnd] = useState<string>('');

  // 数値チェック用
  const regex = /[0-5]?[0-9]/;

  const hour: LabourHour = {
    start: '',
    end: ''
  };

  // 労働時間算出
  const calculateLabourHour = (hour: LabourHour): number => {
    // 差を分単位で算出
    let num = 0;
    const hoursAndMinutesS = hour.start.split(':');
    const hoursAndMinutesE = hour.end.split(':');
    let hourS = Number(hoursAndMinutesS[0]);
    let minuteS = Number(hoursAndMinutesS[1]);
    let hourE = Number(hoursAndMinutesE[0]);
    let minuteE = Number(hoursAndMinutesE[1]);

    num = (hourE - hourS) * 60 + (minuteE - minuteS);
    //console.log(num);

    return num; // numはnumber型
  };

  // 労働時間を出力形式に
  const getLabourHour = (hour: LabourHour): string => {
    let num = calculateLabourHour(hour);
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    // 分は0埋め
    let labourTxt = `${hours}:` + `0${minutes}`.slice(-2);
    return labourTxt; // labourTxtはstring型
  };

  // 入力値時刻チェック
  const isTime = (hour: LabourHour): boolean => {
    let bln = false;
    const hoursAndMinutesS = hour.start.split(':');
    const hoursAndMinutesE = hour.end.split(':');

    // 時分が:区切りで入っているか
    if (hoursAndMinutesS.length === 2 && hoursAndMinutesE.length === 2) {
      // 入力値は数値か
      if (regex.test(`${hoursAndMinutesS[0]}`) && regex.test(`${hoursAndMinutesS[1]}`)
        && regex.test(`${hoursAndMinutesE[0]}`) && regex.test(`${hoursAndMinutesE[1]}`)) {
          // 入力値の範囲は正しいか
          let hourS = Number(hoursAndMinutesS[0]);
          let minuteS = Number(hoursAndMinutesS[1]);
          let hourE = Number(hoursAndMinutesE[0]);
          let minuteE = Number(hoursAndMinutesE[1]);
          if (hourS >= 0 && hourS <= 23 && minuteS >= 0 && minuteS <= 59 
          && hourE >= 0 && hourE <= 23 && minuteE >= 0 && minuteE <= 59 
          && (hourE > hourS || (hourE === hourS && minuteE >= minuteS))) {
            bln = true;
          }
        }
    }
    return bln; // blnはboolean型
  };

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-800 text-lg">勤務開始時間</span>
            <span className="text-gray-800 text-lg">勤務終了時間</span>
            <span className="text-gray-800 text-lg">労働時間</span>
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                //hour.start = e.target.value;
                setLabourStart(e.target.value);
              }}
            />
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                //hour.end = e.target.value;
                setLabourEnd(e.target.value);
              }}
            />
            <span className="select-none text-xl font-mono text-gray-700 text-right">{labourHours}</span>
          </div>
          <div className="grid grid-cols gap-2">
            <Button
                className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
                onClick={() => {
                  hour.start = labourStart;
                  hour.end = labourEnd;
                  if (isTime(hour)) {
                    setLabourHours(getLabourHour(hour));
                  } else {
                    setLabourHours('');
                  }
                }}>
                <span className="select-none text-xl">=</span>
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
