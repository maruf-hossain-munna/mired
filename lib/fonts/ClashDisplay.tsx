import localFont from "next/font/local";

const ClashDisplay = localFont({
    src : [
        {
            path: "../../public/fonts/ClashDisplay-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/ClashDisplay-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/ClashDisplay-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/ClashDisplay-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/ClashDisplay-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/ClashDisplay-Extralight.otf",
            weight: "800",
            style: "normal",
        },
    ]
});

export default ClashDisplay;