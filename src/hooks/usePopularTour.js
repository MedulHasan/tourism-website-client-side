import { useContext } from 'react';
import { PopularTour } from '../context/PopularTourProvider';

const usePopularTour = () => {
    return useContext(PopularTour)
};

export default usePopularTour;