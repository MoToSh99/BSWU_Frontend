export function getGaugeColor(score, minScore, maxScore) {
    var topRange = maxScore - ((maxScore / 100) * 33);
    var bottomRange = minScore + ((maxScore / 100) * 33);
    switch (true) {
        case (score <= bottomRange):
            return "#e5f5e0"
        case (score >= topRange):
            return "#31a354"
        default:
            return "#a1d99b"
    }
}