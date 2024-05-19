import {useEffect , useState} from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Progress({data,setPercentageBar}) {
  const [progress, setProgress] = useState(0);
    const [percentageValue , setPercentageValue] = useState(0);
    const {currentLevel , maxLevel} = data;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [currentLevel]);

  useEffect(()=>{

    const getPercentage = () => {
        const percentage = Math.ceil((currentLevel / maxLevel) * 100);
        // console.log("curt : " , currentLevel);
        // console.log("precentage : ",  percentage );
        setPercentageValue(percentage);
        setPercentageBar(percentage);
      };

        getPercentage();
  },[currentLevel , maxLevel]);

  return (
    <Stack spacing={2} direction="row">
        
      <CircularProgress variant="determinate" value={100} size={140}  />
    </Stack>
  );
}