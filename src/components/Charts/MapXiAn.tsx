import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import data from '../../data/beijing';
import subwayLines from '../../data/xian';

interface BusLine {
  length: number;
  [index: number]: number;
}

interface LineStyle {
  normal: {
    color: string;
  };
}

interface BusLineData {
  coords: [number, number][];
  lineStyle: LineStyle;
}

const transformBusLines = (data: BusLine[], hStep: number): BusLineData[] => {
  return data.reduce((acc, busLine, idx) => {
    let prevPt: number[] = [];
    let points: [number, number][] = [];

    for (let i = 0; i < busLine.length; i += 2) {
      let pt: [number, number] = [busLine[i], busLine[i + 1]];
      if (i > 0) {
        pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
      }
      prevPt = pt;
      points.push([pt[0] / 1e4, pt[1] / 1e4]);
    }

    acc.push({
      coords: points,
      lineStyle: {
        normal: {
          color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx)),
        },
      },
    });

    return acc;
  }, [] as BusLineData[]);
};

const Map: React.FC = () => {
  const [mapOptions, setMapOptions] = useState<any>(null);

  useEffect(() => {
    const loadBMap = () => {
      const hStep = 300 / (data.length - 1);
      const busLines: BusLineData[] = transformBusLines(data, hStep);
      console.log('busLines', JSON.stringify(busLines.slice(0, 5)));
      const options = {
        backgroundColor: 'transparent',
        bmap: {
          center: [108.94, 34.26],
          zoom: 12.2,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: 'water',
                elementType: 'all',
                stylers: {
                  color: '#031628',
                },
              },
              {
                featureType: 'land',
                elementType: 'geometry',
                stylers: {
                  color: '#000102',
                },
              },
              {
                featureType: 'highway',
                elementType: 'all',
                stylers: {
                  visibility: 'off',
                },
              },
              {
                featureType: 'arterial',
                elementType: 'geometry.fill',
                stylers: {
                  color: '#000000',
                },
              },
              {
                featureType: 'arterial',
                elementType: 'geometry.stroke',
                stylers: {
                  color: '#0b3d51',
                },
              },
              {
                featureType: 'local',
                elementType: 'geometry',
                stylers: {
                  color: '#000000',
                },
              },
              {
                featureType: 'railway',
                elementType: 'geometry.fill',
                stylers: {
                  color: '#000000',
                },
              },
              {
                featureType: 'railway',
                elementType: 'geometry.stroke',
                stylers: {
                  color: '#08304b',
                },
              },
              {
                featureType: 'subway',
                elementType: 'geometry',
                stylers: {
                  lightness: -50,
                },
              },
              {
                featureType: 'building',
                elementType: 'geometry.fill',
                stylers: {
                  color: '#000000',
                },
              },
              {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: {
                  color: '#857f7f',
                },
              },
              {
                featureType: 'all',
                elementType: 'labels.text.stroke',
                stylers: {
                  color: '#000000',
                },
              },
              {
                featureType: 'building',
                elementType: 'geometry',
                stylers: {
                  color: '#022338',
                },
              },
              {
                featureType: 'green',
                elementType: 'geometry',
                stylers: {
                  color: '#062032',
                },
              },
              {
                featureType: 'boundary',
                elementType: 'all',
                stylers: {
                  color: '#465b6c',
                },
              },
              {
                featureType: 'manmade',
                elementType: 'all',
                stylers: {
                  color: '#022338',
                },
              },
              {
                featureType: 'label',
                elementType: 'all',
                stylers: {
                  visibility: 'off',
                },
              },
            ],
          },
        },
        series: subwayLines.map((line) => ({
          name: 'xianlu',
          type: 'lines',
          coordinateSystem: 'bmap',
          data: [
            // {
            //   coords: line.coords,
            // },
          ],
          polyline: true,
          lineStyle: {
            color: 'red',
            type: 'dashed',
            join: 'round',
            inactiveColor: '#fff',
            shadowOffsetX: 1,
            width: 4,
            opacity: 0.8,
          },
          effect: {
            show: true,
            constantSpeed: 30,
            trailLength: 0.7,
            symbolSize: 5,
          },
        })),
      };

      setMapOptions(options);
    };

    loadBMap();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {mapOptions && (
        <ReactECharts
          option={mapOptions}
          style={{ height: '500px', width: '100%' }}
        />
      )}
    </div>
  );
};

export default Map;
