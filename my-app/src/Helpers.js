export function getGaugeColor(score, minScore, maxScore) {
    var topRange = minScore + ((maxScore / 100) * 60);
    var bottomRange = minScore + ((maxScore / 100) * 40);
    switch (true) {
        case (score <= bottomRange):
            return "#ccece6"
        case (score >= topRange):
            return "#238b45"
        default:
            return "#66c2a4"
    }
}