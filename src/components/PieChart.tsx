/* eslint-disable */
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
  { value: 20 },
];

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
}));

function PieCenterLabel({ title, label }: PieProps) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
      <StyledText x={left + width / 2} y={top + height / 2-10} fontWeight='bold' fontSize='30' >
        {title}
      </StyledText>
      <StyledText x={left + width / 2} y={top + height / 2+30} fontSize='20'>
        {label}
      </StyledText>
    </>
  );
}

interface PieProps {
  title: string;
  label: string;
}

const Pie = ({ title, label, ...props }: PieProps) => {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 90,
          outerRadius: 100,
          paddingAngle: 0,
          cornerRadius: 1,
          startAngle: -180,
          endAngle: 180,
        },
      ]}
      {...size}
    >
      <PieCenterLabel title={title} label={label} />
    </PieChart>
  );
};

export default Pie;
