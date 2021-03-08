import React from 'react'
import type { Perfume } from '@src/constants/perfumes'
import PerfumeCard from './PerfumeCard'

const Perfumes: React.FC<{ perfumes: Perfume[] }> = ({ perfumes }) => {

    return (<div className="grid grid-cols-3 gap-4">
        {perfumes.map((perfume) => <PerfumeCard key={ perfume._id } perfume={ perfume } />) }
    </div>)
}

export default Perfumes