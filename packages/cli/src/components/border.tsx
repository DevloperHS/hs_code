// border
export const EmptyBorder = {
    topT: "",
    bottomT: "",
    leftT: "",
    rightT: "",
    cross: "",
    topLeft: "",
    topRight: "",
    bottomLeft: "",
    bottomRight: "",
    horizontal: "",
    vertical: "",
}

export const SplitBorder = {
    border: ["left" as const , "right" as const],
    customBorderChars: {
        ...EmptyBorder,
        vertical: "│",
    },
}