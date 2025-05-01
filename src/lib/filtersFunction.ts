import { Psychologist } from "@/lib/stateTypes";

export const handleSortStartEnd = (list: Psychologist[]) => {
    const sorted = [...list].sort((firstPsychologist, secondPsychologist) => firstPsychologist.name.localeCompare(secondPsychologist.name));
    return sorted
}