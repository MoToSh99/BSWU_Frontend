export function getGaugeColor(score) {
    switch (true) {
        case (score < 5.7):
            return "#bae4b3"
        case (score < 6.0):
            return "#74c476"
        default:
            return "#31a354"
    }
}