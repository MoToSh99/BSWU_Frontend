export function getGaugeColor(score) {
    switch (true) {
        case (score < 5.4):
            return "#e5f5f9"
        case (score < 5.7):
            return "#bae4b3"
        case (score < 6.0):
            return "#74c476"
        case (score < 6.3):
            return "#31a354"
        default:
            return "#006d2c"
    }
}