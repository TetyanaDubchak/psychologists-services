import { Psychologist } from "@/lib/stateTypes";

export const handleSortStartEnd = (list: Psychologist[]) => {
    const sorted = [...list].sort((firstPsychologist, secondPsychologist) => firstPsychologist.name.localeCompare(secondPsychologist.name));
    return sorted
}

export const handleSortEndStart = (list: Psychologist[]) => {
    const sorted = [...list].sort((firstPsychologist, secondPsychologist) =>secondPsychologist.name.localeCompare(firstPsychologist.name));
    return sorted
}

export const handleFilterLess150 = (list: Psychologist[]) => {
    const filtered = list.filter((item) => item.price_per_hour <= 150);
    console.dir(filtered);
    return filtered
}

export const handleFilterGreater150 = (list: Psychologist[]) => {
    const filtered = list.filter((item)=>item.price_per_hour > 150);
    return filtered
}

export const handleSortPopular = (list: Psychologist[]) => {
    const sorted = [...list].sort((firstPsychologist, secondPsychologist) => secondPsychologist.rating - firstPsychologist.rating);
    return sorted
}

export const handleSortNotPopular = (list: Psychologist[]) => {
    const sorted = [...list].sort((firstPsychologist, secondPsychologist) => firstPsychologist.rating - secondPsychologist.rating);
    return sorted
}